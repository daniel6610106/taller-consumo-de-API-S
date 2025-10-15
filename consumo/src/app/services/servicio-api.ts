import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { post } from '../types/tiposApi';

@Injectable({
  providedIn: 'root',
})
export class ServicioAPI {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<post[]> {
    let apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<post[]>(apiUrl).pipe(
      map((posts) => {
        return posts.map((post) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body,
        }));
      })
    );
  }
}
