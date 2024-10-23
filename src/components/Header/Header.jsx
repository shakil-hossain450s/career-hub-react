import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="font-bold"><NavLink to="/jobs">Jobs</NavLink></li>
        <li className="font-bold"><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li className="font-bold"><NavLink to="/statistic">Statistic</NavLink></li>
        <li className="font-bold"><NavLink to="/blogs">Blog</NavLink></li>
    </>

    return (
        <div className="navbar shadow-md px-10 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-3xl font-extrabold">CareerHub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#7E90FE] text-white hover:bg-[#7E90FE] font-bold px-7">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;