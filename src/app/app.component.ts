import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Git Repo fetcher';
  searchTerm = ''; 
  personal = false;
  repos = [];
  errorMsg = '';
  done = false;

  /*term;
  starred;*/

  ngOnInit() {
    this.errorMsg='';
  }

  async loadData(_searchTerm:string,_personal:boolean){
    this.repos = [];
    this.errorMsg = '';
    console.log(_searchTerm + '|' + _personal);
    let sulfix = (_personal)?'/repos?per_page=50':'/starred';
    try {
      const response = await axios.get('https://api.github.com/users/'+_searchTerm+sulfix);
      this.repos = response.data;
      console.log(this.repos)
    } catch (error) {
      this.errorMsg = 'Nenhum resultado encontrado';
    }
  }

  onSubmit(f: NgForm) {
    let _data = f.value;
    this.searchTerm = _data.term;
    this.personal = _data.personal;
    this.done = (f.valid ? true : false);
    if (!this.done){
      this.errorMsg = 'Nenhum dado inserido';
    }else{
      this.loadData(this.searchTerm,this.personal);
      
    }
  }
}
