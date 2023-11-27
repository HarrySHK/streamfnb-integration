// producer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producer } from './producer.model';

@Injectable({
  providedIn: 'root',
})
export class ProducerService {
  private apiUrl = 'http://localhost:5091/api/producer';

  constructor(private http: HttpClient) {}

  getProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.apiUrl);
  }

  getProducer(id: string): Observable<Producer> {
    return this.http.get<Producer>(`${this.apiUrl}/${id}`);
  }

  createProducer(producer: Producer): Observable<Producer> {
    return this.http.post<Producer>(this.apiUrl, producer);
  }

  updateProducer(id: string, producer: Producer): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producer);
  }

  deleteProducer(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}



