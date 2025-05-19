import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { sericeFile } from '../../Services/Cals';
import { Observable, Subject, Subscriber } from 'rxjs';
import { ServicesssService } from '../../Services/servicesss.service';


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit {
  private notificationS = inject(ServicesssService)
  notmsg:string=''
  ngOnInit(): void {

    this.notificationS.notificationSub.subscribe(d => {
      this.notmsg = d

    })
   

    

  
  }
  userData = {
    name: "Ukesh",
    age: 22,
    Role: "Developer Intern",
    company: "Ariqt International",
    Location: "Hyderabad"

  }

  isloggedin: boolean = true

  visibleMe() :void {
  this.isloggedin = !this.isloggedin

  }

   private calculator = inject(sericeFile);
   res =  this.calculator.add(5,5)
   sb = this.calculator.sub(15,10)

   

   
   


}
