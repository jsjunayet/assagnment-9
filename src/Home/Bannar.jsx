

const Bannar = () => {
    return (
        <div className="my-2 mb-14">
            <div className="hero md:min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url("/Bannar.png")' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" md:mb-72 mb-52">
                        <h1 className="text-[#0B0B0B] md:text-5xl text-3xl font-bold z-30 text-center md:pt-60 pt-40">I Grow By Helping People In Need</h1>
                        <div className="form-control">
                            <div className="input-group md:ml-44 ml-12 mt-10">
                                <input type="text" placeholder="Search…" className="input input-bordered md:w-96 w-52" />
                                <button className="btn btn-square w-20 bg-[#FF444A] text-white">
                                    search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;