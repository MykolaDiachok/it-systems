import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';
import {IService} from '../../models/i-service';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements AfterViewInit {
  services = [
    {
      title: 'Web Development',
      description: 'We specialize in creating responsive and user-friendly websites tailored to meet your business needs. Using the latest technologies such as Angular, .NET, and modern frontend frameworks, we deliver high-performing web applications that enhance user experience and drive results.',
      icon: 'web-icon.png',
      keyServices:[
        'Custom website development.',
        'Single-page applications (SPA) using Angular.',
        'Backend integration with .NET and RESTFul APIs.',
        'E-commerce platform development.',
        'Website performance optimization.',
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Implementing scalable cloud platforms with Azure.',
      icon: 'cloud-icon.png',
    },
    {
      title: 'IT Consulting',
      description: 'Providing expert IT advice and strategies.',
      icon: 'consulting-icon.png',
    },
    {
      title: 'Custom Software',
      description: 'Creating tailored software solutions.',
      icon: 'software-icon.png',
    },
  ] as IService[];

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
