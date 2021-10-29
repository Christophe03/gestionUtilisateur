import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public verifie: AuthService, public route: Router) { }

  ngOnInit() {
  }
  logUser(data){
    try {
     if(data.value.email !=='||data.value.password !=='){
      return this.verifie.login(data.value.email, data.value.password).then(res =>{
        console.log(res)
        this.route.navigate(['/acceuil'])
        this.verifie.myMessage('Bienvenue', 'success');
       })
     }else{
       this.verifie.myMessage('Remplissez touts les Champs', 'danger');
     }
    }
    catch (error) {
      console.log(error);
      this.verifie.myMessage('Error de pass', 'danger');
    }
  }
}
