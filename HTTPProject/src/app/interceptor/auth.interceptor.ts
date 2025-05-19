import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const modifierreq = req.clone({headers:req.headers.append('auth','bxczfyt')})
  console.log('hii'+ modifierreq)
  return next(modifierreq).pipe(tap((event)=>{
    if(event.type === HttpEventType.Response){
      console.log('this is respnce: ' + event.body)
    }

  }))
};
