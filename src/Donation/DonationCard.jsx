import { Link } from "react-router-dom";


const DonationCard = ({ item }) => {
    console.log(item)
    return (
        <div className="mt-10">
            <div style={{ background: `${item.card_bg}` }} className="flex gap-5 items-center">
                <div>
                    <img src={item.picture} alt="" />
                </div>
                <div>
                    <span style={{ background: `${item.category_bg}` }}>
                        <button style={{ color: `${item.text_color}` }} className="px-3 py-1 rounded mt-4">{item.category}</button>
                    </span>
                    <p className="text-2xl font-semibold">{item.title}</p>
                    <p style={{ color: `${item.button_bg}` }} className="py-2">{item.price}</p>
                    <Link to="/donation" style={{ background: `${item.button_bg}` }} className="text-white px-3 py-2 rounded">View Details</Link>
                </div>
            </div>
        </div >
    );
};

export default DonationCard;