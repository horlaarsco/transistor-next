const Banner = () => (
  <div className='lg:my-32 md:my-6 lg:ml-6 xs:ml-0'>
    <div className='relative xl:mx-24 lg:mr-0   pb-8 lg:pt-12 '>
      <div className='text-center lg:text-left xl:w-3/5 lg:w-4/5'>
        <h1 className='lg:text-6xl md:text-5xl leading-tight'>
          Your podcast's
          <span className='block like-gold '> publishing platform</span>
        </h1>
        <p className='text-2xl lg:w-9/12 xl:w-4/5'>
          Record your audio and upload it to Transistor.{" "}
        </p>
        <p className='text-2xl mx-auto lg:mx-0 lg:w-9/12 md:w-5/6 xl:w-4/5'>
          We'll help you distribute your podcast to Apple Podcasts, Spotify, and
          Google Podcasts.
        </p>
        <div className=' mt-10'>
          <a
            className='rounded-full border py-2 px-4 text-lg hover:bg-white hover:text-black '
            href='/'
          >
            Sign Up
          </a>
        </div>
      </div>

      <img
        className='lg:hidden w-full rounded-lg mt-5'
        src='./images/studio.jpg'
        alt=''
      />
      <div className='hidden lg:flex absolute overflow-hidden banner '>
        <img
          className=' rounded-lg'
          src='./images/studio.jpg'
          alt=''
          width='900px'
        />

        <style jsx>{`
          .banner {
            right: 0;
            left: 150px;

            top: -90px;
            z-index: -1;
          }
        `}</style>
      </div>
    </div>
  </div>
);

export default Banner;
