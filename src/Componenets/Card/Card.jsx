import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id,title, image_url, category,category_bg } = card;

    const handleAddCard = () =>{
        console.log('hello');
    }
    return (
    <div onClick={() => handleAddCard()}>
           <Link to={`/card/${id}`}>
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="p-5">
                <button className="p-2 mt-5 font-medium  border rounded border-[#7E90FE]  text-[#7E90FE]">{category}</button>
                <h2 className="card-title text-xl font-semibold">
                    {title}
                </h2>
            </div>

        </div>
       </Link>
    </div>
    );
};

export default Card;