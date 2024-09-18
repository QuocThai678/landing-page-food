import images from '../../assets/img';
const Banner = () => {
    return (
        <section>
            <div
                className="flex h-[620px] w-full flex-col items-center justify-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${images.banner})` }}
            >
                <div className="z-20 text-center text-white">
                    <p className="mb-5 text-xl">Food app</p>
                    <h2 className="mb-5 max-w-2xl text-4xl font-bold md:text-5xl md:leading-relaxed">
                        Why stay hungry when you can order form Bella Onojie
                    </h2>
                    <p className="mb-5 text-xl font-light">Download the bella onoje's food app now on</p>

                    <div className="flex justify-center space-x-4">
                        <button className="rounded-full border border-transparent bg-red-500 px-10 py-3 transition-all hover:border-white hover:bg-transparent">
                            Playstore
                        </button>
                        <button className="rounded-full border border-white bg-transparent px-10 py-3 transition-all hover:border-transparent hover:bg-red-500">
                            Appstore
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
