<<<<<<< HEAD
import { Component, ElementRef, HostListener } from '@angular/core';
=======
 import { Component, AfterViewInit, OnInit, ElementRef, HostListener } from '@angular/core';
 import { Router } from '@angular/router';
 //import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
>>>>>>> origin/master

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
<<<<<<< HEAD
export class HeaderComponent {
  private isScrolledToTop = true;
  private scrolling = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.scrolling) {
      return;
    }

    const headerElement = this.elementRef.nativeElement.querySelector('.page-header');

    if (headerElement) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (scrollPosition >= 20 && this.isScrolledToTop) {
        this.isScrolledToTop = false;
        this.scrollToElement(headerElement);
      } else if (scrollPosition < 20) {
        this.isScrolledToTop = true;
      }
    }
  }

  private scrollToElement(element: HTMLElement) {
    this.scrolling = true;

    const duration = 1300;
    const start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const end = element.offsetTop;
    const distance = end - start;
    const increment = 10;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const scrollTop = this.easeInOutQuad(currentTime, start, distance, duration);
      window.scrollTo(0, scrollTop);

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        this.scrolling = false;
      }
    };

    animateScroll();
  }

  private easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  // це відповідає за появу хедера під час скролу
//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll() {
//     this.isHeaderTransparent = window.scrollY < 40;
//   }
=======

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
>>>>>>> origin/master
}
//   export class HeaderComponent {

// // це відповідає за появу хедера під час скролу
// //   @HostListener('window:scroll', ['$event'])
// //   onWindowScroll() {
// //     this.isHeaderTransparent = window.scrollY < 40;
// //   }
// }


