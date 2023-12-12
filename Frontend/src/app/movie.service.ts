import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private apiUrl = 'http://localhost:5091/api';

  constructor(private http: HttpClient) {}

  getTrending() {
    return this.http.get(`${this.apiUrl}/producer`);
  }

  getTrendingbyId(id: string) {
    return this.http.get(`${this.apiUrl}/producer/${id}`);
  }
  getRecommended() {
    return this.http.get(`${this.apiUrl}/content`);
  }

  getRecommendedbyId(id: string) {
    return this.http.get(`${this.apiUrl}/content/${id}`);
  }
}
