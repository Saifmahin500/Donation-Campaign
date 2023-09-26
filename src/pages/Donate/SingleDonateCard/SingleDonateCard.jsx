

const SingleDonateCard = ({ card }) => {
    const { id, title, image_url, category, category_bg, card_bg, text_button_bg,price } = card;
    return (
        <div className="flex items-center w-[550px] h-[200px] " style={{background :card_bg}}>
            <div>
            <figure><img className="w-[220px] h-[200px] " src={image_url} alt="Shoes" /></figure>
            </div>
            <div className="p-5">
                <button className="p-1 font-medium  border rounded " style={{background :category_bg, color:text_button_bg}}>{category}</button>
                <h2 className="card-title text-xl font-semibold" >
                    {title}
                </h2>
                <p style={{color  :text_button_bg}} className="font-bold">{price}</p>
                <button className="btn mt-6 text-white" style={{background :text_button_bg}}>View Details</button>
            </div>

        </div>
    );
};

export default SingleDonateCard;