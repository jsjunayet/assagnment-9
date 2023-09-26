

const Bannar = () => {
    return (
        <div className="my-2 mb-14">
            {/* <div className=" h-screen w-full" style={{
                backgroundImage: `url("/Bannar.png")`,
                backgroundPosition: `center`,
                objectFit: `cover`,
                backgroundSize: `cover`,
                opacity: `0.8`,
                zIndex: `1`

            }}>
                <div>
                    <h1 className="text-[#0B0B0B] text-5xl font-bold z-30 text-center pt-60">I Grow By Helping People In Need</h1>
                    <div>
                        <input className="w-96 h-8" type="text" name="" id="" />
                        <button>search</button>
                    </div>
                </div>

            </div > */}
            <div className="hero min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url("/Bannar.png")' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" mb-72">
                        <h1 className="text-[#0B0B0B] text-5xl font-bold z-30 text-center pt-60">I Grow By Helping People In Need</h1>
                        <div className="form-control">
                            <div className="input-group ml-44 mt-10">
                                <input type="text" placeholder="Search…" className="input input-bordered w-96" />
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