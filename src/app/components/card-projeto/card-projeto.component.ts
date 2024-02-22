import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.css'
})
export class CardProjetoComponent {
  @Input() projetos: { titulo: string, subtitulo: string, descricao: string, imgPath: string, repositoryPath: string, destacado: boolean }[];
  projeto: { titulo: string, subtitulo: string, descricao: string, imgPath: string, repositoryPath: string, destacado: boolean };

  constructor(public dialog: MatDialog) { }

  openDialog(projeto: any): void {
    this.projeto = projeto;
    this.dialog.open(Modal, {
      data: { projeto: projeto }
    });
    console.log(projeto);
  }
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
  styleUrl: './modal.css',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
})
export class Modal {

  constructor(public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: CardProjetoComponent) { }
}
