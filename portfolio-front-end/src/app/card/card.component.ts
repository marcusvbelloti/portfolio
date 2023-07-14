import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  title = '';
  @Input()
  content= '';
  @Input()
  link='';

  constructor() { }

  ngOnInit() {
  }

}
