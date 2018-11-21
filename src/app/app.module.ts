import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ImagenesComponent} from './imagenes/imagenes.component';
import {HomeComponent} from './home/home.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {FirebaseService} from './services/firebase.service';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/:status', component: UsersComponent},
  {path: 'images/:status', component: ImagenesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    HomeComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
