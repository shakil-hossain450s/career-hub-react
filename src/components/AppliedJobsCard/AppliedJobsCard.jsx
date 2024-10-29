import PropTypes from "prop-types";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import Button from "../Button/Button";

const AppliedJobsCard = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;

    return (
        <div className="card card-side border border-[#E8E8E8] mb-6 p-6">
            <figure className="bg-[#F4F4F4] w-[240px] flex justify-center items-center p-10 rounded">
                <img
                    src={logo}
                    alt="Movie" />
            </figure>
            <div className="flex items-center justify-between flex-1">
                <div className="card-body py-0">
                    <h2 className="card-title text-[#474747] font-extrabold">{job_title}</h2>
                    <p className="text-2xl font-semibold text-[#757575]">{company_name}</p>
                    <div className='flex gap-4'>
                        <button className='btn btn-sm border border-[#7E90FE] px-5 bg-transparent rounded hover:bg-transparent hover:border-[#7E90FE] text-[#7E90FE] font-extrabold'>{remote_or_onsite}</button>
                        <button className='btn btn-sm border border-[#7E90FE] px-5 bg-transparent rounded hover:bg-transparent hover:border-[#7E90FE] text-[#7E90FE] font-extrabold'>{job_type}</button>
                    </div>
                    <div className='mt-4 mb-6 flex items-center gap-6 '>
                        <p className='flex items-center gap-2 flex-grow-0 text-[#757575]'>
                            <GrLocation size={24}></GrLocation>
                            <span className='text-xl font-semibold'>{location}</span>
                        </p>
                        <p className='flex items-center gap-2 text-[#757575]'>
                            <AiOutlineDollarCircle size={24}></AiOutlineDollarCircle>
                            <span className='text-xl font-semibold'>{salary}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <Button btnName={"View Details"}></Button>
                </div>
            </div>
        </div>
    );
};

AppliedJobsCard.propTypes = {
    job: PropTypes.object
}

export default AppliedJobsCard;