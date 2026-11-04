import { useState } from 'react'
import DarkModeToggle from './components/darkModeToggle'
import Footer from './components/footer'
import Div from './components/divider'
import light from './assets/light-wordmark.svg'
import dark from './assets/dark-wordmark.svg' 

function App() {
  return (
    <div className='min-h-screen text-black dark:text-white font-primary flex flex-col'>
      <img className='h-20 md:h-40 lg:h-80 block dark:hidden place-self-center' src={light}/>
      <img className='h-20 md:h-40 lg:h-80 dark:block hidden self-center' src={dark}/>

      <DarkModeToggle />

      <div className='text-center m-10'>
        <h1 className='header-sm md:header-md lg:header-lg'>Nexora tech & media</h1>
        <p className='paragraph-sm md:paragraph-md lg:paragraph-lg'>Your business' key to online success</p>
      </div>

      <Div />

      <div className='h-fit'>
        <h1 className='text-center header-sm md:header-md lg:header-lg'>Our mission</h1>
        <div className='bg-white dark:bg-black mt-5 md:mt-10'>
          <div className='bg-Secondary-200 dark:bg-Secondary-800 card-secondary md:w-[320px] lg:w-[650px] md:ml-10 lg:ml-20 shadow-black/50 dark:shadow-white/30 shadow-md'> 
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg font-bold'>Step 1: Get you an online presence</h2>
            <p className='paragraph-sm md:paragraph-md lg:paragraph-lg font-secondary pt-1'>Once you acquire one of our packages,<br/>
            we’ll work on getting you some sort of<br/>
            media/online presence whether it’s<br/>
            making you a poster, logo, advert or website.</p>
          </div>
          
          <div className='bg-primary-200 dark:bg-primary-800 card-primary ml-auto md:w-[320px] lg:w-[650px] md:mr-10 lg:mr-20 shadow-black/50 dark:shadow-white/30 shadow-md'> 
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg font-bold'>Step 2: Help digitize your workflow</h2>
            <p className='paragraph-sm md:paragraph-md lg:paragraph-lg font-secondary pt-1'>As you get into using the Nexora experience,<br/>
            you may want to use some tools that<br/>
            we'll be working on to make managing your business<br/>
            easier.</p>
          </div>

          <div className='bg-Secondary-200 dark:bg-Secondary-800 card-secondary md:w-[320px] lg:w-[650px] md:ml-10 lg:ml-20 shadow-black/50 dark:shadow-white/30 shadow-md'> 
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg font-bold'>Step 3: Grow your presence together</h2>
            <p className='paragraph-sm md:paragraph-md lg:paragraph-lg font-secondary pt-1'>Once we work together for a while,<br/>
            we can make arrangements for an ad campaign<br/>
            to continue growing your online presence.</p>
          </div>

          <div className='card-primary ml-auto bg-primary-200 dark:bg-primary-800 card-secondary md:w-[320px] lg:w-[650px] md:mr-10 lg:mr-20 shadow-black/50 dark:shadow-white/30 shadow-md'> 
            <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg font-bold'>Step 4: manage more campaigns</h2>
            <p className='paragraph-sm md:paragraph-md lg:paragraph-lg font-secondary pt-1'>The longer you get to work with us,<br/>
            the more you can add to your campaigns<br/>
            combining different types of media into a cohesive<br/>
            campaign marketing campaign.</p>
          </div>
        </div>
      </div>

      <Div />

      <div className='px-5 md:px-10 lg:px-20'>
        <h1 className='header-sm md:header-md lg:header-lg text-center'>OUR SERVICES</h1>
        <h2 className='paragraph-sm md:paragraph-md lg:paragraph-lg mb-5'>• Here are our main services:</h2>
        <ul className='paragraph-sm font-secondary md:paragraph-md lg:paragraph-lg'>
          <li>1. Advert making</li>
          <li>2. Web development</li>
          <li>3. Web hosting</li>
          <li>4. Graphic & design</li>
          <li>5. Brand identity design</li>
          <li>6. Advert making</li>
        </ul>
      </div>

      <Div />

      <div>
        <h1 className='header-sm md:header-md lg:header-lg text-center'>OUR PRODUCTS</h1>
        <h1 className='font-secondary header-sm md:header-md lg:header-lg text-center'>Nexora inventory management coming soon!!</h1>
      </div>

      <Div />

      <Footer />
    </div>
  )
}

export default App
