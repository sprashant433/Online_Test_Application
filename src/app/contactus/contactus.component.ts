import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _service:QuizcontentsService,private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(form:NgForm)
  {
    alert("Form Submitted!");
    this.router.navigate(['/']);
  }

}
