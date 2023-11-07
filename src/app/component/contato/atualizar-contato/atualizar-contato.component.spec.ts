import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarContatoComponent } from './atualizar-contato.component';

describe('AtualizarContatoComponent', () => {
  let component: AtualizarContatoComponent;
  let fixture: ComponentFixture<AtualizarContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarContatoComponent]
    });
    fixture = TestBed.createComponent(AtualizarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
