import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateCard } from "../../ulility/localStroage";


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
           <h2>this is donate page : {donateItem.length}</h2>
           
        </div>
    );
};

export default Donate;