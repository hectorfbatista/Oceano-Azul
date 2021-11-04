import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.scss']
})
export class DoacaoComponent implements OnInit {

  tipoDoacao = 'mensal';
  quantia = '50';
  valor = 0;

  constructor() { }

  limpar() {
    this.tipoDoacao = '';
    this.quantia = '';
    this.valor = 0;
  }


  ngOnInit(): void {
  }

}
