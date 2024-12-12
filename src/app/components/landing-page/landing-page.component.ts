import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  standalone: false,
})
export class LandingPageComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'Development of IT Systems - Croatia | .NET, C#, SQL, Angular, Azure Experts',
    );

    this.meta.addTag({
      name: 'description',
      content:
        'Expert IT development services specializing in .NET, C#, SQL, Angular, Azure, and enterprise solutions. Delivering top-notch software engineering and cloud services.',
    });

    this.meta.addTag({
      name: 'keywords',
      content:
        'IT development, .NET, C#, SQL, Angular, Azure, web application development, WAS, GitHub, software engineering, cloud solutions, frontend, backend, DevOps, APIs, REST, system architecture, database design, enterprise solutions',
    });

    this.meta.addTag({
      name: 'author',
      content: 'Mykola Diachok',
    });
  }
}
