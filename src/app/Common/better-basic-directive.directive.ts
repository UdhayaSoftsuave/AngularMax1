import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBasicDirective]'
})
export class BetterBasicDirectiveDirective implements OnInit {
  constructor(private ERef : ElementRef , private renderer : Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' );
  }
  
  @HostListener("mouseenter")  mouseover(eventData : Event){
    this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' );
  }
  @HostListener("mouseleave")  mouseleave(eventData : Event){
    this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'transparent' );
  }
}
