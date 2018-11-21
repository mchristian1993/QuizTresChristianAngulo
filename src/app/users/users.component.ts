import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  status: any = null;
  userss = null;
  user: any = {};
  textButton: string = null;

  constructor(private fireBaseService: FirebaseService, private route: ActivatedRoute) {
    this.userss = fireBaseService.getUsers();
    this.status = this.route.snapshot.params['status'];
    console.log(this.status);
    this.textButton = (this.status === 'create') ? 'Crear user' : 'Actualizar user';
  }

  ngOnInit() {
  }

  validateStatusButton() {
    if (this.status === 'create') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  getUser(id) {
    this.fireBaseService.getUser(id).valueChanges().subscribe(user => {
      this.user = user;
      this.textButton = 'Actualizar user';
      this.status = id;
    });
  }

  cancelUser() {
    this.status = 'create';
    this.textButton = 'Crear user';
    this.user = {};
  }

  createUser() {
    this.user.id = Date.now();
    this.fireBaseService.createuser(this.user);
    this.cancelUser();
  }

  updateUser() {
    this.fireBaseService.updateUser(this.user);
    this.cancelUser();
  }

  deleteUser(id) {
    this.fireBaseService.deleteUser(id);
  }
}
