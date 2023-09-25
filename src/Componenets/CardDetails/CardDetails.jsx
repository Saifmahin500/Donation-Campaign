import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)

    const card = cards.find(card => card.id === idInt)

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
            <img className="w-[1320px] h-[700px] rounded-md "  src={card.image_url}
            alt="Shoes" />
            <button className="btn text-white " style={{background : card.text_button_bg}}>Donate{card.price}</button>
            </div>
            <div>
            <h2 className="text-4xl font-bold my-5">{card.title}</h2>
            <p>There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
            </div>
        </div>
       


    //     <div className="card bg-base-100 shadow-xl ">
    //     <figure>
    //         <img src={card.image_url} alt="Shoes" />
    //         </figure>
    //     <div className="card-body">
    //         
    //         <p></p>
            
    //     </div>
    // </div>
    );
};

export default CardDetails;