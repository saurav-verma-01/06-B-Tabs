import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Jobs from "./components/Jobs";
import JobsList from "./components/JobsList";
import JobData from "./components/JobData";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const companies = jobs.map((job) => job.company);
  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <Jobs>
          <JobsList>
            {jobs.map((job, index) => (
              <button
                className={
                  activeIndex === index
                    ? "active-tag company-tag"
                    : "company-tag"
                }
                key={job.company}
                onClick={() => setActiveIndex(index)}
              >
                {" "}
                {/* "active-tag company-tag" */}
                {job.company}
              </button>
            ))}
          </JobsList>
          <JobData activeJob={jobs[activeIndex]} />
        </Jobs>
      )}
    </main>
  );
};

export default App;
