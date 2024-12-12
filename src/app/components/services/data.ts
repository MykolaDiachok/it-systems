import {IService} from '../../models/i-service';

export const services = [
  {
    title: 'Web Development',
    description: 'We specialize in creating responsive and user-friendly websites tailored to meet your business needs. Using the latest technologies such as Angular, .NET, and modern frontend frameworks, we deliver high-performing web applications that enhance user experience and drive results.',

    keyServices: [
      'Custom website development.',
      'Single-page applications (SPA) using Angular.',
      'Backend integration with .NET and RESTFul APIs.',
      'E-commerce platform development.',
      'Website performance optimization.',
    ],
    image:'web-development.webp'
  },
  {
    title: 'Cloud Solutions',
    description: 'Our team provides scalable and secure cloud solutions to help businesses leverage the power of cloud computing. We specialize in Microsoft Azure to deliver cloud-based services that optimize your operations and reduce infrastructure costs.',
    keyServices: [
      'Cloud infrastructure design and deployment.',
      'Azure cloud services.',
      'Implementing serverless solutions.',
      'Data storage and management.',
      'Cloud security and compliance.',
      'Migrating on-premises systems to the cloud.',
    ],
    image:'cloud-solutions.webp'
  },
  {
    title: 'IT Consulting',
    description: 'With over 20 years of experience in IT, we provide expert consulting services to help businesses align their technology strategies with their goals. Our expertise spans software development, system architecture, and IT infrastructure.',
    keyServices: [
      'IT strategy development and implementation.',
      'System architecture design.',
      'Performance optimization for existing systems.',
      'Technology stack evaluation and recommendations.',
      'Troubleshooting and issue resolution.',
    ],
    image:'it-consulting.webp'
  },
  {
    title: 'Custom Software Development',
    description: 'We develop custom software solutions tailored to your unique business processes. Whether you need a desktop application, an enterprise solution, or a specific tool, we ensure the software fits your requirements perfectly.',
    keyServices:[
      'Custom software development.',
      'Desktop applications.',
      'Enterprise solutions.',
      'Database design and management.',
      'Software maintenance and support.',
      'Automation of business processes.',
      'API development and integration.',
      'Maintenance and updates for existing software.'
    ],
    image:'custom-software-development.webp'
  },
  {
    title:'Mobile App Development',
    description: 'We create mobile applications that deliver exceptional user experiences across iOS and Android devices. Our team specializes in developing native and cross-platform apps that are fast, secure, and user-friendly.',
    keyServices:[
      'iOS and Android app development.',
      'Native and cross-platform apps.',
      'User interface design.',
      'App performance optimization.',
      'Integration with backend systems.',
      'App maintenance and updates.',
    ],
    image:'mobile-app-development.webp'
  },
  {
    title: 'Frontend Development',
    description: 'Our frontend development services focus on creating modern, interactive, and visually appealing user interfaces. We bring designs to life using Angular and other cutting-edge frontend technologies.',
    keyServices: [
      'Responsive web design.',
      'Angular development.',
      'User interface design.',
      'Interactive web applications.',
      'Frontend performance optimization.',
      'Blazor development.',
    ],
    image:'frontend-development.webp'
  },
  {
    title: 'Backend Development',
    description: 'Our backend solutions are designed to ensure stability, scalability, and security for your applications.',
    keyServices: [
      'RESTful API development.',
      'Database design and management.',
      'Server-side scripting.',
      'Backend performance optimization.',
      'Integration with third-party services.',
      'Microservices architecture.',
    ],
    image:'backend-development.webp'
  },
  {
    title: 'Database Management',
    description: 'We provide database management services to help businesses store for SQL and No-SQL, manage, and secure their data effectively. Our expertise covers database design, optimization, and maintenance for various database systems.',
    keyServices: [
      'Database design and implementation.',
      'Data migration and integration.',
      'Database performance optimization.',
      'Data security and compliance.',
      'Database maintenance and support.',
    ],
    image:'database-management.webp'
  },
  {
    title: 'DevOps and Automation',
    description: 'Our DevOps and automation services help businesses streamline their development processes, improve collaboration, and increase efficiency. We implement automation tools and practices to accelerate software delivery and ensure quality.',
    keyServices: [
      'Continuous integration and deployment (CI/CD).',
      'Infrastructure as code (IaC).',
      'Automated testing.',
      'Monitoring and logging.',
      'Containerization and orchestration.',
      'DevOps consulting and implementation.',
    ],
    image:'dev-ops-and-automation.webp'
  },
  {
    title: 'Technical Support',
    description: 'We provide reliable technical support to ensure your IT systems operate smoothly. Our proactive approach minimizes downtime and maximizes productivity.',
    keyServices: [
      'IT issue resolution.',
      'System maintenance and updates.',
      'Remote support services.',
      'Technology troubleshooting.',
      'Emergency support.',
      ],
    image:'technical-support.webp'
  }
] as IService[];
