import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarPessoaComponent } from './cadastar-pessoa.component';

describe('CadastarPessoaComponent', () => {
  let component: CadastarPessoaComponent;
  let fixture: ComponentFixture<CadastarPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastarPessoaComponent]
    });
    fixture = TestBed.createComponent(CadastarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
