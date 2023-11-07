import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa.model';

@Injectable({
    providedIn: 'root'
})

export class pessoaService {

    private urlPessoa = "http://localhost:8080/api/pessoa"

    constructor(
        private http: HttpClient
    ) { }


    public listarPessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(this.urlPessoa)
    }

    public buscarPessoaPorId(id: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.urlPessoa}/${id}`)
    }

    public cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(this.urlPessoa, pessoa)
    }

    public atualizarPessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.put<Pessoa>(`${this.urlPessoa}`, pessoa)
    }

    public deletarPessoa(id: number): Observable<Pessoa> {
        return this.http.delete<Pessoa>(`${this.urlPessoa}/${id}`)
    }

}