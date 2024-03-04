import React, { useState } from "react";

const JobsList = ({ jobs, children }) => {
  return <aside className="job-list">{children}</aside>;
};

export default JobsList;
