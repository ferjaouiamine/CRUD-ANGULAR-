import { Component } from '@angular/core';
import { MyfirstService } from '../Services/myfirst.service';

@Component({
  selector: 'app-my-first-camp',
  templateUrl: './my-first-camp.component.html',
  styleUrl: './my-first-camp.component.scss'
})
export class MyFirstCampComponent {
constructor(
  private service:MyfirstService
){
  this.messages=this.service.getAllmessages();
  this.isSubmitted=this.messages.length> 0;
}







deleteMessage(index: number) {
  this.service.deleteMessage(index);
throw new Error('Method not implemented.');
}

  name:String='';
  email:String='';
  message:String='';
  isSubmitted:boolean=false;
messages:Array<any>=[];
  onSubmit():void {
this.isSubmitted=true;
this.service.insert({'name':this.name,
  'email':this.email,
  'message':this.message});
  console.log(this.messages);
  
  }
}
