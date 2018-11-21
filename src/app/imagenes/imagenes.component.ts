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
  }


  ngOnInit() {
  }

}
