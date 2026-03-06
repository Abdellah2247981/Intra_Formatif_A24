import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const minouGuard: CanActivateFn = (route, state) => {
  // On inject le service pour regarder si l'utilisateur est connecté
      const userService = inject(UserService);

      if(userService.currentUser?.prefercat){
        return true;
      }
      return createUrlTreeFromSnapshot(route, ['/dog']);
};
