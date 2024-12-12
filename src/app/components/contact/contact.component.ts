import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: false,
})
export class ContactComponent {
  isLoading: boolean = true;

  constructor() {}

  onIframeLoad() {
    this.isLoading = false;
  }
}
