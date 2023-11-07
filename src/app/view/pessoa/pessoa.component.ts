import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { pessoaService } from 'src/app/shared/service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {

  public pessoa: Pessoa[] = []
  public pagina: number = 1;

  constructor(
    private pessoaService: pessoaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.listarPessoasCadastradas();
  }

  private listarPessoasCadastradas() {
    this.pessoaService.listarPessoas().subscribe(listaPessoa => {
      this.pessoa = listaPessoa
    });
  }

  public excluirPessoa(id: any) {
    this.pessoaService.deletarPessoa(id).subscribe(() => {
      this.toastr.warning("Registro apagado.", "Atenção")
      setTimeout(() => {
        this.listarPessoasCadastradas()
      }, 1500);
    }, erro => {
      if (erro.error) {
        this.toastr.error(erro.error.message, "Atenção")
      }
    });
  }
}
