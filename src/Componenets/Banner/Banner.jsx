
const Banner = () => {
    return (
            <div className="text-center w-full h-[600px] flex flex-col justify-center items-center">
                {/* <img src="https://i.ibb.co/4FdWBT5/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" /> */}
            <h2 className="text-5xl font-bold my-10">I Grow By Helping People In Need</h2>
            <div className="form-control ">
                <div className="input-group flex justify-center">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-secondary">
                    Search
                    </button>
                </div>
            </div>
            </div>
        
    );
};

export default Banner;