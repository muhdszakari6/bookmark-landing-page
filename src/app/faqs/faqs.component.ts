import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit, AfterViewInit {

  @ViewChildren("question") questionsEl!: QueryList<ElementRef>;


  @ViewChild("button", { static: true }) button!: ElementRef


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

    gsap.from(this.button.nativeElement, {
      yPercent: 10,
      opacity: 0,
      duration: .1,
      scrollTrigger: { start: 'top bottom', trigger: this.button.nativeElement, toggleActions: 'play pause none pause' }

    })



  }

  ngAfterViewInit(): void {
    this.questionsEl.forEach(
      (question, i) => {
        gsap.from(question.nativeElement, {

          xPercent: i % 2 === 0 ? 40 : -40,
          skewX: i % 2 === 0 ? 40 : -40,
          yPercent: 40,
          opacity: 0,
          duration: .5,
          delay: i * 0.1,
          scrollTrigger: { start: 'bottom bottom', trigger: question.nativeElement, scrub: false, toggleActions: 'play pause none reverse' }

        })
      }
    )



  }

  toggle(i: number) {
    this.anchor == i ? this.anchor = null : this.anchor = i
  }
}
