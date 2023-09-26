import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../ulility/localStroage";
import SingleDonateCard from "./SingleDonateCard/SingleDonateCard";


const Donate = () => {
    const [donateItem,SetDonateItem] = useState([])
    const [cardLength, setCardLength] =useState(4)
    const donate = useLoaderData();
    useEffect( () => {
        const storeDonateId = getStoredDonateCard();
        if (donate.length > 0) {
            const donateItem = donate.filter(card => storeDonateId.includes(card.id));

            SetDonateItem(donateItem);
            
        }

    },[])
    return (
        <div>
          <div className="grid md:grid-cols-2 gap-10 ">
          {
            donateItem.slice(0 , cardLength).map(card => <SingleDonateCard key={card.id} card={card}></SingleDonateCard>)
           }
          </div>
          <div className={cardLength === donateItem.length && "hidden"}>
         <div className="text-center">
         <button onClick={() => setCardLength(donateItem.length)}
          className="btn btn-success  mt-10">Show All</button>
         </div>
          </div>
           
        </div>
    );
};

export default Donate;