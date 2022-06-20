import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);


@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss']
})
export class ExtensionComponent implements OnInit {

  @ViewChild("card1", { static: true }) card1!: ElementRef
  @ViewChild("card2", { static: true }) card2!: ElementRef
  @ViewChild("card3", { static: true }) card3!: ElementRef

  tl: any = gsap.timeline();


  constructor() { }

  ngOnInit(): void {

    gsap.from(this.card3.nativeElement, {
      yPercent: -10,
      xPercent: -70,
      rotate: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: { start: 'top center', trigger: this.card3.nativeElement, toggleActions: 'play pause none pause' }

    })

    gsap.from(this.card2.nativeElement, {
      yPercent: -10,
      xPercent: -70,
      rotate: 20,
      opacity: 0,
      duration: 1,
      delay: .5,
      scrollTrigger: { start: 'top center', trigger: this.card2.nativeElement, toggleActions: 'play pause none pause' }

    })



    gsap.from(this.card1.nativeElement, {
      yPercent: -10,
      xPercent: -70,
      rotate: 20,
      opacity: 0,
      duration: 1,
      delay: 1,
      scrollTrigger: { start: 'top center', trigger: this.card1.nativeElement, toggleActions: 'play pause none pause' }

    })



    // this.tl.from(this.card2.nativeElement, {
    //   ease: 'none',
    //   xPercent: -20,
    //   opacity: .1,
    //   duration: 1,
    //   scrollTrigger: { start: 'top', scrub: .3, }

    // }, .4)

    // this.tl.from(this.card3.nativeElement, {
    //   ease: 'none',
    //   xPercent: -20,
    //   opacity: .1,
    //   duration: 1,
    //   scrollTrigger: { start: 'top', scrub: .3, }

    // }, .3)


  }

}
