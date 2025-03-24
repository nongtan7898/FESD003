import { Component, inject, OnInit } from '@angular/core';
import { Course } from './../../classes/course';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  course: Course | undefined
  courses: Course[] | undefined
  courseService: CourseService = inject(CourseService)
  ngOnInit(): void {
    this.course = new Course();
    this.getPromote()
  }

  private getPromote(): void {
    this.courseService.getPromote().subscribe(res => {
      if (res.OnlineCourse.length > 0) {
        this.courses = res.OnlineCourse
      }
    })
  }

  public onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '/images/logo_ncu.png';
  }
}
