import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'second',
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit {
  dragons:any

  http: HttpClient = inject(HttpClient)

ngOnInit(): void {
    this.callData()
}

  callData(){
    this.http.get("https://dragonball-api.com/api/planets").subscribe((data)=>{
      this.dragons = data

    })
  }

}
