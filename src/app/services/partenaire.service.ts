import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private _partenaireUrl= 'http://localhost:8000/api/lister-partenaire';

  //private headers={headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};

  constructor(private http:HttpClient) { }

  getPartenaires():Observable<Partenaire[]>{
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Partenaire[]>(this._partenaireUrl,{headers:headers});
  }
}
