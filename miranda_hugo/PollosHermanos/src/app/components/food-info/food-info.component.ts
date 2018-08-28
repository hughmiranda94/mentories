import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.component.html',
  styleUrls: ['./food-info.component.css']
})
export class FoodInfoComponent implements OnInit {

  @Input() contentId : number;
  @Input() layout : number;



  public firstType : string;
  public secondType : string;
  public contentIdChild : number;

  constructor() { }

  ngOnInit() {
    console.log(this.contentId);
    this.contentIdChild = this.contentId;
    switch (this.layout) {
      case 1:
        this.firstType = 'image';
        this.secondType = 'text';
        break;
      case 2:
        this.firstType = 'text';
        this.secondType = 'image';
        break;
    
      default:
        break;        
    }
  }

}
