import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // registrationForm : FormGroup;

  textMessage:string = '';
  selectedUser:any= null;
  textLength:number = 250;
  canCreate = true;
  registered = false;
  studentDetails = null as any;
  studentToUpdate = {
    id:"",
    name:"",
    lname:"",
    email:"",
    message: "",
    gender:"",
    country: ""
  }
  registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('[A-Z]{1}[a-z]+')]),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z]+[.]?[a-z]+[0-9]+[@][gmail]{5}[.][com]{3}')]),
      message: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
  });

  constructor(private registrationService: RegistrationService) {
    this.getStudentsDetails();
  }
  ngOnInit() {
    this.displayMessageLength();
  }
  register(registerForm:FormGroup) {
    if (registerForm.value !== undefined && registerForm.valid){
      this.registrationService.registerStudent(registerForm.value).subscribe(
        (resp) => {
          registerForm.reset();
          this.getStudentsDetails();
          this.registered = true;

        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  displayMessageLength(){
    this.textLength = 250 - this.textMessage.length;
  }
  onCancel() {
    this.selectedUser = null;
    this.registrationForm.reset();
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

}
