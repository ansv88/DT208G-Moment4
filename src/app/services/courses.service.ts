import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  //Properties
  url: string = 'https://webbutveckling.miun.se/files/ramschema_ht23.json';

  constructor(private http: HttpClient) {}

  //Methods
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
