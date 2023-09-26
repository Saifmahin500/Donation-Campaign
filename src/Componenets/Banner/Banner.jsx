
const Banner = () => {
    return (
            <div className="mx-auto mb-20">
                <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/4FdWBT5/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)' , backgroundSize: "cover", backgroundRepeat: "no-repeat", }}>
                
                <div style={{backgroundColor: "rgba(255, 265, 255, 0.8 )"}} className="hero-overlay">

                </div>
            
            <div className=" hero-content form-control text-center  flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bold my-10">I Grow By Helping People In Need</h2>
                <div className="input-group flex justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-secondary">
                    Search
                    </button>
                </div>
            </div>
            </div>
            </div>
        
    );
};

export default Banner;