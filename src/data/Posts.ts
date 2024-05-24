interface Author {
  name: string;
  role: string;
  pictureUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface Post {
  id: number;
  Author: Author;
  content: Content[];
  publishedAt: Date;
}

export const posts: Post[] = [
  {
    id: 1,
    Author: {
      name: "Levid Lima",
      role: "Web Developer",
      pictureUrl: "https://www.github.com/DEVLevid.png",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date('2024-05-23 21:00:00'),
  },
  {
    id: 2,
    Author: {
      name: "Jonas Brito",
      role: "Backend Developer",
      pictureUrl: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=50&h=50&q=100&fm=webp",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      { type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 " },
      { type: "link", content: "Acesse e deixe seu feedback 👉 devonlane.design" },
    ],
    publishedAt: new Date('2024-05-24 12:54:00'),
  },
];
