import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Job from '../Job/Job';
import Button from '../Button/Button';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useState(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <SectionHeading heading={"Featured Jobs"}></SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`grid place-items-center mt-10 ${dataLength === jobs.length && "hidden"}`}>
                <div onClick={() => { setDataLength(jobs.length) }}>
                    <Button btnName={"See All Jobs"}></Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;