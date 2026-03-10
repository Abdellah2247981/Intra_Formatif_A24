import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noNameInComment(control: AbstractControl): ValidationErrors | null {

  if(!control.value) return null;

  const name = control.root.get('nom')?.value;

  if(name && control.value.includes(name)){
    return { nameInComment: true };
  }

  return null;
}