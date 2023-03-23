import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Service } from '../service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

 user:User=new User();
phone_number:any;
  
  ngOnInit() {
    this.getUserDetailByPhoneNumber();
  }

  constructor(private service:Service){}

  getUserDetailByPhoneNumber(){
    this.service.getUserById().subscribe(
      (resp:any)=>{
        this.user=resp;
        console.log(resp);
      }
    );
  }
  

}
