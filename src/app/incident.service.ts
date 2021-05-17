import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from './model/incident.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  url ='http://localhost:8080/learn/api/incidents';

  constructor(private http: HttpClient) { }

   findAll(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.url);
  }

   add(incident: Incident): Observable<Incident>{
    return this.http.post<Incident>(this.url, incident);
  }

  findById(id: number): Observable<Incident> {
    return this.http.get<Incident>(`${this.url}/${id}`);
  }


   delete(id: number): Observable<Incident> {
    return this.http.delete<Incident>
    (`${this.url}/${id}`);
   }
}
