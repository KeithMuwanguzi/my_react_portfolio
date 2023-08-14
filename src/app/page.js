import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import keith from '../../public/keith.jpg';

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-sm'>DevelopedByKeith</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-sm'/>
            </li>
            <li className='text-sm'><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-2 rounded-md ml-3' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='flex justify-center relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden hover:rounded-lg cursor-pointer'>
          <Image src={keith} layout=''/>
        </div>
        <div className='text-center py-5 px-5'>
          <h2 className='font-medium py-2 text-teal-700 text-4xl'>
            Muwanguzi Keith Jonathan
          </h2>
          <h3 className='py-2 text-2xl'>
            Developer and Designer
          </h3>
          <p className='text-md py-5 text-left text-gray-800'>
            I am an extroverted introvert, almost an open book but entirely a closed on. 
            I love development, I would do this even if it yielded no money. 
            This is therapy for my soul and fuel for my spirit. This is the closest you will
            get to know me.
          </p>
        </div>
        <div className='flex justify-center gap-16 text-center px-5'>
          <AiFillTwitterCircle className='text-blue-500 text-2xl'/>
          <AiFillLinkedin className='text-blue-900 text-2xl'/>
          <AiFillYoutube className='text-red-500 text-2xl'/>
        </div>
      </section>
      <section className='mt-10'>
        <div>
          <h3 className='text-xl px-5'>
            Services Offered
          </h3>
        </div>
      </section>

    </main>
  )
}
