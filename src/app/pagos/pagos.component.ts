import { Component, OnInit } from '@angular/core';
import { Pagos } from './pagos';
import { PagosService } from './pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  titulo:string="Lista de Pagos";
  prueba:string="Esta es una prueba de mi practica de Seguridad ";
  pagos: Pagos[] | undefined;
  
  constructor(private pagosService:PagosService) { }

  ngOnInit(): void {
  this.pagosService.getAll().subscribe(
     p =>this.pagos=p
  );

  }

}
