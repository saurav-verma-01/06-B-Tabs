import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Jobs from "./components/Jobs";
import JobsList from "./components/JobsList";
import JobData from "./components/JobData";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      alert("Thereis some error while fetching Jobs", err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <Jobs>
          <JobsList />
          <JobData />
        </Jobs>
      )}
    </main>
  );
};

export default App;
