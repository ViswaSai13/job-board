import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobPostingsService {
  BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
  allPostingsEndpoint = 'jobstories.json';
  constructor(private http: HttpClient) {}

  getPostings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}${this.allPostingsEndpoint}`, {
      headers: new HttpHeaders({ 'Content-Type': 'json' }),
    });
  }

  getDetails(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}item/${id}.json`);
  }
}
