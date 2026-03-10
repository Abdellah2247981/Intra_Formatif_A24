import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minWords(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value /*recupere le commentaire, la valeur du commentaire, le message ecrit, ON VERIFIE QUE CEST PAS VIDE, SI CEST VIDE ON RETURN NULL*/ ) return null;

    const words = control.value.trim().split(/\s+/)/*cela prends le texte et enleve les espace au debut et a la fin du commentaire*/ ;
    return words.length >= min ? null : { minWords: true }; //Ici on verifite le nombre de mot, le nombre de mot min sera passer en parametre là où y'a les validators.

  };
}
