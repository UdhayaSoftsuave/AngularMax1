import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {

  @Input() set appCustomStructuralDirective(condition : boolean) {
    if (condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>, private viewRef : ViewContainerRef) { }

}
