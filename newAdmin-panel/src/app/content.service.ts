// content.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl = 'http://localhost:5091'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  createContent(content: Content): Observable<Content> {
    return this.http.post<Content>(`${this.apiUrl}/api/content`, content);
  }

  getAllContent(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/api/content`);
  }

  getContentById(id: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/api/content/${id}`);
  }

  updateContent(id: string, content: Content): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/api/content/${id}`, content);
  }

  deleteContent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/content/${id}`);
  }
}
