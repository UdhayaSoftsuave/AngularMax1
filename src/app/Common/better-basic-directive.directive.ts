import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBasicDirective]'
})
export class BetterBasicDirectiveDirective implements OnInit {

  @HostBinding("style.backgroundColor") background : string = "transparent";

  constructor(private ERef : ElementRef , private renderer : Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' );
  }
  
  @HostListener("mouseenter")  mouseover(eventData : Event){
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' );
    this.background = "blue";
  }
  @HostListener("mouseleave")  mouseleave(eventData : Event){
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'transparent' );
    this.background = "transparent";
  }
}
