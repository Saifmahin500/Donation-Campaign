import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../ulility/localStroage";
import SingleDonateCard from "./SingleDonateCard/SingleDonateCard";


const Donate = () => {
    const [donateItem,SetDonateItem] = useState([])
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
          <div className="grid grid-cols-2 gap-10 ">
          {
            donateItem.map(card => <SingleDonateCard key={card.id} card={card}></SingleDonateCard>)
           }
          </div>
           
        </div>
    );
};

export default Donate;