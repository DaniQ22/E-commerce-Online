import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/model.login';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/auth';


  constructor(private http: HttpClient) { }

  login(data: login) {
    return this.http.post(this.apiUrl + '/login', data, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        const body = response.body;
        console.log('Este es el token' );

        const header = response.headers;
        const bearerToken = header.get('Authorization') || ''; // Usar || '' para evitar errores si no hay token
        const token = bearerToken.replace('Bearer ', '');
        localStorage.setItem('token', token);
        return body;
      })
    );
  }

  getToken(){
    return localStorage.getItem('token');
  }
}



