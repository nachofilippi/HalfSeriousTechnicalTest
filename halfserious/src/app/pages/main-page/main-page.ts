import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-main',
  templateUrl: 'main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage implements OnInit {
  isLoadingResults = true;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
}
