import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  openedTab: number = 0;
  tabs: string[] = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']

  constructor() { }

  ngOnInit(): void {
  }

  openTab(i: number) {
    this.openedTab = i



  }
}
