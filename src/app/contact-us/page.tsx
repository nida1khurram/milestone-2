
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
import React from 'react'

export default function ContactPage() {
  return (
 <>  
        <div className='sub-con'>
        <h2 className="contact-h2">CONTACT US</h2>
        <p className='contact-p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed nostrum 
        <br /><br />
        <Link href={'/'} className="contact-a2"> 
        <IoCallSharp/> (304)368-6719</Link> <br /><br />
        <Link href={'/'}  className="contact-a2">
         <IoCallSharp /> (317)011-3001</Link><br /> <br />
         <Link href={'/'}  className="contact-a2">
        <IoIosMail/> info@website.com</Link>
       
        </p>
    <div className='animation-about'></div>
        </div>
        </>  
  )
}
