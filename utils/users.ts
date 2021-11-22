export interface User {
  name: string;
  techs: string[];
  email: string;
  phone: string;
  image: string;
}

export function getUsers() {
  return users;
}

const users: User[] = [
  {
    name: "Kethellen Tayná",
    email: "kethellenrl@gmail.com",
    phone: "(31) 971331964",
    techs: [
      "python",
      "java",
      "devops",
      "c#",
      ".NET",
      "database",
      "ux/ui design",
    ],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912145273466282024/unknown.png",
  },
  {
    name: "Gabriel Saliba",
    email: "gabriel.saliba.179@gmail.com",
    phone: "(31) 971331964",
    techs: ["python", "java", "react", "node", "html", "scrum", 'git', 'kotlin'],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912061096897163284/pp.jpg",
  },
  {
    name: "Jhonata Lopes",
    email: "jhonata@gmail.com",
    phone: "(31) 971331964",
    techs: ["devops", "testing", "quality", "c#", ".NET", "database"],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912146064298111006/unknown.png",
  },
];
