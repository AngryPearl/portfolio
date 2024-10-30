export interface Project {
  id: number;
  title: string;
  description: string;
  progress: string;
  url: string;
  image: string;
}

export interface HobbyProject {
  id: number;
  descriptionLeft: string;
  descriptionRight: string;
  imageLeft: string;
  imageRight: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Countdown Timer",
    description: "Animated timer, written in Vanilla JS.",
    progress: "Done",
    url: "https://countdown-timer-rb.netlify.app/",
    image: "/images/timer.png",
  },
  {
    id: 2,
    title: "Fashion Marketplace",
    description: "Site written at the end of the React course.",
    progress: "Done, warm-up in 1min",
    url: "https://react-marketplace-rb.netlify.app",
    image: "/images/marketplace.png",
  },
  {
    id: 3,
    title: "Visualizing Workouts on a Map",
    description:
      "A MapBox-based app allow to find new places that have never been visited before.",
    progress: "Planned",
    url: "",
    image: "/images/map.png",
  },
  {
    id: 4,
    title: "Todo List",
    description: "Created as an introduction to React.",
    progress: "Done",
    url: "https://react-todo-rb.netlify.app/",
    image: "/images/todo.png",
  },
  {
    id: 5,
    title: "Just my GitHub",
    description: "But don't be too critical.",
    progress: "In Progress",
    url: "https://github.com/AngryPearl?tab=repositories",
    image: "/images/github.png",
  },
];

// lubie sie 'oderwac' od wszystkiego i polatac dronem, dla zabawy, dla innej perspektywy, zeby miec powod pojechac w nowe miejsce

// zeby miec cos z klikania czasem tez cos wydrukuje 3d, czasem z gotowego modelu do domu,czasem zrobie samemu model do swoich potrzeb

// no a zeby calkiem odejsc od komputera, albo zeby znalezc dobre miejsce do latania dronem, robie sobie dłuzsze wycieczki rowerowe wokoł miasta

export const HOBBY_PROJECTS: HobbyProject[] = [
  {
    id: 1,
    descriptionLeft:
      "I like to 'break away' from everything and fly a drone for fun, to gain a different perspective, and to have a reason to visit new places.",
    descriptionRight: "Hi, it's me 👋",
    imageLeft: "/images/rocks.png",
    imageRight: "/images/me.png",
  },
  {
    id: 2,
    descriptionLeft:
      "Sometimes I use ready-made models for home, or I create my own to share my ideas and earn a few gift cards for more printing materials.",
    descriptionRight:
      "To take a break from clicking on the computer, I also print in 3D and create models myself to meet my needs.",
    imageLeft: "/images/iphone.png",
    imageRight: "/images/controller.png",
  },
  {
    id: 3,
    descriptionLeft: "Feel free to contact me! :) \n\nThanks for stopping by!",
    descriptionRight:
      "To completely disconnect from the computer or to find a good place to fly my drone, I take longer bike rides around the city.",
    imageLeft: "/images/river.png",
    imageRight: "/images/fog.png",
  },
];
