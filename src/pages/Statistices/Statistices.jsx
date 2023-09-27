
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Statistices = () => {
    const priceCards = useLoaderData();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPrices, setTotalPrices] = useState(0);
    // console.log(setTotalPrice);
    console.log(totalPrices);

    useEffect(() => {
        const prices = priceCards.length;
        setTotalPrices(prices);

   

        const storedDonateCard = JSON.parse(localStorage.getItem('Donate-Card'));
        console.log(storedDonateCard);
        if (storedDonateCard) {

            const total =storedDonateCard.length;
            // console.log(total);
            setTotalPrice(total)
        }
        else {
            setTotalPrice(0);
        }
        
    }, [priceCards]);
  

    //pie Chart

    const data = [
        ["Task", 'totalPrices'],
        ["Total Donation", totalPrices - totalPrice],
        ["Your Donation", totalPrice],
    ];

    const options = {
        title: "Your total donation among various organizations",
    };
    return (
        
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"600px"}
        />
   

    );
};

export default Statistices;