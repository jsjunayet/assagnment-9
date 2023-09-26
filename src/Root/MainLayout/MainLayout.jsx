import { NavLink, Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="container mx-auto mt-12 mb-28">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/Logo.png" alt="" />
                </div>
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-[#FF444A] border-b-2 mr-12" : "mr-12"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-[#FF444A] border-b-2 mr-12" : "mr-12"
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-[#FF444A] border-b-2 mr-12" : "mr-12"
                        }
                    >
                        Statistics
                    </NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;