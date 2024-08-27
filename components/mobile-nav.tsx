import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'

const MobileNav = () => {
  return (
    <div>
        <ul className="flex flex-col gap-4">
            <li>
            <Link href="/" className="hover:text-primary transition-colors font-bold">Home</Link>
            </li>
            <li>
            <Link href="/about" className="">About</Link>
            </li>
            <li>
            <Link href="/contact" className="">Contact</Link>
            </li>

            <div className="buttons gap-2 flex text-xsm">

           
            <Link className={buttonVariants({ variant: "secondary" })} href="/login">Login</Link>  
                <Link className={buttonVariants({ variant: "secondary" })} href="/login">Signup</Link> 
            </div>
        </ul>
    </div>
  )
}

export default MobileNav