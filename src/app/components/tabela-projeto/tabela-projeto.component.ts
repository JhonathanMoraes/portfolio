import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

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
  imports: [MatTableModule, MatButtonModule, MatIconModule, CommonModule],
})
export class TabelaProjetoComponent {
  @Input() projetos: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>();
  columnsToDisplay = ['titulo'];
  columnsToDisplayExpand = [...this.columnsToDisplay];
  expandidoElement: PeriodicElement | null;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.projetos);
    this.dataSource.data = this.dataSource.data.filter(row => row.destacado === false);
  }
}

export interface PeriodicElement {
  titulo: string;
  repositoryPath: string;
  destacado: boolean;
}
