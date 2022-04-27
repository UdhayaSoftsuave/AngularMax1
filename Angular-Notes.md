property binding 
================

1) [foo]="true" -> typeof foo => 'boolean'  Note :-   [a] = "_";
2) foo = "false" -> typeof foo => 'string'  Note :=   a = _ ;


get getIngredientsControl(){
    const data = (<FormArray>this.product.get('ingredients')).controls; => correct
    return data;
}

get getIngredientsControl(){
    const data = (this.product.controls["ingredients"] as FormArray).value; => wrong (html control eill affect)
    return data;
  }