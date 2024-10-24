import BannerImage from "../../assets/images/user.png"
import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImage}
                    className="lg:w-1/2 -mb-4 rounded-lg" />
                <div className="lg:w-1/2 mt-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-normal lg:leading-[60px]">
                        One Step <br /> Closer To Your <br />
                        <span className="text-[#7E90FE]"> Dream Job</span>
                    </h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <Button btnName={"Get Started"}></Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;