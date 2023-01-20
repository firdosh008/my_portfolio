import Button from "../components/button"
import Social from "../components/social"
import {BsPhone} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi'

export default function Contact() {
    return (
      <div id="letstalk" className='p-24 lg:grid lg:grid-col-2 full_about contact'>
        <div className='cv1 lg:col-start-1 lg:col-end-2'>
        <h1 className='text-5xl h-fit ml-12 pl-12'><span className='deco'>Con</span>tact Me.</h1><div className="span w-fit"></div>
        <h3 className="mt-5 text-2xl">Let's talk about everything</h3>
        <p className="mr-5">Don't like forms ? Send me an email</p>
        <h2><HiOutlineMail style={{position:"relative",top:"1.6rem",left:"-1.7rem"}} /> ahmadfirdosh008@gmail.com</h2>
        <h2><BsPhone style={{position:"relative",top:"1.6rem",left:"-1.7rem"}}/> 7017282924</h2>
        <div className="so">
        <Social/>
        </div>
       
        </div>
        <div className=' lg:col-start-2 lg:col-end-3 cv'>
        <div class="block  p-6 rounded-lg shadow-lg bg-white w-full">
            <form>
       <div class="form-group mb-6">
      <input type="text" class="form-control block w-full px-3 py-1.5 text-gray-700
        border border-solid border-gray-300 rounded "placeholder="Name"/>
    </div>
    <div class="form-group mb-6">
      <input type="email" class="form-control block w-full px-3 py-1.5 text-gray-700
        border border-solid border-gray-300 rounded" id="exampleInput8"
        placeholder="Email address"/>
    </div>
    <div class="form-group mb-6">
      <textarea
      class="form-control block w-full px-3 py-1.5 text-gray-700
      border border-solid border-gray-300 rounded "

      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Message"
    ></textarea>
    </div>
     <Button name="Send Message" type="submit"/>
            </form>
        </div>
        </div>
        </div>
      
    )
}