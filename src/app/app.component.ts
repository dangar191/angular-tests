import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    plataforma: any;
  valor: string;
  codigo: string;
  campo: string;
  etiqueta: string;


  endpoints = [
    {
      plataforma: "Nortel",
      valor: "1",
      codigo: "1",
      campos: [
        {
          campo: "X_VLAN",
          etiqueta: "VLAN/ID"
        },
        {
          campo: "X_VLANA",
          etiqueta: "VLAN/IDA"
        }
      ]
    },
    {
      plataforma: "Alcatel",
      valor: "1",
      codigo: "2",
      campos: [
        {
          campo: "Y_VLAN2",
          etiqueta: "VLAN/ID2"
        },
        {
          campo: "Y_VLANB",
          etiqueta: "VLAN/IDB"
        }
      ]
    }
  ];

  ngOnInit() {

  }

  submitPrueba() {
    const item = this.endpoints[this.plataforma - 1];
  
    const data = [{
      plataforma: this.plataforma,
      campos : item.campos
    }];
    console.log(data);

  }

  valorInput(valorInput: any){
    console.log('El valor del input es: ' + valorInput);
  }

  valorSelect(valorSelect: any) {
    console.log("el valor obtenido del select es: " + valorSelect);
  }
}
