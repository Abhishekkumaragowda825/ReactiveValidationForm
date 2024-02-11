import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'dream.com';
  

}
