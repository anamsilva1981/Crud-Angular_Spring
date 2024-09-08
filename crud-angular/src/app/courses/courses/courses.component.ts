import { Component, inject } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  private coursesService = inject(CoursesService);

  public courses: Course[] = [];
  public displayedColumns = ['name', 'category'];

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }
}
