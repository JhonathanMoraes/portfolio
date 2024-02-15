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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, TituloDescricaoComponent, CaixaDeTextoComponent, CardProjetoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfólio';

}
