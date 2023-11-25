import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:5091/api/content';

  constructor(private http: HttpClient) {}

  getAllContent(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addContent(content: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, content);
  }

  updateContent(id: string, content: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, content);
  }

  deleteContent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
