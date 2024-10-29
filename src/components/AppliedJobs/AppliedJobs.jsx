import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import SectionHeading from "../SectionHeading/SectionHeading";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));


            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                jobApplied.push(job);
            }
            setAppliedJobs(jobApplied);
        }
    }, [])

    return (
        <div>
            <SectionHeading heading={"Applied Jobs"}></SectionHeading>
            <div className="max-w-5xl mx-auto">
                <div>
                    {
                        appliedJobs.map(job => <AppliedJobsCard
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