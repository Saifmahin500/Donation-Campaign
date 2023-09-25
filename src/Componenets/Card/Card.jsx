import { Link } from "react-router-dom";


const Card = ({card}) => {
    const { id,title, image_url,category,category_bg,card_bg,text_button_bg } = card;

    // const handleAddCard = () =>{
    //     console.log('hello');
    // }

   
    return (
    
          <div >
             <Link to={`/card/${id}`}>
        <div className="card " style={{background :card_bg}}>
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="p-5">
                <button className="p-2 mt-5 font-medium  border rounded " style={{background :category_bg, color:text_button_bg}}>{category}</button>
                <h2 className="card-title text-xl font-semibold" style={{color  :text_button_bg}}>
                    {title}
                </h2>
            </div>

        </div>
        
       </Link>
          </div>
    
    );
};

export default Card;