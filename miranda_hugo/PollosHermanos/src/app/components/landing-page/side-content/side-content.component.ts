import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit {

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    images = [
      'assets/tortillas.jpg',
      'assets/pizza.jpg',
      'assets/tomatos.jpg',
    ]
  constructor() { }

  ngOnInit() {
  }

}