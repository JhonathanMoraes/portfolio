import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TituloDescricaoComponent } from './components/titulo-descricao/titulo-descricao.component';
import { CaixaDeTextoComponent } from './components/caixa-de-texto/caixa-de-texto.component';
import { CardProjetoComponent } from './components/card-projeto/card-projeto.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabelaProjetoComponent } from "./components/tabela-projeto/tabela-projeto.component";
import projetos from './files/projetos.json';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, TituloDescricaoComponent, CaixaDeTextoComponent, MatTabsModule, CardProjetoComponent, TabelaProjetoComponent]
})
export class AppComponent {

  titulo = 'Jhonathan Moraes';
  subtitulo = 'Desenvolvedor Full-stack';

  listaProjetos = projetos;

  projetoDestacado(valor: boolean) {
    return this.listaProjetos.some(projeto => projeto.destacado === valor);
  }

  contato = {
    linkedin: {
      nome: 'Usuario linkedin',
      link: '#'
    },
    github: {
      nome: 'Usuário github',
      link: '#'
    },
    telefone: '(00) 00000-0000',
    email: 'user@email.com'
  }
}