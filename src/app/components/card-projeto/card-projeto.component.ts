import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.css'
})
export class CardProjetoComponent {

  @Input() titulo: string;
  @Input() descricao: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const modalRef = this.dialog.open(Modal, {
      data: {
        titulo: this.titulo, descricao: this.descricao
      }
    });

    modalRef.afterClosed().subscribe(result => {
      console.log(`Modal: ${result}`);
    });
  }
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
  standalone: true,
  imports: [MatDialogModule],
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: CardProjetoComponent) { }
}
