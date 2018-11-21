import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {
  }


  // Metodo para listar todas las imagenes
  public getUsers() {
    return this.db.list('user').valueChanges();
  }

  // Metodo para obtener una sola imagen
  public getUser(id) {
    return this.db.object('user/' + id);
  }

  // Metodo crear una imagen
  public createuser(user) {
    this.db.database.ref('user/' + user.id).set(user);
  }

  // Metodo para actualizar los datos de una imagen
  public updateUser(user) {
    this.db.database.ref('user/' + user.id).set(user);
  }

  // Metodo para eliminar una imagen
  public deleteUser(id) {
    this.db.object('user/' + id).remove();
  }
}
