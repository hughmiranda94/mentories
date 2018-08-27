import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DatabaseService } from '../../database.service';


@Component({
  selector: 'app-pop-menu',
  templateUrl: './pop-menu.component.html',
  styleUrls: ['./pop-menu.component.css']
})
export class PopMenuComponent implements OnInit {

  public popCards =  this.db.getPopCards();
  constructor(private db : DatabaseService) { }
  ngOnInit() {
  }
}

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {

  transform(value) {
      if (!value) return;
      return value.reverse();
    }
}
