import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';
import { Quizformat } from './quizformat';
import { timer } from 'rxjs';
@Component({
  selector: 'app-quizdisplay',
  templateUrl: './quizdisplay.component.html',
  styleUrls: ['./quizdisplay.component.css']
})
export class QuizdisplayComponent implements OnInit{
	userans  = new Array();
	filecontent:Quizformat[];
	path:string;
	i:number = 0;
	uname:string;
	timeLeft: number = 60;
	min:number = 14;
	interval;
  	subscribeTimer: any;

	constructor(private _content:QuizcontentsService, private router:Router ) { }
	ngOnInit(){
		this.uname = this._content.currentu;
		this.path = this._content.path;
		if(this.path=="GK"){
			this.filecontent = this._content.gk_content;
			for(var i=0;i<10;++i){
				this._content.cans.push(this.filecontent[i].ans);
			}
		}
		else if(this.path=="Technology"){
			this.filecontent = this._content.tech_content;
			for(var i=0;i<10;++i){
				this._content.cans.push(this.filecontent[i].ans);
			}
		}else{
			this.filecontent = this._content.appti_content;
			for(var i=0;i<10;++i){
				this._content.cans.push(this.filecontent[i].ans);
			}

		}
		this.content();
		this.startTimer();
	}
	next(){
		this.uncheck();
		if (this.i == 9) {
			(<HTMLInputElement> document.getElementById('savenext')).disabled = true; 
			(<HTMLInputElement> document.getElementById('next')).disabled = true;
			(<HTMLInputElement> document.getElementById('prev')).disabled = false; 
		} else { 
			(<HTMLInputElement> document.getElementById('prev')).disabled = false; 
			++this.i; 
			this.content();
		} 
	
	} 
	prev(){  
		this.uncheck(); 
		if (this.i == 0){ 
			(<HTMLInputElement> document.getElementById('prev')).disabled = true;
			(<HTMLInputElement> document.getElementById('next')).disabled = false;
			
		}else{
			(<HTMLInputElement> document.getElementById('next')).disabled = false;
			(<HTMLInputElement> document.getElementById('savenext')).disabled = false;
			--this.i; 
			this.content();
		} 
	}
	content(){
		document.getElementById("qno").innerHTML = "&nbsp; Screen:" + this.filecontent[this.i].qid;
		document.getElementById("quest").innerHTML = "Q." + this.filecontent[this.i].qid+ " " +this.filecontent[this.i].qtext;
		document.getElementById("option1").innerHTML = this.filecontent[this.i].op1;
		document.getElementById("option2").innerHTML = this.filecontent[this.i].op2;
		document.getElementById("option3").innerHTML = this.filecontent[this.i].op3;
		document.getElementById("option4").innerHTML = this.filecontent[this.i].op4; 
	}
	btncontent(num:number){
		this.i = num;
		this.content(); 
	
	}
	oberserableTimer(){
		const source = timer(1000, 2000);
		const abc = source.subscribe(val => {
		  console.log(val, '-');
		  this.subscribeTimer = this.timeLeft - val;
		});
	}
	startTimer(){
		this.interval = setInterval(() => {
			if(this.timeLeft > 0) {
			this.timeLeft--;
			} else {
			this.timeLeft = 60;
			this.min--;
			}
			if(this.min<2){
			(<HTMLInputElement>document.getElementById("time")).style.backgroundColor = "#EC7063";
			}

			if(this.min==0 && this.timeLeft==0){
				var option = new Array();
				var list = new Array();
				option = [this.filecontent[this.i].op1,
				this.filecontent[this.i].op2,
				this.filecontent[this.i].op3,
				this.filecontent[this.i].op4]
				
				for(var i=1;i<=4;++i){
					var inputValue = (<HTMLInputElement>document.getElementById("op" + i.toString())).checked;
					list.push(inputValue);
				}

				for(var i=0;i<4;++i){
					if(list[i]==true){
					this._content.User_option_update(eval(this.filecontent[this.i].qid)-1,option[i]) 
					}
				}
				alert("Time up ! You will be Redirected to Result & Review Page..")
				this.router.navigate(['/review']);

			}
		},1000)
	}
	savenext(){
		var option = new Array();
		option = [this.filecontent[this.i].op1,
		this.filecontent[this.i].op2,
		this.filecontent[this.i].op3,
		this.filecontent[this.i].op4]
		var list = new Array();
		for(var i=1;i<=4;++i){
		  var inputValue = (<HTMLInputElement>document.getElementById("op" + i.toString())).checked;
		  list.push(inputValue);
		}

		for(var i=0;i<4;++i){
			if(list[i]==true){
			this._content.User_option_update(eval(this.filecontent[this.i].qid)-1,option[i]) 
			}
		}
		
		if(this.i == 9){ 
			(<HTMLInputElement>document.getElementById("navbtn10")).style.backgroundColor = "#5bc0de";
			(<HTMLInputElement> document.getElementById('savenext')).disabled = true;
			(<HTMLInputElement> document.getElementById('next')).disabled = true;
			(<HTMLInputElement> document.getElementById('prev')).disabled = false; 
		}else{ 
			(<HTMLInputElement> document.getElementById('prev')).disabled = false; 
			++this.i; 
			this.content();	
		} 
		this.uncheck();
		(<HTMLInputElement>document.getElementById("navbtn" + this.i.toString())).style.backgroundColor = "#5bc0de";
	}
	uncheck(){
		for(var i=1;i<=4;++i){
		  var rbutton = (<HTMLInputElement>document.getElementById("op" + i.toString()));
		  rbutton.checked = false;
		}
	}
	submitquiz(){
		var option = new Array();
		var list = new Array();
		option = [this.filecontent[this.i].op1,
		this.filecontent[this.i].op2,
		this.filecontent[this.i].op3,
		this.filecontent[this.i].op4]
		for(var i=1;i<=4;++i){
			var inputValue = (<HTMLInputElement>document.getElementById("op" + i.toString())).checked;
			list.push(inputValue);
		}
		for(var i=0;i<4;++i){
			if(list[i]==true){
			this._content.User_option_update(eval(this.filecontent[this.i].qid)-1,option[i]) 
			}
		}
		var ask = window.confirm("Are you sure want to Submit Quiz?");
		if (ask){
			this.router.navigate(['/review']);
		}
	}
	homecnf(){
		var ask = window.confirm("Ongoing Quiz will be Cancelled & You will be redirected to Home Page.");
		if (ask){
			this.router.navigate(['/']);
		}
	}
	review(){
		++this.i;
		(<HTMLInputElement>document.getElementById(`navbtn${this.i.toString()}`)).style.backgroundColor = "#F39C12";
	}
}

