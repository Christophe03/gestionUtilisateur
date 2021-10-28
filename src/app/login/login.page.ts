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
     return this.verifie.login(data.value.email, data.value.password).then(res =>{
       console.log(res)
       this.route.navigate(['/acceuil'])
      });
    }
    catch (error) {
      console.log(error.message('email ou mot de passe incorrect'));
    }
  }
}
