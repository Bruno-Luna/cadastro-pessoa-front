import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/contato.model';

@Injectable({
    providedIn: 'root'
})

export class contatoService {

    private urlContato = "http://localhost:8080/api/contato"
    public idPessoa: number;

    constructor(
        private http: HttpClient
    ) { }

    setIdPessoa(id: number) {
        this.idPessoa = id;
    }
    
    getIdPessoa() {
        return this.idPessoa;
    }

    public listarContatosPorIdPessoa(id: number): Observable<Contato[]> {
        return this.http.get<Contato[]>(`${this.urlContato}/${id}`)
    }

    public buscarContatoPorId(id: number): Observable<Contato> {
        return this.http.get<Contato>(`${this.urlContato}/buscar/${id}`)
    }

    public cadastrarContatoPessoa(id: number, contato: Contato): Observable<Contato> {
        return this.http.post<Contato>(`${this.urlContato}/${id}`, contato)
    }

    public atualizarContatoPessoa(contato: Contato): Observable<Contato> {
        return this.http.put<Contato>(`${this.urlContato}`, contato)
    }

    public deletarContatoPessoa(id: number): Observable<Contato> {
        return this.http.delete<Contato>(`${this.urlContato}/${id}`)
    }

}