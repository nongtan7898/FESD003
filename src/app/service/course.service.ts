import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './../classes/course';
import { hostCourseIp } from '../classes/project-config';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get(hostCourseIp + 'list/');
  }

  public getSearch(): Observable<any> {
    return this.http.get(hostCourseIp + 'search/id/');
  }

  public getPromote(): Observable<any> {
    return this.http.get(hostCourseIp + 'promote/');
  }

  public postCreate(course: Course): Observable<any> {
    return this.http.post(hostCourseIp + 'create/', course);
  }
  public putUpdate(course: Course): Observable<any> {
    return this.http.put(hostCourseIp + 'update/', course);
  }
  public delete(course: Course): Observable<any> {
    return this.http.delete(hostCourseIp + 'delete/', {body: course});
  }
}
