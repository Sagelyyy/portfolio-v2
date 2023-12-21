import { nanoid } from "nanoid";

export const projects = [
  {
    title: "Easy Todo",
    description: `In this Typescript project, I delved into building a basic todo 
    app using React while emphasizing the integration of Typescript's strong typing system. 
    I showcased my adeptness not only in Typescript's core features like interfaces and types 
    but also in handling React events seamlessly.`,
    tags: ["react", "typescript", "git", "github"],
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
    live: "https://do-good.netlify.app/",
    repo: "https://github.com/Sagelyyy/Kindness-server",
    id: nanoid(),
  },
  {
    title: "HoloScript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, 
      recusandae nobis! Animi voluptates voluptatem explicabo, quas 
      repellendus nobis! Aliquid nihil neque aut eius soluta illum sunt, 
      temporibus qui harum delectus fuga odit a magnam impedit tempora, 
      excepturi maxime officia tempore molestias eligendi quod, laudantium 
      at est? Ducimus at magni aliquid!`,
    tags: ["React", "Firebase"],
    live: "https://sagelyyy.github.io/holoscript/",
    repo: "https://github.com/Sagelyyy/holoscript",
    id: nanoid(),
  },
];
