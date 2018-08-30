import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  @ViewChild ("emailInput",{read: ElementRef}) emailInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  subscribedAlert()
  {
    let userEmail : string = this.emailInput.nativeElement.value
    // if(userEmail && userEmail.indexOf('@')>-1 && userEmail.indexOf('.')>-1 ){
    //   alert('Subscribed!');
    // }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)){
      alert('Subscribed!');
    }
    else{
      alert('Enter a valid email');
    }
    
  }

}
