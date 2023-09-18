import type { PortfolioItem } from '../types/portfolio-item';
import PortfolioHomeImage from '../images/work/portfolio/home.png';
import PortfolioAboutImage from '../images/work/portfolio/about.png';
import PortfolioWorkImage from '../images/work/portfolio/work.png';
import KcImagen from '../images/work/kc-admin/kc-admin.png';
import KcImagenV2 from '../images/work/kc-admin/kc-adminv2.png';
import KiriPortfolio from '../images/work/kiri-portfolio/ArfLfO1.png';

const websiteList: PortfolioItem[] = [
  {
    title: 'Portfolio',
    description: [
      'Un sitio de portfolio diferente destinado a brindar una experiencia interesante a los usuarios.',
      'Me divertí mucho creando este sitio. Como desafío, quería ver qué podía lograr sin utilizar ningún marco de interfaz de usuario y manteniendo la mayor parte del contenido impulsado por HTML y CSS.',
      'Construido con Typecript, Tailwind CSS y Astro🚀',
    ],
    websiteLink: 'https://kiri86.com/',
    codeLink: 'https://github.com/k1ri86/nuevo-portfolio',
    images: [PortfolioHomeImage, PortfolioAboutImage, PortfolioWorkImage],
    color: 'bg-rose-100 shadow-rose-900',
  },
  {
    title: 'KC Admin',
    description: [
      'KC Admin es un menu de administracion para FiveM utilizando el framework de ESX en su ultima version un menu simple pero a la vez con muchas funciones para poder ejecutar en tu servidor.',
      'KC Admin a sido uno de los paneles de administracion mas utilizados en la comunidad de FiveM',
      'Usando lua, html, css, js, bootstrap y mysql.',
    ],
    websiteLink: 'https://github.com/K1ri86/kc_adminV2',
    codeLink: 'https://github.com/K1ri86/kc_adminV2',
    images: [KcImagen, KcImagenV2],
    color: 'bg-green-100 shadow-green-900',
  },
  {
    title: 'Kiri86 Portfolio',
    description: ['Kiri86 Portfolio minimalista y simple.'],
    websiteLink: 'https://kiri86.com/',
    codeLink: 'https://github.com/K1ri86/kiri86_Portfolio_Astro',
    images: [
      KiriPortfolio,
    ],
    color: 'bg-violet-100 shadow-violet-900',
  },
];

export default websiteList;
