import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  status: any = null;
  images = null;
  image: any = {};
  textButton: string = null;

  constructor(private fireBaseService: FirebaseService, private route: ActivatedRoute) {
    this.images = fireBaseService.getImages();
    this.status = this.route.snapshot.params['status'];
    this.textButton = (this.status === 'create') ? 'Crear imagen' : 'Actualizar imagen';
  }


  ngOnInit() {
  }

  validateStatusButton() {
    if (this.status === 'create') {
      this.createImage();
    } else {
      this.updateImage();
    }
  }

  getImage(id) {
    this.fireBaseService.getImage(id).valueChanges().subscribe(image => {
      this.image = image;
      this.textButton = 'Actualizar imagen';
      this.status = id;
    });
  }

  cancelImage() {
    this.status = 'create';
    this.textButton = 'Crear imagen';
    this.image = {};
  }

  createImage() {
    this.image.id = Date.now();
    this.fireBaseService.createImage(this.image);
    this.cancelImage();
  }

  updateImage() {
    this.fireBaseService.updateImage(this.image);
    this.cancelImage();
  }

  deleteImage(id) {
    this.fireBaseService.deleteImage(id);
  }
}
