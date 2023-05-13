 import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  export class HeaderComponent {
  
// це відповідає за появу хедера під час скролу
//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll() {
//     this.isHeaderTransparent = window.scrollY < 40;
//   }
}
