import images from '../../assets/img';
const AppImage = () => {
    return (
        <section className="container relative mx-auto mt-12 md:pt-20">
            <div className="absolute left-1/2 top-1/2 flex w-[450px] -translate-x-2/3 -translate-y-[40%] items-center justify-center pl-20 md:w-[550px]">
                <img src={images.appImg} alt="phone app screens" />
            </div>
        </section>
    );
};

export default AppImage;
