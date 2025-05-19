import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: any[]) {
        return value.filter((val)=>
             val.price > 10000

        )
       
        
    }

}

//--not use this pipes for filtering and sorting an arry or array of objects beacuse these pipes are by default 