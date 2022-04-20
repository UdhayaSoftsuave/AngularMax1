import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterBasicDirective]'
})
export class BetterBasicDirectiveDirective implements OnInit {
  constructor(private ERef : ElementRef , private renderer : Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.ERef.nativeElement , 'backgroundColor' , 'green' )
  }
}
