import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProjetoComponent } from './tabela-projeto.component';

describe('TabelaProjetoComponent', () => {
  let component: TabelaProjetoComponent;
  let fixture: ComponentFixture<TabelaProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
