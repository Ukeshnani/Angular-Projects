import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(value: number,total:number,dec:number) {
        return ((value/total)*100).toFixed(dec)+"%";
        
    }
}