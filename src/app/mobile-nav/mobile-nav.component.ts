import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBookmark, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  bookmark = faBookmark
  close = faTimes
  twitter = faTwitter
  facebook = faFacebookSquare
  @Input() isOpen: boolean = false;
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    this.isOpen = false
    this.closeEvent.emit()

  }

}
