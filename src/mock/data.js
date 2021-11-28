import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kendra Scott | Developer | Software Engineer | Programmer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to My Projects', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Kendra Scott',
  subtitle: 'I am a jr. dev	with a great personality and a greater love for learning.',
  cta: 'Check me out!',
};

// ABOUT DATA
export const aboutData = {
  img: 'green2.png',
  paragraphOne:
    'I have a certification in Full Stack Development from UNLV through DevPoint Labs that I received in April 2020. While I already had a foundation of html and css, I was able to learn about object oriented programming building apps with Ruby and Javascript. I also was able to understand and use multiple frameworks such as Ruby on Rails and React (technically a library). Libraries such as jquery and multiple ruby gems. How to implement UI/UX using bootstrap. Building databases and analyzing data using SQL on Postgres. We also focused on learning how to push to live production websites so I was able to learn http protocols, and http params and query with php. We used cloud platforms such as Heroku and Netlify. We also learned how to build mobile apps using one stop shops such as Expo and Android Studio.',
  paragraphTwo:
    'I love to use VIM because I’m a glutton for punishment but I don’t mind using VS Code or Xcode.',
  paragraphThree:
    'A passion of mine is building web scrapers and automating user testing using Watir, as well as, implementing APIs. I have experience  using Ruby on the backend and React on the frontend while building full scale projects. In my free time, I am expanding my knowledge base to Python and C++. I am also using more cloud platforms such as AWS and Azure.',
  resume: 'https://www.dropbox.com/s/5n69r1y2ijo46cr/K%20Scott%20Resume_.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'stampic.png',
    title: 'S.T.A.M.I.N.A. - Ruby on Rails',
    info: 'Save Time And Money In an App',
    info2:
      'A webscraper built with Ruby on Rails and Watir. Watir can be used for test automation as well but I built this web scraper to immulate a human growing through grocery store websites and returning the data for the user to determine the best price for each item.',
    url: 'https://youtu.be/tPNadVOFsbQ',
    repo: 'https://github.com/kendras05/stamina', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ketopic.png',
    title: 'Wix Website',
    info: 'Keto Food Website',
    info2:
      'This is an ecommerce site that was built and designed without a template. This website has some animation with the moving pictures and pictures change in the store with a rollover feature. ',
    url: 'https://youtu.be/QP9bhcNyaqo',
    repo: '', // if no repo, the button will not show up
  },
  //  {
  //  id: nanoid(),
  // img: 'project.jpg',
  // title: '',
  // info: '',
  // info2: '',
  // url: '',
  // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'foundpic.png',
    title: 'Wordpress Website',
    info: 'Climate Restoration Site',
    info2:
      'Changed the layout, added links to partner website logos, added pages, color matched the objects on the page, heavy CSS editing, and more.',
    url: 'https://youtu.be/vQosG2nDE5c',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kendrapsy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    // id: nanoid(),
    // name: 'twitter',
    // url: '',
    // },
    // {
    // id: nanoid(),
    // name: 'codepen',
    // url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kendra-scott-040321',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kendras05',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
