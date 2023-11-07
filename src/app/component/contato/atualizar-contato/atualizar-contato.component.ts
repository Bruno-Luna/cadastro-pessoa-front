import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/shared/model/contato.model';
import { contatoService } from 'src/app/shared/service/contato.service';

@Component({
  selector: 'app-atualizar-contato',
  templateUrl: './atualizar-contato.component.html',
  styleUrls: ['./atualizar-contato.component.css']
})
export class AtualizarContatoComponent {

  public contato: Contato = new Contato()
  public idContato = 0
  public idPessoa: number

  constructor(
    private router: Router,
    private contatoService: contatoService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idPessoa = this.contatoService.getIdPessoa()
    this.idContato = this.route.snapshot.params['id']
    this.buscarContatoPorId(this.idContato)
  }

  public buscarContatoPorId(id: number) {
    this.contatoService.buscarContatoPorId(id).subscribe((resp: any) => {
      this.contato = resp
    })
  }

  public atualizarContato() {
    this.contatoService.atualizarContatoPessoa(this.contato).subscribe((resp: Contato) => {
      this.contato = resp
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
