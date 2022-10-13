import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonor',
  templateUrl: './searchdonor.component.html',
  styleUrls: ['./searchdonor.component.css']
})
export class SearchdonorComponent implements OnInit {

  constructor() { }

Blood=""
readValues=()=>{
  let data={
    "Blood":this.Blood
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}
