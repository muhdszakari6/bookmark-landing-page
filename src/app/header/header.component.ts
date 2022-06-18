import { Component, HostListener, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.pageYOffset
    currentScroll > 0 ? this.sticky = true : this.sticky = false
  }

  navIcon = faBars
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  toggleMobileNav() {
    this.open = !this.open
  }
}
