import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  API = 'http://127.0.0.1:8000/';

  public registerStudent(studentData: any) {
    return this.http.post(this.API + 'createStudent', studentData, HTTP_OPTIONS);
  }

  public getStudents() {
    return this.http.get(this.API + 'getStudents');
  }

  public deleteStudent(id: any) {
    return this.http.delete(this.API + 'deleteStudent/id=' + id);
  }

  public updateStudents(student: any) {
    return this.http.put(this.API + 'updateStudent', student);
  }
}
