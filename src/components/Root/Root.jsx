import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="max-w-[1920px] w-82% mx-auto">
            <Header></Header>
            <div className="max-w-[1920px] w-82% mx-auto md:px-10 px-2">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;