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
  createUsername(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }
}
