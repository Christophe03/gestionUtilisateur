import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  usersList: any[];
  usersSave: any[];

  constructor(public fire: AngularFirestore) { }

  async ngOnInit() {
    this.fire.collection('users').valueChanges().subscribe(getList =>{
      this.usersList = getList;
      this.usersSave = getList;
    })
  }
  async initUsers(): Promise<any>{
    this.usersList=this.usersSave;
  }
  async filterList(evt){
    this.initUsers();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm){
      return;
    }
    this.usersList = this.usersList.filter(search=>{
      if(search.nomComplet && searchTerm){
        if(search.nomComplet.toLowerCase().indexOf(searchTerm.toLowerCase())> -1){
          return true;
        }
        return false;
      }
    });
  }

}
