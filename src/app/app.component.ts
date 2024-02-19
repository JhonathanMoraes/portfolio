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
import projetos from './files/projetos.json';
import { TabelaProjetoComponent } from "./components/tabela-projeto/tabela-projeto.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, TituloDescricaoComponent, CaixaDeTextoComponent, MatTabsModule, CardProjetoComponent, TabelaProjetoComponent]
})
export class AppComponent {
  title = 'Portfólio';
  listaProjetos = projetos;
}
