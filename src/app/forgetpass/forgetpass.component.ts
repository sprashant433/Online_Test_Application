import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

	constructor(private _service:QuizcontentsService,private router:Router) { }

	ngOnInit(): void {
	}

	onsubmit(form:NgForm)
	{
		var ask = window.confirm("Are you sure want to Change Password ?");
		if(ask){
			var flag=0;
			var temp_email = form.value.Umail;
			for(var i=0;i<this._service.UserPass.length;++i){
				if(temp_email==this._service.UserPass[i].Umail){
					flag=1;
					break;
				}

			}

			if(flag){
				this._service.UserPass[i].Upass = form.value.Upass;
				alert("Password Successfully Updated!");
				this.router.navigate(['/']);
			
			}
			else{
				alert("Email Doesn't Exist.");
			}
		}
	}
}
