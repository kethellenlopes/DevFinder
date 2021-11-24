

let techColors: { [id: string]: string } = {
  python: "#F7F48B",
  react: "#70A1D7",
  java: "#F47C7C",
  ruby: "#F47C7C",
  "c#": "#B4A5D1",
  "c++": "#B4A5D1",
  c: "#B4A5D1",
  vue: "#80BFA0",
  javascript: "#F7F48B",
  html: "#F47C7C",
  css: "#70A1D7",
  go: "#70A1D7",
  angular: "#F47C7C",
  php: "#70A1D7",
  kotlin: "#B4A5D1",
  perl: "#B4A5D1",
  ".net": "#B4A5D1",
  typescript: "#70A1D7",
  swift: "#F47C7C",
  node: "#80BFA0",
  quality: "#80BFA0",
  testing: "#F7F48B",
  "ux/ui design": "#80BFA0",
  database: "#F47C7C",
  scrum: "#80BFA0",
};

let techsList: Tech[] = [];
for (let [key] of Object.entries(techColors)) {
  techsList.push(
    {id: key, item: key}
  )
}

export default techsList;
export { techColors };

interface Tech {
  item: string,
  id: string
}
