import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }

  name=""
  Blood=""
  dob=""
  occupation=""
  diseases=""
  last_donate=""
  address=""
  pincode=""
  number=""
  email=""


  readvalues=()=>{
    let data={

 "name":this.name,
  "Blood":this.Blood,
  "dob":this.dob,
  "occupation":this.occupation,
  "diseases":this.diseases,
  "last_donate":this.last_donate,
  "address":this.address,
  "pincode":this.pincode,
  "number":this.number,
  "email":this.email
    }
    console.log(data)
  }
  










  ngOnInit(): void {
  }

}
