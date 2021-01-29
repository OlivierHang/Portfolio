import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Olivier | Developpeur Junior', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Portfolio de Olivier Hang, Developpeur', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hello ! C'est`,
  name: 'Olivier',
  subtitle: 'Developpeur Junior',
  cta: 'A propos de moi',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'votrank/votrank.png',
    title: `Vot'Rank`,
    info: `Site web full-stack | HTML CSS Javascript PHP | MySQL | MVC 'Code Igniter 4'`,
    info2:
      'Vous pouvez créer des sondages, voter par un système de classement, voir les résultats, créer un compte et manager vos sondages',
    url: 'http://votrank.epizy.com/',
    repo: 'https://github.com/OlivierHang/CI_VotRank_v1_final', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gite/gite.png',
    title: `Gîte de Haute Montagne`,
    info: `Application logiciel | C#.NET | SQL Server | WPF`,
    info2: 'Un back office pour gérer les réservations dans un Gîte de Haute Montagne',
    url: 'https://github.com/OlivierHang/Gite_montagne',
    repo: 'https://github.com/OlivierHang/Gite_montagne', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `N'hésitez pas à me contacter !`,
  btn: 'E-mail',
  email: 'hang.oliver@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/olivierhang/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/OlivierHang',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
