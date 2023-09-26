import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import Card from "./Card";

const Home = () => {
    const Cards = useLoaderData();
    return (
        <div>
            <Bannar></Bannar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
                {
                    Cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;