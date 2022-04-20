import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : "app-header",
    templateUrl : "./component.header.html"
})
export class HeaderComponent {
    @Output("selected-Column") selestedvalue = new EventEmitter<string>()

    onSelect(event : string){
        this.selestedvalue.emit(event)
    }
}