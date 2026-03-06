import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';
export const loginGuard: CanActivateFn = (route, state) => {
 
  // On inject le service pour regarder si l'utilisateur est connecté
  if (!inject(UserService).isLogged()){
      return createUrlTreeFromSnapshot(route, ["/login"]);
  }
  // S'il est connecté, tout est beau on continue!
  else return true;
};
