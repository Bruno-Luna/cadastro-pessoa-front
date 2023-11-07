import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './view/pessoa/pessoa.component';
import { CadastarPessoaComponent } from './component/pessoa/cadastar-pessoa/cadastar-pessoa.component';
import { AtualizarPessoaComponent } from './component/pessoa/atualizar-pessoa/atualizar-pessoa.component';
import { ContatoComponent } from './view/contato/contato.component';
import { AtualizarContatoComponent } from './component/contato/atualizar-contato/atualizar-contato.component';

const routes: Routes = [
    { path: "", component: PessoaComponent },
    { path: 'cadastrar', component: CadastarPessoaComponent },
    { path: 'atualizar/:id', component: AtualizarPessoaComponent },

    { path: "contato/:id", component: ContatoComponent },
    { path: 'contato/atualizar/:id', component: AtualizarContatoComponent },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }