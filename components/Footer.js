const Footer = () => (
  <footer>
    <div className='container mx-auto xl:px-0 md:px-4 lg:px-8 py-10 text-lg'>
      <ul className='flex text-sm font-semibold'>
        <li className='mr-8'> About</li>
        <li className='mr-8'>Blog</li>
        <li className='mr-8'>Podcast</li>
        <li className='mr-8'>Privacy</li>
        <li className='mr-8'>Terms</li>
        <li className='mr-8'>Affiliates</li>
      </ul>
      <hr className='border-black my-8' />
      <div className='flex justify-between'>
        <div className='w-1/2 pr-10'>
          <p className='mb-8 text-sm font-bold'>ABOUT US</p>
          <p>
            Transistor provides podcast hosting and analytics for thousands of
            organizations, brands, and creatives around the world.
          </p>
          <p>Learn how to start a podcast →.</p>
        </div>
        <div className='w-1/2 pl-10 flex  justify-between'>
          <div className='w-4/12'>
            <p className='mb-8 text-sm font-bold'> CONTACT</p>
            <p>support@transistor.fm</p>
          </div>
          <div className='w-4/12'>
            <p className='mb-8 text-sm font-bold'>WE PROUDLY SUPPORT</p>
            <img src='./images/dark.png' alt='' />
          </div>
        </div>
      </div>
      <p className='text-xs my-8'>
        © 2020 Transistor Inc. All rights reserved.
      </p>
    </div>

    <style jsx>{`
footer{
    background-color: #fbc75d;
    color:black
`}</style>
  </footer>
);

export default Footer;
