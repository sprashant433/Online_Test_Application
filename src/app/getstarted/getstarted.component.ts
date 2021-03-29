import { Component, OnInit } from '@angular/core';
import { QuizcontentsService } from '../services/quizcontents.service';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

constructor(private _getstart:QuizcontentsService){}
ngOnInit(){
  
}

sentpath(path:string)
{
  
  this._getstart.mymethod(path);

}

}
