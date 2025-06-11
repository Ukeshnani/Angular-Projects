import { Directive, ElementRef, inject, Renderer2 } from "@angular/core";

@Directive({
    selector: "[custom]"
})

export class customD{
    private element = inject(ElementRef)
    private renderer = inject(Renderer2)

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor = 'red'
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow')
        this.renderer.setAttribute(this.element.nativeElement,'title','hey hii')
    }
}