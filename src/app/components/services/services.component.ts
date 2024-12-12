import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';
import {IService} from '../../models/i-service';
import {services} from './data';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements AfterViewInit {


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

  protected readonly services = services;
}
