import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Itemlist } from '../Services/items.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-item',
  imports: [CommonModule,RouterLink],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent implements OnInit, OnDestroy{
  itemsList = inject(Itemlist)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  selectedBike?: { id: number; name: string };
  routId:number | undefined;
  paramMapObs:any;

  ngOnInit(): void {
    // this.routId = Number(this.activeRoute.snapshot.paramMap.get('id')) Normal Method......

    // this.activeRoute.params.subscribe((data)=>{    //observable method.....
    //     this.routId = Number(data['id']);
    //     this.selectedBike = this.itemsList.bikeDetails.find((item)=>item.id == this.routId)

    // })
    this.paramMapObs=this.activeRoute.paramMap.subscribe((data)=>{
      this.routId = Number(data.get('id'));
      this.selectedBike = this.itemsList.bikeDetails.find((item)=>item.id == this.routId)

  })
    
    
  }
  ngOnDestroy(): void{
    this.paramMapObs.unsubscribe();

  }

 

}
