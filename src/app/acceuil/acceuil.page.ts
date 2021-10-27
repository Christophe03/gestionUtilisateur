import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {
  itemsCollect: AngularFirestoreCollection;
  items: Observable<any[]>;

  constructor(public fire: AngularFirestore) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.itemsCollect= this.fire.collection('users');
    this.items=this.itemsCollect.valueChanges();
    console.log(this.items);
  }

}
