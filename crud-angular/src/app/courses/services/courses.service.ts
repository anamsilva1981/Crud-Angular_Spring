import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private httCliente = inject(HttpClient);

  public list(){
    return [
      { _id: '1', name: 'Angular', category: 'Frontend' }
    ]
  }


}
