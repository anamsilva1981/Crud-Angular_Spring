import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  private httCliente = inject(HttpClient);

  public list(){
    return this.httCliente.get<Course[]>(this.API).pipe(first(), delay(2000), tap(console.log));
  }
}
