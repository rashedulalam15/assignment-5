import footerLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='mt-20'>
        <div className='grid grid-cols-4 gap-4 container mx-auto'>
            <div className='space-y-3'>
             <img src={footerLogo} alt="" />
             <p className='text-xs text-[#64748B]'>Curated tools, technologies, and resources for developers building
modern software.</p>
               <ul className='flex gap-2 text-sm text-[#475569]'>
                <li><a href="">Github</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">LinkedIn</a></li>
               </ul>
            </div>
            <div className='space-y-3'>
                <h4 className='font-semibold'>Product</h4>
                <div className='space-y-2 text-xs text-[#64748B]'>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
                </div>
            </div>
            <div className='space-y-3'>
                <h4 className='font-semibold'>Company</h4>
                <div className='space-y-2 text-xs text-[#64748B]'>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
                </div>
            </div>
            <div  className='space-y-3'>
                <h4 className='font-semibold'>Legal</h4>
                <div className='space-y-2 text-xs text-[#64748B]'>
                <p >Privacy Policy</p>
                <p >Terms of Service</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center my-4 container mx-auto'>
        <p className='text-xs text-[#64748B]'>© 2026 Dev Stack. All rights reserved.</p>
        <ul className='flex gap-2 text-xs text-[#64748B]'>
           <li><a href="">Privacy</a></li>
           <li><a href="">Terms</a></li>
        </ul>
        </div>
        </div>
    );
};

export default Footer;