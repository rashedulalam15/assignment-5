import BannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex container mx-auto items-center'>
            <div className='w-1/2 space-y-10'>
              <h1 className='text-5xl font-bold'>Build Your Ideal <br />
              <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
              </h1>
               <p className='text-[#475569]'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
                <div className='flex gap-3'>
               <button className='btn bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white'>Explore Technologies</button>
               <button className='btn px-10 text-[#475569]'>Learn More</button>
                </div>
            </div>
            <div className='w-1/2'>
            <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;