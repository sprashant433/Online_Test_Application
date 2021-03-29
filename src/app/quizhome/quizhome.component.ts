import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuizcontentsService } from '../services/quizcontents.service';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.component.html',
  styleUrls: ['./quizhome.component.css']
})
export class QuizhomeComponent implements OnInit  {
	qname:string;

	constructor(private _quizservice:QuizcontentsService,private router:Router){}
	ngOnInit(){
	this.qname = this._quizservice.path;
	}

	homecnf(){
		var ask = window.confirm("You will be redirected to Home Page.");
		if (ask) {
			this.router.navigate(['/']);

		}
	}

   
}
