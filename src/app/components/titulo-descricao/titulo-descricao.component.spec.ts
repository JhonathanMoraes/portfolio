import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloDescricaoComponent } from './titulo-descricao.component';

describe('TituloDescricaoComponent', () => {
  let component: TituloDescricaoComponent;
  let fixture: ComponentFixture<TituloDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloDescricaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
