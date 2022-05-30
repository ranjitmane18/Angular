import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ComponentService {
  
  //this function returns an observable
  getComponents() {
    let subject = new Subject();
    setTimeout(()=> { subject.next(COMPONENTS); subject.complete(); }, 
    2000);
    return subject;
  }

  getComponent(id : number) {
    console.log("get component by id is called : ", id);
    return COMPONENTS.find(component => component.id === id);
  }
}

const COMPONENTS = [
  {
    id : 1,
    name : 'PSMT',
    owner : 'Megha S',
    version : '1.1',
    type : 'Service Tool',
    resource : '3',
    pop : [
      {
        id : 1,
        name : 'ranjit'
      },
      {
        id : 2,
        name : 'megha'
      }
    ]
  },
  {
    id : 2,
    name : 'ProLog',
    owner : 'Sagar K',
    version : '1.1',
    type : 'Service Tool',
    resource : '2',
    pop : [
      {
        id : 1,
        name : 'ranjit'
      },
      {
        id : 2,
        name : 'megha'
      },
      {
        id : 3,
        name : 'sagar'
      }
    ]
  },
  {
    id : 3,
    name : 'TDG',
    owner : 'Sagar K',
    version : '1.0',
    type : 'ProBeam',
    resource : '3',
    pop : [
      {
        id : 1,
        name : 'ranjit'
      },
      {
        id : 2,
        name : 'megha'
      },
      {
        id : 3,
        name : 'sagar'
      }
    ]
  },
  {
    id : 4,
    name : 'ACV',
    owner : 'Vaibhav S',
    version : '1.0',
    type : 'Service Tool',
    resource : '3'
  }
];
