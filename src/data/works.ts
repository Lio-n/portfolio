const current_works: Work[] = [
  {
    title: "First freelance work",
    description: `I'm building my first freelance website. Implemented Dashboard, React, Nextjs, MVC, Authentication with JWT Access, Refresh Tokens, Cookies and Axios. Including both frontend & backend. Hosted on a VPS along with Nginx, ufw, Cerbot, SSL & LetsEncrypt, PM2 and Docker. For this i made little <strong><a href="https://jungle-tea-1ef.notion.site/VPS-Virtual-Private-Server-a7094f0e54e54230a3439b39e643a9e2" target="_black">"Guide" at Notion</a></strong>.`,
    repository_url: "",
    site_url: "https://jungle-tea-1ef.notion.site/VPS-Virtual-Private-Server-a7094f0e54e54230a3439b39e643a9e2",
  },

  {
    title: "Hobby CalendaryApp",
    description:
      'As a hobby I am building, a website where "The main goal of this project is to give a solid development experience for beginner devs".  For more information see the <strong><a href="https://jungle-tea-1ef.notion.site/Calendary-App-Docs-6ed8a93a8c1d4d5a92a718c61caef648" target="_black">Documentation at Notion</a></strong>',
    repository_url: "https://github.com/ValhallaProyects/CalendaryApi/tree/dev",
    site_url: "",
  },
  {
    title: "Second freelance work",
    description:
      "I am building my second freelance website. As the same requirements as the First freelance job like a Dashboard, React, Nextjs, MVC, Authentication with JWT Access, Refresh Tokens, Cookies and Axios. Including the VPS.",
    repository_url: "",
    site_url: "",
  },
  {
    title: "This Portfolio",
    description: "As a little extra i add the repository of this portfolio.",
    repository_url: "https://github.com/Lio-n/portfolio",
    site_url: "",
  },
];

const general_works: Work[] = [
  {
    title: "App movie",
    description: `This was my first <strong><a href="https://apx.school" target="_black">Apx.School</a></strong> Career Challenge, for this challenge I created an application that has to receive arguments through the terminal and display a list of movies in the format you want using only JavaScript. For more details, see the README.md file.`,
    repository_url: "https://github.com/Lio-n/dwf-m1-desafio",
    site_url: "",
  },
  {
    title: "App movie 2.0v",
    description:
      "My second Challenge is a Version 2.0 of the first Challenge, in which I used the minimist library to parse arguments entered from the Terminal, along with POO and Promise, using only TypeScript. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m2-desafio",
    site_url: "",
  },
  {
    title: "The First Design I build",
    description:
      "For my Third Challenge, I learned how to use HTML & CSS which I used to layout this Design, plus several Web concepts such as TCP/PC, regarding CSS I learned Flex and Grid. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m3-desafio",
    site_url: "https://lio-n.github.io/dwf-m3-desafio",
  },
  {
    title: "Testing MELI API",
    description: "For this challenge, use data from the Mercado Libre API and integrate it into this design using Fetch.",
    repository_url: "https://github.com/Lio-n/Fetch-api-de-MELI",
    site_url: "https://lio-n.github.io/Fetch-api-de-MELI",
  },
  {
    title: "Portfolio challenge",
    description:
      "For this Challenge I created this Portfolio in which I used the ContentFul Api to manage the content. With this Challenge I feel that I improved a lot with HTML, CSS and JavaScript.",
    repository_url: "https://github.com/Lio-n/dwf-m4-desafio-portafolio",
    site_url: "https://lio-n.github.io/dwf-m4-desafio-portafolio",
  },
  {
    title: "SPA : Rock, Paper, Scissors App V1",
    description: "For this Challenge, create this rock-paper-scissors single-player game.",
    repository_url: "https://github.com/Lio-n/dwf-m5-desafio",
    site_url: "https://lio-n.github.io/dwf-m5-desafio",
  },
  {
    title: "SPA : Chat App",
    description:
      "For this Challenge, I created a website with chatrooms, using Firestore (DB Realtime & DB NoSQL). For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m6-rooms",
    site_url: "",
  },
  {
    title: "SPA : Rock, Paper, Scissors App V2",
    description: "This Challenge is the 2.0 version of Rock, Paper, Scissors App where I add multiplayer. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m6-desafio",
    site_url: "",
  },
  {
    title: "SPA : Pet Finder V1",
    description:
      "For this Challenge I have built a web application that allows anyone to register, report lost pets and receive notifications from people who report seeing their pets. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m7-desafio",
    site_url: "",
  },
  {
    title: "SPA : Pet Finder V2 React",
    description: "For this Challenge I built the frontend of 'SPA : Pet Finder V1' with react. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m8-desafio",
    site_url: "https://dwf-m8-2406.web.app",
  },
  {
    title: "E-commerce: Backend",
    description:
      "For this Challenge, I built the backend of an e-commerce where people can search and buy products using MercadoPago as payment processor. Plug in an administrator to manage the stock of products. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m9-desafio",
    site_url: "https://dwf-m9-desafio.vercel.app",
  },
  {
    title: "E-commerce: Frontend",
    description:
      "For this Challenge, I built an e-commerce frontend using Next.js and a layer-based architecture. For more details, see the README.md file.",
    repository_url: "https://github.com/Lio-n/dwf-m10-desafio",
    site_url: "https://dwf-m10-desafio.vercel.app",
  },
];

const frontend_mentor_works: Work[] = [
  {
    title: "Note app react native",
    description: `Build this Android-Mobile-App using React-native together with Expo. <strong><a href="https://drive.google.com/file/d/1D4uMJZLE7KIF9PT7WDSQGpUBJWMTznz9/view" target="_black">Apk</a></strong> included in README. For more details, see the README.md file.`,
    repository_url: "https://github.com/Lio-n/note-app-react-native",
    site_url: "",
  },
  {
    title: "Stats preview card component solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-stats-preview-card-component",
    site_url: "https://lio-n.github.io/FM-stats-preview-card-component",
  },
  {
    title: "Order summary card solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-order-summary-component-main",
    site_url: "https://lio-n.github.io/FM-order-summary-component-main",
  },
  {
    title: "3-column preview card component solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-3-column-preview-card-component",
    site_url: "https://lio-n.github.io/FM-3-column-preview-card-component",
  },
  {
    title: "Base Apparel coming soon page solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-base-apparel-page-challenge",
    site_url: "https://lio-n.github.io/FM-base-apparel-page-challenge",
  },
  {
    title: "Testimonials grid section solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-testimonials-grid-section",
    site_url: "https://lio-n.github.io/FM-testimonials-grid-section",
  },
  {
    title: "IP address tracker solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-IP-address-tracker",
    site_url: "https://lio-n.github.io/FM-IP-address-tracker",
  },
  {
    title: "Rock, Paper, Scissors solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-rock-paper-scissors",
    site_url: "https://lio-n.github.io/FM-rock-paper-scissors",
  },
  {
    title: "NFT preview card component solution",
    description: "See the README.md file.",
    repository_url: "https://github.com/Lio-n/FM-NFT-preview-card",
    site_url: "https://lio-n.github.io/FM-NFT-preview-card",
  },
];

export { general_works, frontend_mentor_works, current_works };
