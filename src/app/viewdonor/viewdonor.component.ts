import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdonor',
  templateUrl: './viewdonor.component.html',
  styleUrls: ['./viewdonor.component.css']
})
export class ViewdonorComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()

  }

  fetchData=()=>{
    this.myapi.viewblood().subscribe(
      (data)=>{
        this.donorData=data
      }
    )
  }


  donorData:any = []

  ngOnInit(): void {
  }

}
