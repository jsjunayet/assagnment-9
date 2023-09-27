import { Link } from "react-router-dom";


const DonationCard = ({ item }) => {
    console.log(item)
    return (
        <div className="">
            <div style={{ background: `${item.card_bg}` }} className="md:flex gap-5 items-center">
                <div>
                    <img className="w-full" src={item.picture} alt="" />
                </div>
                <div>
                    <div style={{ color: `${item.text_color}` }}>
                        <button style={{ background: `${item.category_bg}` }} className="px-3 py-1 rounded mt-4">{item.category}</button>
                    </div>
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p style={{ color: `${item.button_bg}` }} className="py-2">{item.price}</p>
                    <Link to="/donation" style={{ background: `${item.button_bg}` }} className="text-white px-3 py-2 rounded">View Details</Link>
                </div>

            </div>
        </div >
    );
};

export default DonationCard;