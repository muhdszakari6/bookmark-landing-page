import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @ViewChild("feature__container", { static: true }) container!: ElementRef;
  @ViewChild("indicator", { static: true }) indicator!: ElementRef;
  @ViewChild("indicatorMobile", { static: true }) indicatorMobile!: ElementRef;



  openedTab: number = 0;
  tabs: string[] = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
  tween: any

  constructor() { }

  ngOnInit(): void {
    const panels = gsap.utils.toArray(".feature__tab-content");
    this.tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: this.container.nativeElement,
        pin: true,
        pinSpacing: true,
        start: 'center center',
        scrub: .3,
        snap: 1 / (panels.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });

    gsap.to(this.indicator.nativeElement, {
      xPercent: 100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: this.container.nativeElement,
        pin: true,
        pinSpacing: true,
        start: 'center center',
        scrub: .3,
        snap: 1 / (panels.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });
    // console.log(this.indicatorMobile)
    // gsap.to(this.indicatorMobile.nativeElement, {
    //   yPercent: 100 * (panels.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: this.container.nativeElement,
    //     pin: true,
    //     pinSpacing: true,
    //     start: 'center center',
    //     scrub: .3,
    //     snap: 1 / (panels.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: "+=3500",
    //   }
    // });


  }

  openTab(i: number, targetElem: any) {
    this.openedTab = i

    console.log(targetElem.offsetWidth)

    let totalScroll = this.tween.scrollTrigger.end - this.tween.scrollTrigger.start,
      totalMovement = ([1, 2, 3].length - 1) * targetElem.offsetWidth;
    let y = Math.round(this.tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
    console.log(y)
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  }
}
