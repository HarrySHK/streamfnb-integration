// celebs.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celebs } from './celebs.model';

@Injectable({
  providedIn: 'root',
})
export class CelebsService {
  private apiUrl = 'http://localhost:5091/api/celebs';

  constructor(private http: HttpClient) {}

  getCelebss(): Observable<Celebs[]> {
    return this.http.get<Celebs[]>(this.apiUrl);
  }

  getCelebs(id: string): Observable<Celebs> {
    return this.http.get<Celebs>(`${this.apiUrl}/${id}`);
  }

  createCelebs(celebs: Celebs): Observable<Celebs> {
    return this.http.post<Celebs>(this.apiUrl, celebs);
  }

  updateCelebs(id: string, celebs: Celebs): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, celebs);
  }

  deleteCelebs(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
