let jobsColors: { [id: string]: string } = {
  estágio: "#F7F48B",
  junior: "#70A1D7",
  pleno: "#F47C7C",
  senior: "#B4A5D1",
  quality: "#80BFA0",
  tester: "#F7F48B",
  devops: "#70A1D7",
  "database administrator": "#F47C7C",
  "scrum master": "#80BFA0",
  "tech lead": "#70A1D7",
  design: "#B4A5D1",
  analista: "#F47C7C",
};

let jobList: Job[] = [];
for (let [key] of Object.entries(jobsColors)) {
  jobList.push({ id: key, item: key });
}

interface Job {
  item: string;
  id: string;
}

export default jobList;
export {jobsColors}