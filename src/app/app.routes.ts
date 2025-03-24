import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'หน้าแรก' } },
  { path: 'course', component: CourseComponent, data: { title: 'course' } },
  { path: 'allCourse', component: AllCoursesComponent, data: { title: 'allCourse' } },
];
