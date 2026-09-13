import BannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row container mx-auto items-center gap-8 px-4'>
            <div className='w-full md:w-1/2 space-y-6 md:space-y-10'>
              <h1 className='text-4xl md:text-5xl font-bold'>Build Your Ideal <br />
              <span className='brand-gradient '>Development Stack</span>
              </h1>
               <p className='text-[#475569]'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
                <div className='flex flex-col sm:flex-row gap-3'>
               <button className='btn brand-button'>Explore Technologies</button>
               <button className='btn px-10 text-[#475569]'>Learn More</button>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
            <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;