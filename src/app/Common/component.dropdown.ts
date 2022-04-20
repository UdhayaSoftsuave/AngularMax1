import { Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector : "[dropDown]"
})
export class DropDown{
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') onclickevevent(){
        this.isOpen = !this.isOpen;
    }
}