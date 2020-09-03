import React from "react";
import "./App.css";
import Jobs from "./Jobs";
import fetch from "node-fetch";

const JOB_API_URL = "/api/jobs";

async function fetchJobs(updateCB) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCB(json);

  console.log({ json });
}

function App() {
  const [joblist, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={joblist} />
    </div>
  );
}

export default App;
