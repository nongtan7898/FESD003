import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../classes/course';
import { CourseService } from '../../service/course.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-course',
  imports: [FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
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

  statusShow = false;
  statusAlert = true;
  alertText = ''
  public onEventButton(status: string): void {
    if (status == 'IN') {
      this.course!.course_image = 'course' + this.course!.course_id + '.png'
      this.courseService.postCreate(this.course!).subscribe({
        next: (res) => {
          if (res.result) {
            this.getList();
            this.alertText = "Successful Insert!";
            this.statusAlert = true;
          } else {
            this.alertText = "Unsuccessful Insert!";
            this.statusAlert = false;
          }
        },
        error: (error) => {
          console.error("API Error:", error);
          this.alertText = `Insert Failed! ${error.error?.message || "Server Error"}`;
          this.statusAlert = false;
        }
      })
    } else if (status == 'UP') {
      this.courseService.putUpdate(this.course!).subscribe({
        next: (res) => {
          if (res.result) {
            this.getList();
            this.alertText = "Successful Update!";
            this.statusAlert = true;
          } else {
            this.alertText = "Unsuccessful Update!";
            this.statusAlert = false;
          }
        },
        error: (error) => {
          console.error("API Error:", error);
          this.alertText = `Update Failed! ${error.error?.message || "Server Error"}`;
          this.statusAlert = false;
        }
      })
    } else if (status == 'DEL') {
      this.courseService.putUpdate(this.course!).subscribe({
        next: (res) => {
          if (res.result) {
            this.getList();
            this.alertText = "Successful Delete!";
            this.statusAlert = true;
          } else {
            this.alertText = "Unsuccessful Delete!";
            this.statusAlert = false;
          }
        },
        error: (error) => {
          console.error("API Error:", error);
          this.alertText = `Delete Failed! ${error.error?.message || "Server Error"}`;
          this.statusAlert = false;
        }
      })
    }
    this.statusShow = true
    this.course = new Course()
    setTimeout(() => {
      this.statusShow = false
      this.statusAlert = false
      this.alertText = ''
    }, 3000)
  }

  public onEventSelect(course: Course): void {
    this.course = course
  }
}
