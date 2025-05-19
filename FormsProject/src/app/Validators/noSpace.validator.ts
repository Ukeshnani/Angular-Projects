import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidate{

    static noSpaceAllowed(control: AbstractControl){
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed:true}
        }
        return null;
    }
    // static checkUsername(control: AbstractControl):Observable<ValidationErrors | null>{
    //     return checkUserName(control.value)
    // }
  

}

//async validate using static async 

// function checkUserName(username: string): Observable<ValidationErrors | null> {

//     const takenusernames = ['ukesh','ukeshnani','naniukesh'];
//     return new Observable((observer)=>{
//         setTimeout(()=>{
//             if (takenusernames.includes(username)) {
//                 console.log('Username is taken');
//                 observer.next({ checkUsername: true } as ValidationErrors);
//             }else{
//                 console.log("jhjh")
//                 observer.next(null)
//             }
//         }, 5000);
//     })
// }


