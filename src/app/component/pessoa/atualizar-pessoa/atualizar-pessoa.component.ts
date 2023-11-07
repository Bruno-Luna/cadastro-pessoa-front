import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { pessoaService } from 'src/app/shared/service/pessoa.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css']
})
export class AtualizarPessoaComponent {

  public pessoa: Pessoa = new Pessoa()

  constructor(
    private router: Router,
    private pessoaService: pessoaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let idPessoa = this.route.snapshot.params['id']
    this.buscarPessoaId(idPessoa)
  }

  public buscarPessoaId(id: number) {
    this.pessoaService.buscarPessoaPorId(id).subscribe((resp: any) => {
      this.pessoa = resp
    })
  }

  public atualizarPessoa() {
    this.pessoaService.atualizarPessoa(this.pessoa).subscribe((resp: Pessoa) => {
      this.pessoa = resp
      this.toastr.success("Registro atualizado.", "Sucesso")
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
}
