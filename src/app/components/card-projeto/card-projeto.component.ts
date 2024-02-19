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
  @Input() projeto:{titulo:string, subtitulo:string, descricao:string, imgPath:string, repositoryPath:string};

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(Modal, {
      data: {projeto:this.projeto}
    });
    console.log(this.projeto);
  }
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
  styleUrl: './modal.css',
  standalone: true,
  imports: [MatDialogModule],
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: CardProjetoComponent) { }
}
