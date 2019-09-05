import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private _partenaireUrl= 'http://localhost:8000/api/lister-partenaire';
  private _registerUrl= 'http://localhost:8000/api/register';

  formData : Partenaire;

  //list : Partenaire[];

  constructor(private http: HttpClient) { }

  getPartenaires():Observable<Partenaire[]>{
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Partenaire[]>(this._partenaireUrl, {headers:headers});
  }

  postPartenaire(formData: Partenaire):Observable<Partenaire>{
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<Partenaire>(this._registerUrl, formData, {headers:headers});
  }

  /*refreshList(){
    this.http.get(this._partenaireUrl)
    .toPromise().then(res => this.list = res as Partenaire[]);
  }*/
}
