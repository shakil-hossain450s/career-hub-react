import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import Button from "../Button/Button";
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(j => j.id === parseInt(id));
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information: { phone, email, address } } = job;

    const handleApplyJob = () => {
        saveJobApplication(id);
    }

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-10 mb-24">Job Details</h2>
            <div className="grid md:grid-cols-6 gap-6">
                <div className="md:col-span-4 space-y-6">
                    <h3 className="text-[#757575] font-medium"><span className="text-[#1A1919] font-extrabold">Job Description: </span> {job_description}</h3>
                    <h3 className="text-[#757575] font-medium"><span className="text-[#1A1919] font-extrabold">Job Responsibility: </span> {job_responsibility}</h3>

                    <h3 className="text-[#1A1919] font-extrabold">Educational Requirements:</h3>
                    <p className="text-[#757575] font-semibold">{educational_requirements}</p>
                    <h3 className="text-[#1A1919] font-extrabold">Experiences::</h3>
                    <p className="text-[#757575] font-semibold">{experiences}</p>
                </div>
                <div className="md:col-span-2">
                    <div style={{
                        background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)"
                    }} className="rounded-lg p-6">
                        <h3 className="font-extrabold">Job Details</h3>
                        <div className="border-2 my-4"></div>
                        <div className="space-y-4">
                            <p className='flex gap-2'>
                                <AiOutlineDollarCircle className="text-[#7E90FE]" size={20}></AiOutlineDollarCircle>
                                <span className='font-semibold text-[#757575]'>Salary: {salary} (Per Month)</span>
                            </p>
                            <p className='flex gap-2'>
                                <IoCalendarOutline className="text-[#7E90FE]" size={20}></IoCalendarOutline >
                                <span className='font-semibold text-[#757575]'>Job Title: {job_title}</span>
                            </p>
                        </div>
                        <h3 className="font-extrabold mt-8">Contact Information</h3>
                        <div className="border-2 my-4"></div>
                        <div className="space-y-4">
                            <p className='flex gap-2'>
                                <CiPhone className="text-[#7E90FE]" size={20}></CiPhone>
                                <span className='font-semibold text-[#757575]'>Phone: {phone}</span>
                            </p>
                            <p className='flex gap-2'>
                                <MdOutlineMailOutline className="text-[#7E90FE]" size={20}></MdOutlineMailOutline >
                                <span className='font-semibold text-[#757575]'>Email: {email}</span>
                            </p>
                            <p className='flex gap-2'>
                                <MdOutlineLocationOn className="text-[#7E90FE] text-[32px]"></MdOutlineLocationOn >
                                <span className='font-semibold text-[#757575]'>Address: {address}</span>
                            </p>
                        </div>
                    </div>
                    <div onClick={handleApplyJob} className="mt-6">
                        <Button btnName={"Apply Now"} widthFull="w-full"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;