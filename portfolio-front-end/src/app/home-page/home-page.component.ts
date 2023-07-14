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

  card01Title = 'Blog';
  content = "welcome";

  events: string[] = [];
  opened!: boolean;

  constructor() { }

  ngOnInit() {
  }

}
