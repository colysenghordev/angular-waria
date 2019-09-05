import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PartenaireListeComponent } from './partenaires/partenaire-liste/partenaire-liste.component';
import { PartenaireService } from './services/partenaire.service';
import { CreatePartenaireComponent } from './partenaires/create-partenaire/create-partenaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartenaireListeComponent,
    CreatePartenaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    PartenaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
