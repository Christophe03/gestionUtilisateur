import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-nouveau-pass',
  templateUrl: './nouveau-pass.page.html',
  styleUrls: ['./nouveau-pass.page.scss'],
})
export class NouveauPassPage implements OnInit {
  user: any;
  uerconect: FirebaseApp;

  constructor(private router: Router,
    private service: AuthService,
    public auth: AngularFireAuth,
    public fire: AngularFirestore) { }

  ngOnInit() {
  }
  signOut() {
    this.service.signoutUser()
      .then(res => {
        this.router.navigateByUrl('home');
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePass(pass){
    if(pass.value.old_pass!==''&& pass.value.new_pass!==''&& pass.value.conf_new!=='' ){
      this.auth.authState.subscribe(auth=>{
        if(auth){
          this.fire.collection('users').doc(auth.uid).valueChanges().subscribe(result => {
            this.user=result;
            if(this.user.Motpasse===pass.value.old_pass){
              if(pass.value.new_pass===pass.value.conf_new ){
                auth.updatePassword(pass.value.new_pass);
                this.fire.collection('users').doc(auth.uid).update({
                  'Motpasse':pass.value.new_pass
                });
                console.log('modifier avec succes');
              }else{
                console.log('le nouveau mot de passe et l ancien sont different');
              }
            }else {
              console.log('Ancien mot de passe incorrecte');
            }
          });
        }else{
          console.log('non encore connecter');
        }
      });
    }else{
      console.log('vous n etes pas connecter');
    }
  }
}

