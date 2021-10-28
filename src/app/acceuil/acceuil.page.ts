import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  itemsCollect: AngularFirestoreCollection;
  items: Observable<any[]>;

  constructor(public fire: AngularFirestore, private router: Router, private service: AuthService) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.itemsCollect= this.fire.collection('users');
    this.items=this.itemsCollect.valueChanges();
    console.log(this.items);
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

}
