import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);




@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  @ViewChild("desc", { static: true }) desc!: ElementRef

  @ViewChild("input", { static: true }) input!: ElementRef
  @ViewChild("button", { static: true }) button!: ElementRef


  constructor() { }

  ngOnInit(): void {

    gsap.from(this.desc.nativeElement, {
      yPercent: -50,
      opacity: 0,
      duration: .5,
      scrollTrigger: { start: 'top bottom', trigger: this.input.nativeElement, toggleActions: 'play pause none pause' }

    })

    gsap.from(this.input.nativeElement, {
      xPercent: -50,
      opacity: 0,
      duration: .5,
      scrollTrigger: { start: 'top bottom', trigger: this.input.nativeElement, toggleActions: 'play pause none pause' }

    })

    gsap.from(this.button.nativeElement, {
      xPercent: 60,
      opacity: 0,
      duration: .5,
      scrollTrigger: { start: 'top bottom', trigger: this.button.nativeElement, toggleActions: 'play pause none pause' }

    })



  }

}
