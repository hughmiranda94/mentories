import { Component, OnInit, Input } from '@angular/core';
import { SpecCard } from '../../../database.service';

@Component({
  selector: 'app-spec-card',
  templateUrl: './spec-card.component.html',
  styleUrls: ['./spec-card.component.css']
})
export class SpecCardComponent implements OnInit {

  @Input() card : SpecCard;

  constructor() { }

  ngOnInit() {
  }

}
