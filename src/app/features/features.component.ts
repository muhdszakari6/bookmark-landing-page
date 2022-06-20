import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Observable, map, fromEvent, startWith, shareReplay } from 'rxjs';


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
  isHandset: boolean = false;

  media(query: string): Observable<boolean> {
    const mediaQuery = window.matchMedia(query);
    return fromEvent(mediaQuery, 'change').pipe(
      startWith(mediaQuery as any),
      map((list: MediaQueryList) => list.matches)
    );
  }

  // Usage

  constructor(

  ) { }

  ngOnInit(): void {
    const panels = gsap.utils.toArray(".feature__tab-content");
    this.media('(max-width: 767px)').subscribe((matches) =>
      this.isHandset = (matches) // true or false
    );


    ScrollTrigger.matchMedia({

      // desktop
      "(min-width: 768px)": () => {
        this.tween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: this.container.nativeElement,
            pin: true,
            pinSpacing: false,
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


      },
    });
  }

  openTab(i: number, targetElem: any) {
    this.openedTab = i

    if (!this.isHandset) {
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
}
