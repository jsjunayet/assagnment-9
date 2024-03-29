import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, picture, category, title, category_bg, card_bg
        , text_color } = card

    return (
        <div>
            <Link to={`/card/${id}`}>
                <div className="w-full rounded-lg">
                    <img src={picture} alt="" className="w-full h-48" />
                    <div style={{ background: `${card_bg}` }}>
                        <div style={{ color: `${text_color}` }}>
                            <button style={{ background: `${category_bg}` }} className="px-3 py-1 rounded ml-3 mt-4">{category}</button>
                        </div>
                        <p style={{ color: `${text_color}` }} className="ml-4 mt-2 pb-4">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;