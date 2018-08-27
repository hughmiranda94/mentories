import { Component, OnInit, Input } from '@angular/core';
import { PopCard } from '../../../database.service';

@Component({
  selector: 'app-pop-card',
  templateUrl: './pop-card.component.html',
  styleUrls: ['./pop-card.component.css']
})
export class PopCardComponent implements OnInit {

  @Input() public card : PopCard;

  constructor() { }

  ngOnInit() {

    console.log(this.card);
  }

  public formatNumber(number) {
    return (number < 10 ? '0' : '') + number;
}

}
