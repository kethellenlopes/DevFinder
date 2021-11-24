import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Company {
  name: string;
  location: string;
  email: string;
  jobs: string[];
  image: string;
}

export function getCompanies() {
  return companies;
}

export async function addCompany(name, email, location, jobs, image) {
  companies.push({
    name: name,
    email: email,
    location: location,
    jobs: jobs,
    image: image,
  });
  await AsyncStorage.setItem("companies", JSON.stringify(companies));
}

const companies: Company[] = [
  {
    name: "Google",
    email: "contact@gmail.com",
    jobs: [
      "junior",
      "senior",
      "estágio",
      "tech lead",
      "scrum master",
      "analista",
    ],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912150590254096484/unknown.png",
    location: "São Paulo",
  },
  {
    name: "Facebook",
    email: "contact.facebook@gmail.com",
    jobs: ["junior", "pleno", "devops", "design", "estágio"],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912150945855598653/unknown.png",
    location: "Belo Horizonte",
  },
  {
    name: "TOTVS",
    email: "contato@totvs.com",
    jobs: [
      "junior",
      "pleno",
      "tester",
      "quality",
      "senior",
      "devops",
      "database administrator",
    ],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912151183181877348/unknown.png",
    location: "São Paulo / Rio de Janeiro",
  },
  {
    name: "dti Digital",
    email: "contato@dti.com",
    jobs: [
      "senior",
      "pleno",
      "tester",
      "quality",
      "estágio",
      "devops",
      "scrum master",
    ],
    image:
      "https://cdn.discordapp.com/attachments/713958463180505170/912158815317815317/unknown.png",
    location: "São Paulo / Rio de Janeiro",
  },
];
