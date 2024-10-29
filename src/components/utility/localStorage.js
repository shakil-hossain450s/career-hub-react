import { toast } from "react-toastify";

const getStoredJobApplication = () => {
    const storedJobAppliCation = localStorage.getItem("job_applications");
    if(storedJobAppliCation){
        return JSON.parse(storedJobAppliCation);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobAppliCations = getStoredJobApplication();
    const isExist = storedJobAppliCations.find(jobId => jobId === id);
    if(!isExist){
        storedJobAppliCations.push(id);
        localStorage.setItem("job_applications", JSON.stringify(storedJobAppliCations));
        toast.success("You have applied successfully", {
            autoClose: 2000
        })
    } else{
        toast.error("Already applied", {
            autoClose: 2000
        })
    }
}

export { getStoredJobApplication, saveJobApplication }