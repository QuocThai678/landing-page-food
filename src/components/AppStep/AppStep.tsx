import images from '../../assets/img';
const AppStep = () => {
    return (
        <section className="mt-80">
            <div className="container mx-auto px-4">
                <hr className="mx-auto h-0.5 w-4/5 bg-gray-200 md:w-2/5" />
                <h2 className="py-10 text-center text-4xl font-semibold">How the app works</h2>
                <div className="flex flex-col items-center justify-evenly space-y-10 py-10 md:flex-row">
                    <img src={images.app1} alt="app-screen" />

                    <div className="text-center md:text-left">
                        <span className="font-semibold text-red-500">Creat an account</span>
                        <h2 className="max-w-md py-5 text-4xl font-bold leading-relaxed text-blue-900">
                            Create/login to an existing account to get started
                        </h2>
                        <p className="mx-auto max-w-sm text-xl font-light text-gray-500 md:mx-0">
                            An account is created with your email and a desired password
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <hr className="mx-auto h-0.5 w-4/5 bg-gray-200 md:w-2/5" />
                <h2 className="py-10 text-center text-4xl font-semibold">How the app works</h2>
                <div className="flex flex-col items-center justify-evenly space-y-10 py-10 md:flex-row">
                    <img src={images.app2} alt="app-screen" className="md:order-2" />

                    <div className="text-center md:order-1 md:text-left">
                        <span className="font-semibold text-red-500">Creat an account</span>
                        <h2 className="max-w-md py-5 text-4xl font-bold leading-relaxed text-blue-900">
                            Create/login to an existing account to get started
                        </h2>
                        <p className="mx-auto max-w-sm text-xl font-light text-gray-500 md:mx-0">
                            An account is created with your email and a desired password
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <hr className="mx-auto h-0.5 w-4/5 bg-gray-200 md:w-2/5" />
                <h2 className="py-10 text-center text-4xl font-semibold">How the app works</h2>
                <div className="flex flex-col items-center justify-evenly space-y-10 py-10 md:flex-row">
                    <img src={images.app3} alt="app-screen" />

                    <div className="text-center md:text-left">
                        <span className="font-semibold text-red-500">Creat an account</span>
                        <h2 className="max-w-md py-5 text-4xl font-bold leading-relaxed text-blue-900">
                            Create/login to an existing account to get started
                        </h2>
                        <p className="mx-auto max-w-sm text-xl font-light text-gray-500 md:mx-0">
                            An account is created with your email and a desired password
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppStep;
