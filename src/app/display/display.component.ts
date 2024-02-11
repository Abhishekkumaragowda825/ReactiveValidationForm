import { Component, Input } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() studentDetails:any;
  studentToUpdate = {
    id:"",
    name:"",
    lname:"",
    email:"",
    message: "",
    gender:"",
    country: ""
  }
  constructor(private registrationService: RegistrationService) {
    this.getStudentsDetails();
  }

  getStudentsDetails() {
    this.registrationService.getStudents().subscribe(
      (resp) => {
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteStudent(student: any) {
    this.registrationService.deleteStudent(student.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(studuent: any){
    this.studentToUpdate = studuent;
  }

  updateStudent(){
    this.registrationService.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
