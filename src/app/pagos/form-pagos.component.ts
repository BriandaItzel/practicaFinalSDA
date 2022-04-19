import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagos } from './pagos';
import { PagosService } from './pagos.service';


@Component({
  selector: 'app-form-pagos',
  templateUrl: './form-pagos.component.html',
  styleUrls: ['./form-pagos.component.css']
})
export class FormPagosComponent implements OnInit {
pagos:Pagos = new Pagos();
titulo:string="Registro de un nuevo pago";

  constructor(private pagosService:PagosService, private router:Router) { }

  ngOnInit(): void {
  }
 create():void{
   console.log(this.pagos);
   this.pagosService.create(this.pagos).subscribe(
     res=>this.router.navigate(['/pagos'])
   );
 }

}
