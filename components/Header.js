import Head from "next/head";

const Header = props => (
  <header className=' sticky top-0'>
    <Head>
      <title>{props.title}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' href='/style.css' />
      <link rel='stylesheet' href='/styles.css' />
    </Head>
    <div className='hidden md:flex md:flex-row items-center py-10 text-sm'>
      <img className='w-40 mr-4 lg:mr-8' src='/images/logo.svg' alt='' />
      <nav className='flex items-center w-full justify-between'>
        <ul className='flex items-center ml-6'>
          <li className='mr-4 lg:mr-8'>Pricing</li>
          <li className='mr-4 lg:mr-8'>How podcasting works</li>
          <li className='mr-4 lg:mr-8'>Examples</li>
        </ul>
        <ul className='flex items-center mr-0'>
          <li className='mr-4 lg:mr-8'>Log In</li>
          <li className=' border rounded py-1 px-4'>Sign Up</li>
        </ul>
      </nav>
    </div>

    <div className='md:hidden justify-between flex flex-row items-center py-10 text-sm '>
      <img className='w-40 mr-4 lg:mr-8' src='/images/logo.svg' alt='' />
      ham
    </div>
    <nav className='md:hidden'>
      <ul className='flex flex-col items-center'>
        <li className='mt-3'>Pricing</li>
        <li className=' mt-3'>How podcasting works</li>
        <li className=' mt-3'>Examples</li>

        <li className=' mt-3'>Log In</li>
        <li className='mt-3 border rounded py-1 px-4'>Sign Up</li>
      </ul>
    </nav>

    <style jsx>{`
      header {
        background-color: rgba(12, 24, 36, 0.85);
        z-index: 1000;
        backdrop-filter: blur(8px);
      }
    `}</style>
  </header>
);

export default Header;
