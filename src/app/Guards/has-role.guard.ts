import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



export const hasRoleGuard: CanActivateFn = (route, state) => {

  const allowedRoles = route.data?.["allowedRoles"]
  const router: Router = new Router();
  const token = localStorage.getItem("chainToken") || "";
  const helper = new JwtHelperService();

  if(Boolean(allowedRoles.includes(helper.decodeToken(token).sub.agent_id))){
    return true;
  }else{
    return  router.parseUrl('/')
  }
  
};
