 import { Component, AfterViewInit, OnInit, ElementRef, HostListener } from '@angular/core';
 import { Router } from '@angular/router';
 //import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    const smoothScrollLinks = this.elementRef.nativeElement.querySelectorAll('.smooth-scroll');

    smoothScrollLinks.forEach((link: HTMLElement) => {
      link.addEventListener('click', (event: Event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Навігація до цільового URL без оновлення сторінки
        if (targetId) {
          this.router.navigate([], { fragment: targetId });
        }
      });
    });
  }
}
//   export class HeaderComponent {
  
// // це відповідає за появу хедера під час скролу
// //   @HostListener('window:scroll', ['$event'])
// //   onWindowScroll() {
// //     this.isHeaderTransparent = window.scrollY < 40;
// //   }
// }


