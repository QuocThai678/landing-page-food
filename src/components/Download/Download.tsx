import images from '../../assets/img';

const Download = () => {
    return (
        <section>
            <div
                className="flex h-[620px] w-full items-center justify-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${images.download})` }}
            >
                <div className="text-center text-white">
                    <h2 className="max-w-2xl text-4xl font-bold md:text-5xl md:leading-relaxed">
                        Download the app now
                    </h2>
                    <p className="mb-5 text-xl font-light">
                        Available on your favourite store. Start your premium experience now
                    </p>
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

export default Download;
