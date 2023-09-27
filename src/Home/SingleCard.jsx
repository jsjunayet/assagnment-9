import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const SingleCard = () => {
    const [show, setshow] = useState([])
    const { id } = useParams();
    const Cards = useLoaderData();
    useEffect(() => {
        const card = Cards.find((card) => card.id == id)
        setshow(card)
    }, [id, Cards]);
    const handle = () => {
        const emtryArray = [];
        const conGet = JSON.parse(localStorage.getItem("donate"))
        if (!conGet) {
            emtryArray.push(show)
            localStorage.setItem("donate", JSON.stringify(emtryArray))
            swal("Good job!", "added card!", "success");

        }
        else {
            const isexist = conGet.find(item => item.id == id)
            if (!isexist) {
                emtryArray.push(...conGet, show)
                localStorage.setItem("donate", JSON.stringify(emtryArray))
                swal("Good job!", "added card!", "success");
            }
            else {
                swal("NO!", "card duplicate!", "error");
            }

        }



    }

    return (
        <div>
            <div className="mt-10 relative">
                <div className="">
                    <img src={show.picture} alt="" className="w-full" />
                </div>
                <div className="absolute bottom-36  h-36 w-full bg-[#BBB080] opacity-60">
                </div>
                <div className="h-36 relative  bottom-36 left-0">

                    <Link>
                        <button onClick={handle} style={{ background: `${show.button_bg}` }} className="text-white px-6 py-4 rounded ml-10 mt-10 z-10">Donate ${show.price}</button>
                    </Link>
                </div>

                <div className="mb-30 absolute bottom-5">
                    <p className="font-bold text-4xl py-3">{show.title}</p>
                    <p>{show.description}</p>
                </div>
            </div>


        </div>
    );
};

export default SingleCard;