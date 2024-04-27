import MyShareProject from '../assets/images/projects/myshare_project.webp';
import ShopperProject from '../assets/images/projects/shopper_project.jpg';
import LetsChatProject from '../assets/images/projects/letschat_project.png';
import MyCrmProject from '../assets/images/projects/mycrm_project.png';
import MyCafeStoreProject from '../assets/images/projects/mycafestore_project.png';
import FilesLinksManagerProject from '../assets/images/projects/fileslinksmanager_project.png';
import PortfolioWebsiteProject from '../assets/images/projects/portfolio_website_project.jpg';
import BuyDigitalProject from '../assets/images/projects/buy_digital_project-min.png';
import SurveyAppVue3Laravel from '../assets/images/projects/survey-app-vue3-laravel.png';
import Java2DPhysicsEngineForCircles from '../assets/images/projects/java_2d_physics_engine_for_circles.png';
import NeuralNetworkInC from '../assets/images/projects/neural-network-for-logic-gates-and-adder.png';
import FoodRecipeAngular17SpringBoot from '../assets/images/projects/food-recipe-angular17-spring-boot.png';
import ReactAdminApp1 from '../assets/images/projects/react-admin-app-1.png';
import Web3AppReactSolidty1 from '../assets/images/projects/web3-app-react-solidity.jpg';
import Nextjs14ShadcnEventManagement from '../assets/images/projects/nextjs14-shadcn-event-management-app.jpg';
import NinjaGamePygameCe from '../assets/images/projects/ninja-game-pygame-ce.png';
import TwitterCloneSvelteKitFirebase from '../assets/images/projects/twitter-clone-sveltekit-firebase.png';
import ShurlNuxt3Supabase from '../assets/images/projects/shurl-nuxt3-supabase.png';

export const projects = [
    {
      id: '4addded8-2045-49c2-b398-9e5945a31b70',
      title: 'shURL',
      description: 'URL shortener created using Nuxt3, Supabase and TailwindCSS.',
      technologies: [
        'Typescript',
        'Nuxt3',
        'Supabase',
        'TailwindCSS'
      ],
      thumbnail: ShurlNuxt3Supabase,
      video_url: 'https://youtu.be/J1OWqJ_fdfU',
      github_url: 'https://github.com/Skitsouprenup/shurl-nuxt3-supabase'
    },
    {
      id: '300bb349-45eb-41f0-8560-926abb98a8bc',
      title: 'twitter-clone-sveltekit-firebase',
      description: 'Simple twitter clone with limited pages and functionalities.',
      technologies: [
        'Sveltekit',
        'TailwindCSS',
        'Firebase',
        'Shadcn-svelte',
        'Typescript'
      ],
      thumbnail: TwitterCloneSvelteKitFirebase,
      video_url: 'https://youtu.be/XyAFo38ckJ8',
      github_url: 'https://github.com/Skitsouprenup/twitter-clone-sveltekit-firebase'
    },
    {
      id: '6425b67a-c832-4ee8-8d3f-c41ebd390eb6',
      title: 'Ninja Game',
      description: 'A simple 2D platformer game created using pygame-ce(Community Edition).'+
      ' This game is not fully polished and only created for experimentation and learning purposes.',
      technologies: [
        'Python',
        'pygame-ce',
        '2D Platformer',
        'Game Development'
      ],
      thumbnail: NinjaGamePygameCe,
      video_url: 'https://youtu.be/1-AQYvMeY20',
      github_url: 'https://github.com/Skitsouprenup/ninja_game_pygame-ce'
    },
    {
      id: '83472f6f-5e0a-41f0-8879-810c2dd197ef',
      title: 'Get Event',
      description: 'A Simple and responsive event manager app using nextjs14 with shadcn and tailwind for styling, '+
      'stripe for payment, clerk for authentication and zod for form validation.',
      technologies: [
        'Typescript',
         'NextJS 14',
         'Shadcn',
         'Stripe',
         'Clerk',
         'MongoDB',
         'Mongoose',
         'Tailwind',
         'Zod'
      ],
      thumbnail: Nextjs14ShadcnEventManagement,
      video_url: 'https://youtu.be/pMVWLpk30h8',
      github_url: 'https://github.com/Skitsouprenup/nextjs14-shadcn-event-management-app'
    },
    {
        id: '302cb7ff-7fde-4a7b-a028-c51a943616cc',
        title: 'MyAdminApp',
        description: 'A Simple and responsive Admin Dashboard app created using react.',
        technologies: [
          'React',
          'Typescript',
          'recharts',
          'MUI Data Grid',
          'HTML',
          'CSS'
        ],
        thumbnail: ReactAdminApp1,
        video_url: 'https://youtu.be/5CCogRUEbNI',
        github_url: 'https://github.com/Skitsouprenup/react-admin-app1'
    },
    {
      id: 'd28a8dc3-3f26-49fe-9e17-3bbc74c50f74',
      title: 'Web3App',
      description: 'A Simple and responsive blockchain app using react as frontend, solidity for interaction with the blockchain and hardhat for deploying and testing solidity contracts.',
      technologies: [
        'Typescript',
        'React',
        'SCSS',
        'Solidity',
        'Hardhat'
      ],
      thumbnail: Web3AppReactSolidty1,
      video_url: 'https://youtu.be/K3apk2Yfw7Y',
      github_url: 'https://github.com/Skitsouprenup/web3-app-react-solidity'
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
      id: '8de47c54-fb63-4b6c-a15f-06b98de90d16',
      title: 'Neural Network for Logic Gates and Adder',
      description: 
        'A simple neural network model for logic gates'+
        ' and adder in C programming language.',
      technologies: [
          'C',
          'Artificial Intelligence',
          'Machine Learning'
      ],
      thumbnail: NeuralNetworkInC,
      video_url: 'https://youtu.be/71N2ihtNK80',
      github_url: 'https://github.com/Skitsouprenup/logic-gates-and-adder-neural-network-in-c'
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
      id: '55feccf8-491f-42b5-a031-522f6a57c2d8',
      title: 'Food Recipe Share',
      description: 'A simple food recipe sharing app.',
      technologies: [
        'Typescript',
        'Angular17',
        'Angular Material',
        'SCSS',
        'TailwindCSS',
        'Java',
        'Spring Boot',
        'MySQL'
      ],
      thumbnail: FoodRecipeAngular17SpringBoot,
      video_url: 'https://youtu.be/4Xwj0do-E3s',
      github_url: 'https://github.com/Skitsouprenup/food-recipe-angular17-spring-boot'
    },
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
      id: 'b4124a1d-42c4-4527-8820-e258b4442059',
      title: '2D Physics Engine for Circles',
      description: 
        'A simple 2D physics engine for circle objects.'+
        ' This is my attempt to write a physics engine in java in 2020.'+
        ' This physics engine is not fully polished. I created this project'+
        ' for fun and experimentation only.',
      technologies: [
          'Java',
          'Java Swing UI',
      ],
      thumbnail: Java2DPhysicsEngineForCircles,
      video_url: 'https://youtu.be/92ttC2Bv0sg',
      github_url: 'https://github.com/Skitsouprenup/java-2d-circle-physics-engine'
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
            'Javascript',
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