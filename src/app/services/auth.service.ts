import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private toastMessages: ToastController, private telecharge: LoadingController) {

  }
  async myMessage(message, color){
    const msg = await this.toastMessages.create({
      message: message,
      color: color,
      position: 'top',
      duration: 2000

    })
    msg.present();
  }
  async login(email, password){
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
  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.auth.currentUser) {
        this.auth.signOut()
          .then(() => {
            console.log('Sign out');
            resolve();
          }).catch(() => {
          reject();
        });
      }
    })
  }
}
