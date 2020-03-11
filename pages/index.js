import Header from "../components/Header";
import Footer from "../components/Footer";

import Banner from "../components/Banner";
import Learn from "../components/Learn";

const Home = () => (
  <>
    <div className='container px-3 md:px-4 mx-auto xl:px-4 lg:px-8 bg-tran-dark'>
      <Header title='Transistor - podcast hosting for creatives, brands, professionals' />
      <Banner />
      <div className=''>
        <div className='text-center lg:pt-16'>
          <h2 className='text-3xl md:text-5xl font-semibold'>
            Start as many podcasts as you'd like
          </h2>
          <p className='text-base md:text-2xl'>
            We don't charge you more for creating additional podcasts.
          </p>
          <Learn />
        </div>
        <div className=' max-w-4xl mx-auto'>
          <div
            className='flex justify-center mt-16 relative '
            style={{ "padding-bottom": "56%" }}
          >
            <iframe
              width='896'
              height='504'
              className='absolute h-full w-full '
              src='https://www.youtube.com/embed/hUugNVgsXvk'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <style jsx>{`
          iframe {
            border-radius: 0.5rem;
          }
        `}</style>
      </div>

      <div className='text-center mt-16 mx-auto w-4/5 relative'>
        <div>
          <h2 className=' text-3xl md:text-5xl mb-8 font-semibold'>
            Publish your podcast everywhere
          </h2>
          <p className='text-base md:text-2xl max-w-2xl mx-auto'>
            We help you distribute to Apple Podcasts, Spotify, Google Podcasts,
            Overcast, Pocket Casts, and many more!
          </p>
          <Learn />
        </div>
        <img
          className='mx-auto mt-8 lg:max-w-2xl'
          src='./images/publish-anywhere.png'
          alt=''
        />
      </div>

      <div className='text-center mt-16 mx-auto w-4/5'>
        <div>
          <h2 className=' text-3xl md:text-5xl mb-8 font-semibold'>
            How does this sound?
          </h2>
          <p className='text-base md:text-2xl max-w-2xl mx-auto'>
            Embed the podcast player on your website.
          </p>
          <Learn text='VIEW MORE EXAMPLES' />
        </div>
        <iframe
          class='max-w-2xl mx-auto'
          src='https://share.transistor.fm/e/rework/latest/dark'
          width='100%'
          height='180'
          frameborder='0'
          scrolling='no'
          seamless='true'
          style={{ width: "100%", height: "180" }}
        ></iframe>
      </div>

      <div className='text-center mt-16 mx-auto  lg:w-4/5'>
        <div>
          <h2 className=' text-3xl md:text-5xl mb-8 font-semibold'>
            View detailed podcast analytics
          </h2>
          <p className='text-base md:text-2xl max-w-2xl mx-auto'>
            See your average downloads per episode, popular podcast apps, number
            of subscribers, trends.
          </p>
          <Learn />
        </div>
        <img
          className='mx-auto mt-8 xs:max-w-4xl'
          src='./images/analytics.png'
          alt=''
        />
      </div>

      <div className='text-center mt-16 mx-auto '>
        <div>
          <h2 className=' text-3xl md:text-5xl mb-8 font-semibold'>
            Who uses Transistor for their podcast?
          </h2>
          <p className='text-base md:text-2xl max-w-2xl mx-auto'>
            Creatives, businesses, and professional podcasters trust Transistor
            with their audio hosting and analytics.
          </p>
          <Learn />
        </div>
        <div className='w-full'>
          <div className='flex flex-col  sm:flex-row mb-2 sm:h-56 md:h-64 overflow-hidden'>
            <div className='sm:w-1/2 mr-l  relative overflow-hidden'>
              <img
                className='sm:h-full lg:h-auto'
                src='./images/mess.jpg'
                alt=''
              />
              <p className='absolute bottom-0 right-0 border-0 text-sm bg-gray-800 py-2 px-3 rounded-tl  '>
                Mess
              </p>
            </div>
            <div className='sm:w-1/2 ml-1 mt-5 sm:mt-0  relative overflow-hidden'>
              <img
                className='sm:h-full lg:h-auto'
                src='./images/lew.jpg'
                alt=''
              />
              <p className='absolute bottom-0 right-0 border-0 text-sm bg-gray-800 py-2 px-3 rounded-tl  '>
                Lew Later
              </p>
            </div>
          </div>
          <div className='hidden sm:flex flex mb-2 sm:h-56 md:h-64 overflow-hidden'>
            <div className='w-1/3 mr-1  relative overflow-hidden'>
              <img
                className='sm:h-full lg:h-auto'
                src='./images/collen.jpg'
                alt=''
              />
              <p className='absolute bottom-0 right-0 border-0 text-sm bg-gray-800 py-2 px-3 rounded-tl  '>
                Colleen Pellissier
              </p>
            </div>
            <div className='w-1/3 mr-1  mr-l  relative overflow-hidden'>
              <img
                className='sm:h-full lg:h-auto'
                src='./images/bara.jpg'
                alt=''
              />{" "}
              <p className=' absolute bottom-0 right-0 border-0 text-sm bg-gray-800 py-2 px-3 rounded-tl  '>
                Bara Við
              </p>
            </div>
            <div className='w-1/3 mr-l  relative overflow-hidden'>
              <img
                className='sm:h-full lg:h-auto'
                src='./images/ashley.jpg'
                alt=''
              />{" "}
              <p className='absolute bottom-0 right-0 border-0 text-sm bg-gray-800 py-1 px-3 rounded-tl  '>
                Ashley Baxter
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center my-16 mx-auto '>
        <h2 className=' text-3xl md:text-5xl mb-8 font-semibold'>
          Try podcasting on Transistor for free
        </h2>
        <a
          className='rounded-full border py-3 px-6  text-lg  hover:bg-white hover:text-black'
          href='/'
        >
          Start a 14-day trial
        </a>
      </div>
    </div>{" "}
    <Footer />
  </>
);

export default Home;
