import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() darkmode = true;
  toggle = false;

  public toggleMenu() {
    this.toggle = !this.toggle;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (!this.toggle) {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.toggleMenu();
      }
    }
  }

  constructor(private elementRef: ElementRef) { }
}
