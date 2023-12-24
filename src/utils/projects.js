import MyShareProject from '../assets/images/projects/myshare_project.webp';
import ShopperProject from '../assets/images/projects/shopper_project.png';
import LetsChatProject from '../assets/images/projects/letschat_project.png';
import MyCrmProject from '../assets/images/projects/mycrm_project.png';
import MyCafeStoreProject from '../assets/images/projects/mycafestore_project.png';
import FilesLinksManagerProject from '../assets/images/projects/fileslinksmanager_project.png';
import PortfolioWebsiteProject from '../assets/images/projects/portfolio_website_project.jpg';
import BuyDigitalProject from '../assets/images/projects/buy_digital_project-min.png';
import SurveyAppVue3Laravel from '../assets/images/projects/survey-app-vue3-laravel.png'

export const projects = [
    {
        id: '09823a1b-f175-452b-a170-c559900cf03d',
        title: 'MyShare',
        description: 'My simple social media app created using React.',
        technologies: [
            'React', 
            'TailwindCSS', 
            'sanity.io', 
            'OAuth2(Google)'
        ],
        thumbnail: MyShareProject,
        video_url: 'https://youtu.be/NI8sUjzLVhE',
        github_url: 'https://github.com/Skitsouprenup/myshare-social-react-app'
    },
    {
      id: 'ab267dba-5c03-4010-bda9-fb586aacb0ee',
      title: 'Survey App',
      description: 'My simple survey app created using Vue3 and Laravel10.',
      technologies: [
          'Vue3',
          'Laravel',
          'MySQL',
          'PHP',
          'Javascript',
          'TailwindCSS' 
      ],
      thumbnail: SurveyAppVue3Laravel,
      video_url: 'https://youtu.be/xajAjuhhN4I',
      github_url: 'https://github.com/Skitsouprenup/vue3-laravel10-survey-app'
    },
    {
        id: 'ea0b3b4f-115f-4059-90f8-303bab513c35',
        title: 'Shopper',
        description: 'A full stack(MERN) e-commerce website.',
        technologies: [
            'React', 
            'SASS/SCSS', 
            'Redux Toolkit', 
            'Nodejs',
            'Express',
            'Stripe',
            'JWT',
            'Typescript',
            'MongoDB',
        ],
        thumbnail: ShopperProject,
        video_url: 'https://youtu.be/OG5xESMMZyU',
        github_url: 'https://github.com/Skitsouprenup/shopper-app-mern-stack'
    },
    {
        id: '3bb483d8-d488-4dc0-a44e-19cfcb37349c',
        title: 'Buy Digital',
        description: 'A simple e-commerce website developed using NextJS and NestJS.',
        technologies: [
            'NextJS 13',
            'NestJS',
            'React-bootstrap',
            'MongoDB',
        ],
        thumbnail: BuyDigitalProject,
        video_url: 'https://www.youtube.com/watch?v=uPy_wX6NcwY',
        github_url: 'https://github.com/Skitsouprenup/nextjs-nestjs-buy-digital-ecommerce'
    },
    {
        id: '5f9febba-bc81-475e-aa4b-4374e780deb3',
        title: 'Let\'s Chat!',
        description: 'A simple chat application created using MERN stack.',
        technologies: [
            'MongoDB',
            'Express',
            'React',
            'Nodejs',
            'Socket.io',
            'Sinch',
            'Twilio',
            'WebRTC'
        ],
        thumbnail: LetsChatProject,
        video_url: 'https://youtu.be/4--kxfKSyXw',
        github_url: 'https://github.com/Skitsouprenup/lets-chat-app-mern'
    },
    {
        id: '16d1246a-e354-4dd0-97ac-60645f6879ba',
        title: 'MyCRM',
        description: 'Simple CRM app created using Vue3 and Django.',
        technologies: [
            'Bootstrap5',
            'Python3',
            'Vue3',
            'Django',
            'Stripe',
            'Typescript',
            'Vite'
        ],
        thumbnail: MyCrmProject,
        video_url: 'https://youtu.be/YRDMfVawP1U',
        github_url: 'https://github.com/Skitsouprenup/mycrm-vue3-django-bootstrap5'
    },
    {
        id: '6b966f60-e617-4433-aeb1-e9584d4f7416',
        title: 'MyCafeStore',
        description: 'Simple Cafe Management System created using Angular and Spring Boot.',
        technologies: [
            'Typescript',
            'Angular',
            'Angular Material',
            'Java',
            'Spring Boot',
            'Postgresql'
        ],
        thumbnail: MyCafeStoreProject,
        video_url: 'https://youtu.be/OqchjCIpULQ',
        github_url: 'https://github.com/Skitsouprenup/mycafestore-angular-springboot'
    },
    {
        id: '1061c8f7-ffbf-40eb-8b9c-9ac6c7b74772',
        title: 'Files and Links Manager',
        description: 'Multipurpose files and links manager that is created by me using java swing package.',
        technologies: [
            'Java',
            'Java Swing UI'
        ],
        thumbnail: FilesLinksManagerProject,
        video_url: 'https://youtu.be/SvH74gjn25g',
        github_url: 'https://github.com/Skitsouprenup/java-files-and-links-manager'
    },
    {
        id: '3dd1dabb-d745-47a2-859f-77c927724b98',
        title: 'My Porfolio Website',
        description: 'Portfolio created by me using react, styled-components and framer-motion.',
        technologies: [
            'Javascript',
            'React',
            'Styled-components',
            'Framer-motion'
        ],
        thumbnail: PortfolioWebsiteProject,
        github_url: 'https://github.com/Skitsouprenup/react-framer-motion-portfolio'
    }
];