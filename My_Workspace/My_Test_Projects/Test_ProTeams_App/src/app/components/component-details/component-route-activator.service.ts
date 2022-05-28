import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ComponentService } from "src/shared/component.service";


@Injectable()
export class ComponentRouteActivator implements CanActivate {
  constructor(private componentService : ComponentService,  private router : Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const eventExists = !!this.componentService.getComponent(route.params['id']);
    if(!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
