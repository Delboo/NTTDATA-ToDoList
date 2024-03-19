import { Component, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  tarefas = [
    {
      nome: 'Projeto MOVIE',
      descricao: 'Desenvolver um novo projeto baseado em uma aplicação de vídeos, utilizando Angular',
      checklist: [
        {
          nome: 'brainstorming',
          concluido: false,
        },

      ]
    }
  ];

  cartoes: Cartao[] = [];

  ngOnInit(): void {
    
    this.tarefas.forEach((t) => {
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      this.cartoes.push(cartao);
    });
  }



}
