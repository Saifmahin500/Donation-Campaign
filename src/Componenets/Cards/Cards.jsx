import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards,setCards] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div>
            <h3>Cards : {cards.length}</h3>
            <div className="grid  grid-cols-4 gap-5">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;