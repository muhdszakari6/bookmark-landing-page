import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  @ViewChild("header", { static: true })
  header!: ElementRef;


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.pageYOffset
    currentScroll > 300 ? this.sticky = true : this.sticky = false
  }

  navIcon = faBars
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { scrub: .3 }
    });


    const showAnim = gsap.from(this.header.nativeElement, {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  }

  toggleMobileNav() {
    this.open = !this.open
  }
}
