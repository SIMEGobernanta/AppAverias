import { Component, OnDestroy, OnInit } from '@angular/core';
import { Space, Spaces } from './interface/space';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AppAverias';

  Faults:Spaces = {
    spaces: [
      {
        idSpace: '1',
        idItemSubType: 'ROOM',
        name: '101',
        faults: [
          {
            idFault: '1',
            name: 'Falta 1'
          },
          {
            idFault: '3',
            name: 'Falta 3'
          }
        ]
      },{
        idSpace: '2',
        idItemSubType: 'SPACE',
        name: 'Discoteca',
        faults: [
          {
            idFault: '1',
            name: 'Falta 1'
          },
          {
            idFault: '2',
            name: 'Falta 2'
          },
          {
            idFault: '3',
            name: 'Falta 3'
          }
        ]
      },{
        idSpace: '3',
        idItemSubType: 'SPACE',
        name: 'Cocina',
        faults: [
          {
            idFault: '2',
            name: 'Falta 2'
          }
        ]
      },{
        idSpace: '4',
        idItemSubType: 'SPACE',
        name: 'Baño planta 1',
        faults: [
          {
            idFault: '1',
            name: 'Falta 1'
          }
        ]
      },{
        idSpace: '5',
        idItemSubType: 'SPACE',
        name: 'Comedor',
        faults: [
          {
            idFault: '3',
            name: 'Falta 3'
          },
          {
            idFault: '4',
            name: 'Falta 4'
          }
        ]
      },{
        idSpace: '6',
        idItemSubType: 'SPACE',
        name: 'Piscina',
        faults: [
          {
            idFault: '2',
            name: 'Falta 2'
          },
          {
            idFault: '4',
            name: 'Falta 4'
          },
          {
            idFault: '5',
            name:'Falta 5'
          },
          {
            idFault: '6',
            name: 'Falta 6'
          }
        ]
      },{
        idSpace: '7',
        idItemSubType: 'SPACE',
        name: 'Spa',
        faults: [
          {
            idFault: '5',
            name:'Falta 5'
          },
          {
            idFault: '6',
            name: 'Falta 6'
          }
        ]
      },{
        idSpace: '8',
        idItemSubType: 'SPACE',
        name: 'Gimnasio',
        faults: [
          {
            idFault: '7',
            name:'Falta 7'
          },
        ]
      },{
        idSpace: '9',
        idItemSubType: 'ROOM',
        name: '202',
        faults: [
          {
            idFault: '1',
            name:'Falta 1'
          },
          {
            idFault: '3',
            name:'Falta 3'
          },
          {
            idFault: '11',
            name:'Falta 11'
          },
        ]
      },{
        idSpace: '10',
        idItemSubType: 'ROOM',
        name: '103',
        faults: [
          {
            idFault: '1',
            name:'Falta 1'
          },
          {
            idFault: '11',
            name:'Falta 11'
          },
        ]
      },{
        idSpace: '11',
        idItemSubType: 'SPACE',
        name: 'Mirador',
        faults: [
          {
            idFault: '20',
            name:'Falta 20'
          },
        ]
      },{
        idSpace: '12',
        idItemSubType: 'ROOM',
        name: '119',
        faults: [
          {
            idFault: '1',
            name:'Falta 1'
          },
          {
            idFault: '2',
            name: 'Falta 2',
          }
        ]
      },
    ]
  }

  FaultsAux:Spaces = { spaces: [] };

  constructor(private cardService:CardsService) {}

  ngOnInit(): void {
    this.FaultsAux.spaces = [...this.Faults.spaces];
    this.cardService.cards.subscribe((resp:Spaces) => {
      this.FaultsAux = resp;
    });

    this.FaultsAux.spaces = this.FaultsAux.spaces.sort((a,b) => {
      if (a.name > b.name) {return 1; }
      return -1;
    });
  }

  ngOnDestroy(): void {

  }
}




