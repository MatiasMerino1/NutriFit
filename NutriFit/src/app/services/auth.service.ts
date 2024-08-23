import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedValue = false; // Aquí podrías implementar lógica para determinar autenticación

  constructor() {}

  // Este método retorna un observable de booleano
  isAuthenticated(): Observable<boolean> {
    // Retornar el estado de autenticación como un observable
    return of(this.isAuthenticatedValue);
  }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.isAuthenticatedValue = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticatedValue = false;
  }
}
