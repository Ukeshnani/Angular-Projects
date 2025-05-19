import { Component, inject, OnInit } from '@angular/core';
import { Itemlist } from '../Services/items.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  private ItemsList = inject(Itemlist)
  bikes?: { id: number; name: string }[] | undefined;
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  searchString: string='';

  ngOnInit(): void {
      // this.searchString=this.activeRoute.snapshot.queryParams['search'];
      // this.searchString=this.activeRoute.snapshot.queryParamMap.get('search') || '';
      this.activeRoute.queryParamMap.subscribe((data)=>{
        this.searchString = data.get('search') || '';
        console.log(this.searchString)
      if(this.searchString=== undefined || this.searchString === ''){
        // this.ItemsList.getAllbikes().subscribe((data: any)=>{
        //   this.bikes = data;

        // })
        this.bikes=this.activeRoute.snapshot.data['items']
        console.log(this.bikes)
      }else{
        this.bikes = this.ItemsList.bikeDetails.filter((data)=> data.name.toLowerCase().includes(this.searchString))
        console.log(this.bikes)
      }

      })

      
     

  }

  
  




}
