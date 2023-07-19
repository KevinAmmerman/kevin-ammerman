import { Component, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() darkmode = true;
  toggle = true;

  constructor(private elementRef: ElementRef) { }

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
}
