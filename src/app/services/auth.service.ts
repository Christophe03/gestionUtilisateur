import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { toastController } from '@ionic/core';
import { loadingController } from '@ionic/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) {

  }
  login(email, password){
    return new Promise<any>((resolve, reject)=>{
      this.auth.signInWithEmailAndPassword(email, password).then(
        res=>resolve(res),
        err=>reject(err)
      );
    });
  }
  register(email, password){
    return new Promise<any>((resolve, reject)=>{
      this.auth.createUserWithEmailAndPassword(email, password).then(
        res=>resolve(res),
        err=>reject(err)
      );
    });
  }
}
