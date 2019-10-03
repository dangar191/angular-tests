import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public plataformaSelec: string;

    
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
