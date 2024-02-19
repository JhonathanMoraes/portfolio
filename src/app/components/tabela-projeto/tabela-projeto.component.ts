import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

/**
 * @title Table with expandable linhas
 */
@Component({
  selector: 'app-tabela-projeto',
  styleUrls: ['tabela-projeto.component.css'],
  templateUrl: 'tabela-projeto.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expandido', style({ height: '*' })),
      transition('expandido <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class TabelaProjetoComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['titulo'];
  columnsToDisplayExpand = [...this.columnsToDisplay];
  expandidoElement: PeriodicElement | null;
}

export interface PeriodicElement {
  titulo: string;
  repositorio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    titulo: 'projeto 1',
    repositorio: 'https://github.com/JhonathanMoraes/portfolio-angular',
  },
  {
    titulo: 'projeto 2',
    repositorio: 'https://github.com/JhonathanMoraes/portfolio-angular',
  },
];