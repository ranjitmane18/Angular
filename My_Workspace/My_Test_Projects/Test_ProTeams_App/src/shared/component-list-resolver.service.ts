import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { map } from "rxjs";
import { ComponentService } from "./component.service";

@Injectable()
export class ComponentListResolver implements Resolve<any> {
    
    //declare a private variable for componentService
    constructor(private componentService : ComponentService) {
    }
    
    //resolve method returns obervable so that angular watches for the observable and waits for it to complete it
    resolve() {
        return this.componentService.getComponents().pipe(map( components => components))       
    }
}