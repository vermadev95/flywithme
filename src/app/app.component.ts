import { Component,OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from "./data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users:any;
  update:boolean = false;
  constructor(updates: SwUpdate,private data:DataService){
    updates.available.subscribe(event => {
      // this.update = true;
      // updates.activateUpdate().then(() =>{
      //   document.location.reload()
      // })
    })
  }

  ngOnInit(){
    this.data.getUsers().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    })
  }
}
