import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild,  ContentChildren,  ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-content-child',
  imports: [CommonModule],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements AfterContentInit {
  @Input() products: Array<any> = []

  // @ContentChild('head') contentHead!: ElementRef;
  @ContentChildren('head') contentHead!: QueryList<ElementRef>;


  ngAfterContentInit(){
    // console.log(this.contentHead.nativeElement.value)
    // this.contentHead.nativeElement.setAttribute('style', 'color:red')
    this.contentHead.forEach((item)=>{
      item.nativeElement.setAttribute('style','color:red')

    })
  }




}
