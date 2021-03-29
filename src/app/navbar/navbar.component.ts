import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	uname:string;
	constructor(private _service:QuizcontentsService, private router:Router){}
	ngOnInit() {
		this.uname = this._service.currentu;
	}

	onlogout(){
		var ask = window.confirm("Are you sure want to SignOut?");
		if(ask){
			this._service.currentu = "";
			this.uname = this._service.currentu;
		}
	}
	
	onsubmit(form:NgForm){
		var flag=0;
		let email=form.value.Umail;
		let password=form.value.Upass;
		for (var i=0;i<this._service.UserPass.length;++i){
			if(email==this._service.UserPass[i].Umail && password==this._service.UserPass[i].Upass){
				flag=1;
				this._service.currentu = this._service.UserPass[i].Ufname + " " + this._service.UserPass[i].Ulname;
				break;
			}
			else if(email==this._service.UserPass[i].Umail){
				flag=11;
				break;

			}
		}
		if(flag==1){
			this.uname = this._service.currentu;
			alert("Sign in Successful!");
			(<HTMLInputElement> document.getElementById('id01')).style.display='none';
			this.router.navigate(['/']);
			
		}
		else if(flag==11){
			alert("Incorrect Password");
		}
		else{
			alert("Account Doesn't Exist");
		}

	}


}
