import { nanoid } from "nanoid";

export const projects = [
  {
    title: "Easy Todo",
    description: `In this Typescript project, I delved into building a basic todo 
    app using React while emphasizing the integration of Typescript's strong typing system. 
    I showcased my adeptness not only in Typescript's core features like interfaces and types 
    but also in handling React events seamlessly.`,
    tags: ["react", "typescript"],
    largeImg: "src/assets/images/todoLarge.png",
    largeAlt: "a large image of the website",
    smallImg: "src/assets/images/todoSmall.png",
    smallAlt: "a mobile view of the website",
    live: "https://ez-todo.netlify.app/",
    repo: "https://github.com/Sagelyyy/typescript-todo",
    id: nanoid(),
  },
  {
    title: "Kindness",
    description: `Kindness is a full-stack web application built as a personal project to 
    enhance my skills in Postgres, Supabase, and full-stack development. The application 
    allows users to share positive messages 📝 with each other in real time, fostering a 
    community of kindness and positivity 💖.`,
    tags: ["SvelteKit", "Node.js", "Express", "Supabase", "PostgresSQL"],
    largeImg: "src/assets/images/kindnessLarge.png",
    largeAlt: "a large image of the website",
    smallImg: "src/assets/images/kindnessSmall.png",
    smallAlt: "a mobile view of the website",
    live: "https://do-good.netlify.app/",
    repo: "https://github.com/Sagelyyy/Kindness-server",
    id: nanoid(),
  },
  {
    title: "HoloScript",
    description: `HoloScript is a social app I made for The Odin Project curriculum. It 
    is heavily based off of Twitter. It is written in React, and the backend uses firebase. 
    Its purpose is for learning and displaying the skills I have learned throughout the course. 
    It is the final project in the Javascript course.`,
    tags: ["React", "Firebase"],
    largeImg: "src/assets/images/holoLarge.png",
    largeAlt: "a large image of the website",
    smallImg: "src/assets/images/holoSmall.png",
    smallAlt: "a mobile view of the website",
    live: "https://sagelyyy.github.io/holoscript/",
    repo: "https://github.com/Sagelyyy/holoscript",
    id: nanoid(),
  },
];
