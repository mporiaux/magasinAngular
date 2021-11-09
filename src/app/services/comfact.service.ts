import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Comfact} from '../entities/comfact.entities';
import {Client} from '../entities/client.entities';

@Injectable({providedIn:"root"})
export class ComfactService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }

  deleteComfact(c: Comfact): Observable<void>{
      return this.http.delete<void>(this.host + '/comfacts/' + c.numcommande);
  }
  save(c: Comfact,cl:Client): Observable<Comfact>{
    c.client=cl;
    return this.http.post<Comfact>(this.host + '/comfacts/',c);
  }

  getComfact(numcommande: number): Observable<Comfact>{
     return this.http.get<Comfact>(this.host + '/comfacts/' + numcommande);
  }

  updateComfact(c: Comfact): Observable<Comfact>{
     return this.http.put<Comfact>(this.host + '/comfacts/' + c.numcommande, c);
  }

  getComfactsClient(idClient: number) : Observable<Comfact[]>{
     return this.http.get<Comfact[]>(this.host + '/comfacts/idclient=' + idClient);
  }
}
