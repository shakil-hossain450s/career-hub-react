import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import SectionHeading from "../SectionHeading/SectionHeading";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filterText => {
        if(filterText === "all"){
            setDisplayJobs(appliedJobs);
        } else if(filterText === "remote"){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite.toLowerCase() === "remote");
            setDisplayJobs(remoteJobs);
        } else if(filterText === "onsite"){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite.toLowerCase() === "onsite");
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                jobApplied.push(job);
            }
            setAppliedJobs(jobApplied); 
            setDisplayJobs(jobApplied);
        }
    }, [jobs])

    return (
        <div>
            <SectionHeading heading={"Applied Jobs"}></SectionHeading>
            <div className="max-w-5xl mx-auto">
                <div className="mb-8 flex justify-end">
                    <details className="dropdown">
                        <summary className="btn m-1">Filter By</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
                            <li onClick={() => handleJobsFilter("remote")}><a>Remote</a></li>
                            <li onClick={() => handleJobsFilter("onsite")}><a>onsite</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    {
                        displayJobs.map(job => <AppliedJobsCard
                            key={job.id}
                            job={job}
                        ></AppliedJobsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;