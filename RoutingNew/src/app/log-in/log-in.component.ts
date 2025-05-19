import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit{
  username:string = ''
  password:string = ''
  authSerive = inject(AuthService)
  router: Router = inject(Router)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  pathh!: string 

ngOnInit(): void {
 

    this.activeRoute.queryParamMap.subscribe((data)=>{
      const logout = Boolean(data.get('LogOut'))
      if(logout){
        this.authSerive.logOut()
        alert(this.authSerive.isLogged)
      }
      

    })
}

  onLogIn(){
    const user = this.authSerive.logIn(this.username,this.password);
    if(user === undefined){
      alert("please check credentials")
    }else{
      const target = this.authSerive.recentURL
      this.authSerive.recentURL= ''
  
      this.router.navigate([target])
    }

  }


}
