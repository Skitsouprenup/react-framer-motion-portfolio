import MyShareProject from '../assets/images/projects/myshare_project.webp';
import ShopperProject from '../assets/images/projects/shopper_project.png';
import LetsChatProject from '../assets/images/projects/letschat_project.png';
import MyCrmProject from '../assets/images/projects/mycrm_project.png';
import MyCafeStoreProject from '../assets/images/projects/mycafestore_project.png';
import FilesLinksManagerProject from '../assets/images/projects/fileslinksmanager_project.png';

export const projects = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
        title: 'Lets Chat',
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
        id: 3,
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
        id: 4,
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
        id: 5,
        title: 'Files and Links Manager',
        description: 'Multipurpose files and links manager that is created by me using java swing package.',
        technologies: [
            'Java',
            'Java Swing UI'
        ],
        thumbnail: FilesLinksManagerProject,
        video_url: 'https://youtu.be/SvH74gjn25g',
        github_url: 'https://github.com/Skitsouprenup/java-files-and-links-manager'
    }
];