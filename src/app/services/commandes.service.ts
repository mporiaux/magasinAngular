import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Comfact} from '../entities/comfact.entities';
import {Client} from '../entities/client.entities';
import {formatDate} from '@angular/common';
@Injectable({providedIn:"root"})
export class ComfactService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  deleteComfact(c: Comfact): Observable<void>{
    return this.http.delete<void>(this.host + '/comfacts/' +
      c.idcommande);
  }
  save(c: Comfact): Observable<Comfact>{
       return this.http.post<Comfact>(this.host + '/comfacts/',c);
  }
  getComfact(idcommande: number): Observable<Comfact>{
    return this.http.get<Comfact>(this.host + '/comfacts/' + idcommande);
  }
  updateComfact(c: Comfact): Observable<Comfact>{

      return this.http.put<Comfact>(this.host + '/comfacts/' +
      c.idcommande, c);
  }
  getComfactsClient(idClient: number) : Observable<Comfact[]>{
    return this.http.get<Comfact[]>(this.host + '/comfacts/idclient=' +
      idClient);
  }
}
