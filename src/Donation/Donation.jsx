import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Link } from "react-router-dom";



const Donation = () => {
    const [Isshow, setIshow] = useState(false)
    const [newcard, setNewcard] = useState([])
    useEffect(() => {
        const conGet = JSON.parse(localStorage.getItem("donate"));
        if (conGet) {
            setNewcard(conGet)
        }
        else {
            console.log("No data avaiable")
        }

    }, [])
    console.log(newcard)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    Isshow ? newcard.map(item => <DonationCard key={item.id} item={item}></DonationCard>)
                        : newcard.slice(0, 4).map(item => <DonationCard key={item.id} item={item}></DonationCard>)

                }
            </div>
            <div className="text-center my-3">

                {
                    newcard.length > 4 &&
                    (Isshow ? '' : <Link onClick={() => setIshow(!Isshow)} className="text-white bg-[#009444] px-3 py-2 rounded-xl ">
                        See All </Link>)
                }

            </div>
        </div >

    );
};

export default Donation;