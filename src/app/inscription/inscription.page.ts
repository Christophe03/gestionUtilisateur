import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private service: AuthService, private fire: AngularFirestore, private route: Router) { }

  ngOnInit() {
  }
  register(data){
    try {
      this.service.register(data.value.email, data.value.password).then(result=>{
        console.log(result);
        this.fire.collection('users').doc(result.user.uid).set({
          'nomComplet':data.value.nom,
          'numerotel':data.value.numero,
          'Adressemail':data.value.email,
          'Motpasse':data.value.password
        });
        this.route.navigate(['/login']);
        this.service.myMessage('Inscription effectuer avec Success', 'success')
      });
    } catch (error) {
      console.log(error);
    }
  }

}
