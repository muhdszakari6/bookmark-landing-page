import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  twitter = faTwitter
  facebook = faFacebookSquare
  constructor() { }

  ngOnInit(): void {
  }

}
