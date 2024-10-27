import PropTypes from 'prop-types';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='border border-[#E8E8E8] rounded-lg p-6'>
            <figure className='mb-6'>
                <img src={logo} alt="" />
            </figure>
            <div>
                <h2 className='text-2xl font-extrabold text-[#474747] mb-2'>{job_title}</h2>
                <p className='text-[#757575] font-semibold mb-4 text-xl'>{company_name}</p>
                <div className='flex gap-4'>
                    <button className='btn btn-sm border border-[#7E90FE] px-5 bg-transparent rounded hover:bg-transparent hover:border-[#7E90FE] text-[#7E90FE] font-extrabold'>{remote_or_onsite}</button>
                    <button className='btn btn-sm border border-[#7E90FE] px-5 bg-transparent rounded hover:bg-transparent hover:border-[#7E90FE] text-[#7E90FE] font-extrabold'>{job_type}</button>
                </div>
                <div className='mt-4 mb-6 flex items-center gap-6 '>
                    <p className='flex items-center gap-2 text-[#757575]'>
                        <GrLocation size={24}></GrLocation>
                        <span className='text-xl font-semibold'>{location}</span>
                    </p>
                    <p className='flex items-center gap-2 text-[#757575]'>
                        <AiOutlineDollarCircle size={24}></AiOutlineDollarCircle>
                        <span className='text-xl font-semibold'>{salary}</span>
                    </p>
                </div>
                <Link to={`/job/${id}`}>
                    <Button btnName={"View Details"}></Button>
                </Link>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;