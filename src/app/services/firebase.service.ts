import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {
  }


  // Metodo para listar todas las imagenes
  public getImages() {
    return this.db.list('images').valueChanges();
  }

  // Metodo para obtener una sola imagen
  public getImage(id) {
    return this.db.object('images/' + id);
  }

  // Metodo crear una imagen
  public createImage(image) {
    this.db.database.ref('images/' + image.id).set(image);
  }

  // Metodo para actualizar los datos de una imagen
  public updateImage(image) {
    this.db.database.ref('images/' + image.id).set(image);
  }

  // Metodo para eliminar una imagen
  public deleteImage(id) {
    this.db.object('images/' + id).remove();
  }
}
