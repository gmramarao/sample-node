import { CanActivateFn, Router  } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route);
  console.log(state);
  if(localStorage.getItem("token")){
    return true;
  } else {
    //state.navigate(['/login']);
    
    return false;
  }
 
};
