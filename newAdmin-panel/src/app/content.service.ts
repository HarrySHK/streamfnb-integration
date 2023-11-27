// content.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'your-api-url'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}`);
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(`${this.apiUrl}`, content);
  }

  updateContent(id: string, content: Content): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, content);
  }

  deleteContent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
