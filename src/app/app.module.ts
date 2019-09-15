import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PartenaireListeComponent } from './partenaires/partenaire-liste/partenaire-liste.component';
import { PartenaireService } from './services/partenaire.service';
import { CreatePartenaireComponent } from './partenaires/create-partenaire/create-partenaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdmingeneralComponent } from './admin/admingeneral/admingeneral.component';
import { PartenaireComponent } from './adminpartenaire/partenaire/partenaire.component';

import { HomeComponent } from './home/home/home.component';
import { MaterialModule} from'./material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartenaireListeComponent,
    CreatePartenaireComponent,
    AdmingeneralComponent,
    PartenaireComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [
    AuthService,
    PartenaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
