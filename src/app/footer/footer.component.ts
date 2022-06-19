import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  twitterIcon = faTwitter
  facebookIcon = faFacebookSquare
  constructor() { }

  ngOnInit(): void {


  }

}
