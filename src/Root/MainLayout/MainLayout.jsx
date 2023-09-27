import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu, AiFillCloseSquare } from 'react-icons/ai';

import { useState } from "react";


const MainLayout = () => {
    const [tog, settog] = useState(false)
    return (
        <div>
            <div className="container mx-auto md:mt-12 mt-4 mb-28 ml-12">
                <div onClick={() => settog(!tog)} className="md:hidden">
                    {
                        tog ? <AiFillCloseSquare className="text-2xl "></AiFillCloseSquare> :
                            <AiOutlineMenu className="text-2xl mb-4"></AiOutlineMenu>
                    }
                </div>
                <div className={`md:flex justify-between items-center
                ${tog ? '' : 'hidden'}
                `}>
                    <div>
                        <img src="/Logo.png" alt="" />
                    </div>
                    <div className="flex gap-12 my-4">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] border-[#FF444A] border-b-2 " : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] border-[#FF444A] border-b-2 " : ""
                            }
                        >
                            Donation
                        </NavLink>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] border-[#FF444A] border-b-2 " : ""
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
        </div>
    );
};

export default MainLayout;