import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  /**
   * Crea un usuario y lo envia a Firebase. Este método,
   * devuelve una promesa de UserCredential.
   * @param email 
   * @param password 
   */
  createUserWithEmailAndPassword(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Inicio de sesión en Firebase.
   * @param email 
   * @param password 
   */
  signIn(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  /**
   * End the access from the current account. Any other
   * person without identifying the credentials cannot
   * sign in to our account if we have already signed out
   */
  signOut() {
    return this.afa.signOut();
  }

  /**
   * Verifica si hay un usuario disponible
   */
  hasUser() {
    return this.afa.authState;
  }
}
