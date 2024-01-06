import { nanoid } from "nanoid";

export const projects = [
  {
    title: "Easy Todo",
    description: `In this Typescript project, I delved into building a basic todo 
    app using React while emphasizing the integration of Typescript's strong typing system. 
    I showcased my adeptness not only in Typescript's core features like interfaces and types 
    but also in handling React events seamlessly.`,
    tags: ["react", "typescript"],
    largeImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/todoLarge.png?t=2023-12-31T02%3A46%3A23.095Z",
    largeAlt: "a large image of the easy todo website",
    smallImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/todoSmall.png?t=2023-12-31T02%3A46%3A07.134Z",
    smallAlt: "a mobile view of the easy todo website",
    fullImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/todoFull.png?t=2024-01-06T12%3A51%3A19.348Z",
    fullAlt: "a full view of the easy todo website",
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
    tags: [
      "SvelteKit",
      "Node.js",
      "Express",
      "Supabase",
      "PostgresSQL",
      "Netlify",
    ],
    largeImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/kindnessLarge.png?t=2023-12-31T02%3A46%3A39.869Z",
    largeAlt: "a large image of the kindness website",
    smallImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/kindnessSmall.png?t=2023-12-31T02%3A46%3A32.201Z",
    smallAlt: "a mobile view of the kindness website",
    fullImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/beKindFull.png?t=2024-01-06T12%3A49%3A57.550Z",
    fullAlt: "a full view of the kindness website",
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
    tags: ["React", "Firebase", "Responsive Design", "Restful APIs"],
    largeImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/holoLarge.png?t=2023-12-31T02%3A46%3A55.833Z",
    largeAlt: "a large image of the holoscript website",
    smallImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/holoSmall.png?t=2023-12-31T02%3A46%3A48.152Z",
    smallAlt: "a mobile view of the holoscript website",
    fullImg:
      "https://edeafcyjsgyuuvzwlgar.supabase.co/storage/v1/object/public/images/holoFull.png?t=2024-01-06T12%3A50%3A45.237Z",
    fullAlt: "a full view of the holoscript website",
    live: "https://sagelyyy.github.io/holoscript/",
    repo: "https://github.com/Sagelyyy/holoscript",
    id: nanoid(),
  },
];
