import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-descricao',
  template: `
    titulo: {{titulo}}
    subtitulo: {{subtitulo}}
  `,
  standalone: true,
  imports: [],
  templateUrl: './titulo-descricao.component.html',
  styleUrl: './titulo-descricao.component.css'
})
export class TituloDescricaoComponent {

  @Input() titulo: string = "Título";
  @Input() subtitulo: string = "Subtítulo";


}
