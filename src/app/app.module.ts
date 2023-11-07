import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { PessoaComponent } from './view/pessoa/pessoa.component';
import { ContatoComponent } from './view/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastarPessoaComponent } from './component/pessoa/cadastar-pessoa/cadastar-pessoa.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AtualizarPessoaComponent } from './component/pessoa/atualizar-pessoa/atualizar-pessoa.component';
import { AtualizarContatoComponent } from './component/contato/atualizar-contato/atualizar-contato.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    PessoaComponent,
    ContatoComponent,
    CadastarPessoaComponent,
    AtualizarPessoaComponent,
    AtualizarContatoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
