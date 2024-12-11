import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-contact',
  imports: [
    CommonModule
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isLoading: boolean = true;


  constructor() {
  }


  onIframeLoad() {
    this.isLoading = false;
  }

}
