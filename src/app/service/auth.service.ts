import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/User';
import { UsuarioLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{ 
    return this.http.post<UsuarioLogin>('https://localhost:8080/usuarios/logar', UsuarioLogin)

  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://localhost:8080/usuarios/cadastrar', Usuario)

  }
  /*logado() {
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }*/

}
