import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBasicDirective]'
})
export class BetterBasicDirectiveDirective implements OnInit {
  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'red';
  @HostBinding("style.backgroundColor") background : string = this.defaultColor;

  constructor(private ERef : ElementRef , private renderer : Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' );
    this.background = this.defaultColor;
  }
  
  @HostListener("mouseenter")  mouseover(eventData : Event){
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' );
    // this.background = "blue";
    this.background = this.highlightColor;
  }
  @HostListener("mouseleave")  mouseleave(eventData : Event){
    // this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'transparent' );
    this.background = this.defaultColor;
  }
}
