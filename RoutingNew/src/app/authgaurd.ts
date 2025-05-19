import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router"
import { Itemlist } from "./Services/items.service"



export const canActivate = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) => {
    
    const authservice = inject(AuthService)
   const  roter :Router = inject(Router)
    if(authservice.isAuthenticated()){
        return true

    }else{
        authservice.recentURL = state.url
        roter.navigate(['/login'])
        return false
    }


}

// export const canActivateChild =()=>{
//     return canActivate();

// }

export const resolve = () => {
    const Itemservice = inject(Itemlist)
    return Itemservice.getAllbikes()

}