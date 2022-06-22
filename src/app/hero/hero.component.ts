import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @ViewChild("cta_buttons", { static: true }) cta_buttons!: ElementRef;
  @ViewChild("image", { static: true }) image!: ElementRef;


  tl: any = gsap.timeline();

  constructor() { }

  ngOnInit(): void {

    let after: any = CSSRulePlugin.getRule(":after");



    this.tl.from('.hero__title', {
      ease: 'Bounce.easeOut',
      yPercent: -30,
      opacity: 0,
      duration: 1,
      delay: .1
    })
    this.tl.from('.hero__desc', {
      ease: 'Bounce.easeOut',
      yPercent: -30,
      opacity: 0,
      duration: 1,
      delay: .2

    }, .2)

    this.tl.from(this.cta_buttons.nativeElement, {
      ease: 'Bounce.easeOut',
      yPercent: -50,
      opacity: 0,
      duration: 1,
      delay: .3,


    }, .2)

    this.tl.from(this.image.nativeElement, {
      ease: 'Bounce.easeOut',
      xPercent: -20,
      opacity: 0,
      duration: 1,
      delay: .5
    }, .2)

    this.tl.to(after[1], {
      cssRule: {
        top: '5%',
      },
      duration: .1,

      scrollTrigger: { start: 'top', scrub: .3, }
    })


  }

}
