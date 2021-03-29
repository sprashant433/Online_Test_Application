import { Injectable } from '@angular/core';
import { Quizformat } from '../quizdisplay/quizformat';

@Injectable({
  providedIn: 'root'
})
export class QuizcontentsService {

	path:string =""; 
	user_option = ["","","","","","","","","",""];
	cans = [];
	currentu ="";
   
	constructor() {}

	mymethod(data:string){
		this.path = data;
	}

	User_option_update(ind:number,data:string){
		this.user_option[ind] = data; 
	}

	UserPass:any[]=[
		{
			"Ufname":"Prashant",
			"Ulname":"Singh",
			"Umail":"pras@gmail.com",
			"Upass":"dont123"

			
		},
		{
			"Ufname":"Rishu",
			"Ulname":"Singh",
			"Umail":"rishu@gmail.com",
			"Upass":"need123"
			
		}

	]

	gk_content:Quizformat[] = [
		{
			qid:"1",
			qtext:"Fathometer is used to measure",
			op1:"Earthquakes",
			op2:"Rainfall",
			op3:"Ocean depth",
			op4:"Sound intensity",
			ans:"Ocean depth"	
		},
		{
			qid:"2",
			qtext:"With which of the following was satyajit Ray associated",
			op1:"Commercial art",
			op2:"Classical Music",
			op3:"Classical Dance",
			op4:"Direction of films",
			ans:"Direction of films"
		},
		{
			qid:"3",
			qtext:"Who proposed the Preamble before the Drafting Committee of the Constitution",
			op1:"Jawaharlal Nehru",
			op2:"B.R.Ambedkar",
			op3:"B.N.Rau",
			op4:"Mahatma Gandhi",
			ans:"Jawaharlal Nehru"
		},

		{
			qid:"4",
			qtext:"'Bagh', a village in Gwalior is famous for",
			op1:"Sculptures",
			op2:"Architecture",
			op3:"Cave Painting",
			op4:"All of the above",
			ans:"Cave Painting"
		},
		{
			qid:"5",
			qtext:"Which places is said to be the cathedral city of india?",
			op1:"Benaras",
			op2:"Kancheepuram",
			op3:"Madurai",
			op4:"Bhubaneswar",
			ans:"Bhubaneswar"
		},
		{
			qid:"6",
			qtext:"D.D.T. was invented by",
			op1:"Paul Muller",
			op2:"John Dalton",
			op3:"Rudolf",
			op4:"None of these",
			ans:"Paul Muller"
		},
		{
			qid:"7",
			qtext:"The human heart is",
			op1:"Neurogenic heart",
			op2:"Myogenic heart",
			op3:"Pulsating heart",
			op4:"Ampullary heart",
			ans:"Myogenic heart"
		},
		{
			qid:"8",
			qtext:"The blue colour of the clear sky is due to",
			op1:"Diffraction of light",
			op2:"Dispersion of light",
			op3:"Reflection of light",
			op4:"Refraction of light",
			ans:"Dispersion of light"
		},

		{
			qid:"9",
			qtext:"World’s highest railway bridge will be constructed on which river?",
			op1:"Ganga",
			op2:"Chenab",
			op3:"Yamuna",
			op4:"Kaveri",
			ans:"Chenab"
		},
		{
			qid:"10",
			qtext:"Who is the author of the book 'Freedom Behind Bars '",
			op1:"Kiran Bedi",
			op2:"Jawaharlal Nehru",
			op3:"Nelson Mandela",
			op4:"Sheikh Abdullah",
			ans:"Kiran Bedi"
		}
	]

	tech_content:Quizformat[] = [
		{
			qid:"1",
			qtext:"Microsoft has opened its new IDC facility in which city?",
			op1:"Faridabad",
			op2:"Mumbai",
			op3:"Surat",
			op4:"Noida",
			ans:"Noida"
		},
		{
			qid:"2",
			qtext:"Tech major Microsoft has launched its new India Development Center (IDC) facility in which state?",
			op1:"Gujarat",
			op2:"Uttar Pradesh",
			op3:"	Kerala",
			op4:"Karnataka",
			ans:"Uttar Pradesh"
		},
		{
			qid:"3",
			qtext:"Who has launched its new Taj Mahal inspired Engineering Hub in NCR?",
			op1:"Snapdeal",
			op2:"Microsoft",
			op3:"Amazon",
			op4:"Flipkart",
			ans:"Microsoft"
		},
		{
			qid:"4",
			qtext:"Which telecom company has become the first one in India to demonstrate the operation of the 5G network?",
			op1:"Reliance Jio",
			op2:"Airtel",
			op3:"Vi",
			op4:"BSNL",
			ans:"Airtel"
		},
		{
			qid:"5",
			qtext:"Which Institution has signed MoU with MoRTH for strengthening R&D activities?",
			op1:"IIT Roorkee",
			op2:"IIT Delhi",
			op3:"IIT Madras",
			op4:"IIT Kharagpur",
			ans:"IIT Roorkee"
		},
		{
			qid:"6",
			qtext:"The NSDC has partnered with which university to provide the Digital Skills Training in India?",
			op1:"Massachusetts Institute of Technology",
			op2:"Harvard University",
			op3:"Stanford University",
			op4:"California State University",
			ans:"California State University"
		},
		{
			qid:"7",
			qtext:"Which company has completed the acquisition of smart wearable company Fitbit?",
			op1:"Hike",
			op2:"Flipkart",
			op3:"Facebook",
			op4:"Google",
			ans:"Google"
		},
		{
			qid:"8",
			qtext:"Which company became the first independent power producer to fully commission the first three wind auctions held by the SECI?",
			op1:"My Home Power private Limited",
			op2:"Shyam Indus Power Solutions Limited",
			op3:"Reliance Power Trading Limited",
			op4:"Sembcorp Energy India Limited",
			ans:"Sembcorp Energy India Limited"
		},
		{
			qid:"9",
			qtext:"Which among the following department launched pan India 1000 SARS-CoV-2 RNA genome sequencing programme in collaboration with the national laboratories and clinical organization?",
			op1:"Department of Chemicals and Petrochemicals",
			op2:"Department for Science and Technology",
			op3:"Department of Health and Family Welfare",
			op4:"Department of Biotechnology",
			ans:"Department of Biotechnology"
		},
		{
			qid:"10",
			qtext:"India and European Union (EU) exchanged Note Verbale to renew its Agreement on Scientific and Technological Cooperation for how many years?",
			op1:"4",
			op2:"6",
			op3:"5",
			op4:"9",
			ans:"5"
		}
	]

	appti_content:Quizformat[] = [
		{
			qid:"1",
			qtext:"A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
			op1:"45 km/hr",
			op2:"50 km/hr",
			op3:"54 km/hr",
			op4:"55 km/hr",
			ans:"50 km/hr"
		},
		{
			qid:"2",
			qtext:"An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of:",
			op1:"300 kmph",
			op2:"360 kmph",
			op3:"600 kmph",
			op4:"720 kmph",
			ans:"720 kmph"
		},
		{
			qid:"3",
			qtext:"The angle of elevation of a ladder leaning against a wall is 60Â° and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
			op1:"2.3 m",
			op2:"4.6 m",
			op3:"7.8 m",
			op4:"9.2 m",
			ans:"9.2 m"
		},
		{
			qid:"4",
			qtext:"A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
			op1:"12 days",
			op2:"15 days",
			op3:"16 days",
			op4:"18 days",
			ans:"15 days"
		},
		{
			qid:"5",
			qtext:"A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:",
			op1:"Rs. 650",
			op2:"Rs. 690",
			op3:"Rs. 698",
			op4:"Rs. 700",
			ans:"Rs. 698",
		},
		{
			qid:"6",
			qtext:"The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:",
			op1:"625",
			op2:"630",
			op3:"640",
			op4:"650",
			ans:"625"
		},
		{
			qid:"7",
			qtext:"The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
			op1:"15",
			op2:"16",
			op3:"18",
			op4:"25",
			ans:"16"
		},
		{
			qid:"8",
			qtext:"A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4000 more than B and B Rs. 5000 more than C. Out of a total profit of Rs. 35,000, A receives:",
			op1:"Rs. 8400",
			op2:"Rs. 11,900",
			op3:"Rs. 13,600",
			op4:"Rs. 14,700",
			ans:"Rs. 14,700"
		},
		{
			qid:"9",
			qtext:"Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
			op1:"39, 30",
			op2:"41, 32",
			op3:"42, 33",
			op4:"43, 34",
			ans:"42, 33"
		},
		{
			qid:"10",
			qtext:"The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
			op1:"4 years",
			op2:"8 years",
			op3:"10 years",
			op4:"None of these",
			ans:"4 years",
		}
	]
}
