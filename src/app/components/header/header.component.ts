import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHeaderTransparent = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isHeaderTransparent = window.scrollY < 40;
  }
}
