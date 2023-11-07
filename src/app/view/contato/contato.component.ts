import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/shared/model/contato.model';
import { contatoService } from 'src/app/shared/service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  public contatoList: Contato[] = []
  public contato: Contato = new Contato()
  private idPessoa = 0 
  public pagina: number = 1;

  constructor(
    private contatoService: contatoService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idPessoa = this.route.snapshot.params['id']
    this.buscarContatosPorIdPessoa(this.idPessoa)
    this.contatoService.setIdPessoa(this.idPessoa)
  }

  public buscarContatosPorIdPessoa(id: number) {
    this.contatoService.listarContatosPorIdPessoa(id).subscribe((resp: any) => {
      this.contatoList = resp
    })
  }

  public salvarContato() {
    this.contatoService.cadastrarContatoPessoa(this.idPessoa, this.contato).subscribe((resp: Contato) => {
      this.contato = resp
      setTimeout(() => {
        window.location.reload()
      }, 900);
      this.toastr.success("Registro cadastrado.", "Sucesso")
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

  public excluirContato(id: any) {
    this.contatoService.deletarContatoPessoa(id).subscribe(() => {
      this.toastr.warning("Registro apagado.", "Atenção")
      setTimeout(() => {
        this.buscarContatosPorIdPessoa(this.idPessoa)
      }, 1500);
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
