import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  accordion = faChevronDown
  questions = [
    'What is Bookmark?',
    'How can I request a new browser?',
    'Is there a mobile app?',
    'What about the other Chromium browsers?',

  ]
  answers = [
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem tempora placeat necessitatibus nihil ? Quos nihil minima porro ipsa odio vel pariatur tenetur, voluptates quibusdam omnis illo excepturi.Saepe, laboriosam!',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem tempora placeat necessitatibus nihil ? Quos nihil minima porro ipsa odio vel pariatur tenetur, voluptates quibusdam omnis illo excepturi.Saepe, laboriosam!',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem tempora placeat necessitatibus nihil ? Quos nihil minima porro ipsa odio vel pariatur tenetur, voluptates quibusdam omnis illo excepturi.Saepe, laboriosam!',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem tempora placeat necessitatibus nihil ? Quos nihil minima porro ipsa odio vel pariatur tenetur, voluptates quibusdam omnis illo excepturi.Saepe, laboriosam!'
  ]
  anchor: number | null = null

  constructor() { }

  ngOnInit(): void {
  }

  toggle(i: number) {
    this.anchor == i ? this.anchor = null : this.anchor = i
  }
}
