import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public plataformaSelec: string;
  plataforma: string;
  valor: string;
  codigo: string;

  public endpoints = [
    {
      plataforma: 'Nortel',
      valor: '1',
      codigo: '1',
      /*campos: [
        {
          campo: 'X_PUERTOB',
          etiqueta: 'Puerto B'
        }
      ]
    },
    {
      plataforma: 'Alcatel',
      valor: '1',
      codigo: '2',
      campos: [
        {
          campo: 'X_END_POINTB',
          etiqueta: 'End Point B'
        }
      ]*/
    }
  ];
  ngOnInit () {
  }

  submitPrueba() {
    const data = this.endpoints = [
      {
        plataforma: this.plataformaSelec,
        valor: this.valor,
        codigo: this.codigo
      }
    ];
    console.log(data);
  }

  plataformaSeleccionada(valorSelect: any) {
    this.valorSelect(valorSelect);
  }

  valorSelect(valorSelect: any) {
    console.log('el valor obtenido del select es: ' + valorSelect);
  }
}
