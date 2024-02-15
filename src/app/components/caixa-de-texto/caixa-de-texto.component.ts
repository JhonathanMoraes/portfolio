import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caixa-de-texto',
  standalone: true,
  imports: [],
  templateUrl: './caixa-de-texto.component.html',
  styleUrl: './caixa-de-texto.component.css'
})
export class CaixaDeTextoComponent {

  @Input() titulo: string;
  @Input() texto: string;
}
