import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../classes/course';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-all-courses',
  imports: [],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent implements OnInit {
  course: Course | undefined
  courses: Course[] | undefined
  courseService: CourseService = inject(CourseService)
  ngOnInit(): void {
    this.course = new Course();
    this.getList()
  }

  private getList(): void {
    this.courseService.getList().subscribe(res => {
      if (res.OnlineCourse.length > 0) {
        this.courses = res.OnlineCourse
      }
    })
  }

  public onImageError(event: Event) {
    (event.target as HTMLImageElement).src = '/images/logo_ncu.png';
  }
}
