import { Injectable } from '@angular/core';

@Injectable()
export class MyfirstService {
messages:Array<any>=[];
constructor() {this.init(); }
init():void{
  this.insert({name:"amine",email:'ferjaoui44@gmail.com',message:'hello 0'})
  this.insert({name:"amine1",email:'ferjaoui45@gmail.com',message:'hello 1'})
  this.insert({name:"amine2",email:'ferjaoui46@gmail.com',message:'hello 2'})
}

  insert(message:{name:String,email:String,message:String}):void{
    this.messages.push(message);
  }
  getAllmessages():any[]{
    return this.messages;
  }
deleteMessage(index:number):void{
  this.messages.splice(index,1);
}
}
