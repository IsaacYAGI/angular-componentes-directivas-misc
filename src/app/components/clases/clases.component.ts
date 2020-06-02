import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta = "alert-danger";

  propiedades = {
    danger:false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
