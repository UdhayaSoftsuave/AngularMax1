import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : "[BasicDirective]"
})
export class BasicDerective implements OnInit{
    constructor(private Basic: ElementRef ){
    }
    ngOnInit(){
        this.Basic.nativeElement.style.backgroundColor = "red";
    }

}