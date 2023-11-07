import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { pessoaService } from 'src/app/shared/service/pessoa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastar-pessoa',
  templateUrl: './cadastar-pessoa.component.html',
  styleUrls: ['./cadastar-pessoa.component.css']
})
export class CadastarPessoaComponent {

  public pessoa: Pessoa = new Pessoa()

  constructor(
    private router: Router,
    private pessoaService: pessoaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  public salvarPessoa() {
    this.pessoaService.cadastrarPessoa(this.pessoa).subscribe((resp: Pessoa) => {
      this.pessoa = resp
      this.toastr.success("Registro cadastrado.", "Sucesso")
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 900);
    }, erro => {
      if (erro.error.errors) {
        for (const i of erro.error.errors) {
          this.toastr.error(i.defaultMessage, "Atenção")
        }
      } else {
        this.toastr.error(erro.error.message, "Atenção")
      }
    })
  }

  public apenasNumero(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}

