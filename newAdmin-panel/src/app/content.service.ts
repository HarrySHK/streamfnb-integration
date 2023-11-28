// content.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl = 'http://localhost:5091/api/content'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getContentList(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl);
  }

  getContent(id: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  createContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, content);
  }

  updateContent(id: string, content: Content): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, content);
  }

  deleteContent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
