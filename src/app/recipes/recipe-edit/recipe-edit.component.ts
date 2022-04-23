import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id! : number;
  isEdit = false;
  constructor(private routes : ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(
      (param : Params) => {
        this.id = +param['id'];
        this.isEdit = param['id'] == null ? false : true;
        console.log(this.isEdit);
      }
    )

  }

}
