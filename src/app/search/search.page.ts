import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  usersList: any[];
  usersSave: any[];

  constructor(public fire: AngularFirestore, private router: Router, private service: AuthService) { }

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
