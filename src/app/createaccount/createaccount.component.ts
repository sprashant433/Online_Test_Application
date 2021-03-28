import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  constructor(private _service:QuizcontentsService,private router:Router){}

  onsubmit(form:NgForm)
  {
    this._service.UserPass.push(form.value);
    alert("Account Created Successfully!");
    this.router.navigate(['/']);
  }

}
