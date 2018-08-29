import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-spec-menu',
  templateUrl: './spec-menu.component.html',
  styleUrls: ['./spec-menu.component.css']
})
export class SpecMenuComponent implements OnInit {

  public specCards =  this.db.getSpecCards();
  constructor(private db : DatabaseService) { }

  ngOnInit() {
  }

}
