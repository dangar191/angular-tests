import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public plataformaSelec: string;

  endpoints = [
    {
      plataforma: 'Nortel',
      valor: '1',
      codigo: '1',
      campos: [
        {
          campo: 'X_VLAN',
          etiqueta: 'VLAN/ID'
        }
      ]
    },
    {
      plataforma: 'Alcatel',
      valor: '1',
      codigo: '2',
      campos: [
        {
          campo: 'Y_VLAN2',
          etiqueta: 'VLAN/ID2'
        }
      ]
    }
  ];

    
  ngOnInit () {
  }


  submitPrueba() {
  
  }



  plataformaSeleccionada(valorSelect: any) {
    this.valorSelect(valorSelect);
  }

  valorSelect(valorSelect: any) {
    console.log('el valor obtenido del select es: ' + valorSelect);
  }
}
