import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf, NgFor} from '@angular/common';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  card01Title = 'Data Science / Analytics';
  card02Title = 'Programming';
  card03Title = 'UX / UI';
  card04Title = '.CoRe';
  card01Content = 'Data Analytics Content';
  card02Content = '';
  card03Content = '';
  card04Content = '';

  events: string[] = [];
  opened!: boolean;

  constructor() { }

  ngOnInit() {
  }
  onClick(event: Event): void {
  }

}
