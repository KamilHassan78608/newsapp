import React, { useEffect, useState } from 'react'
import './style.css';

export default function Temp() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <=600);

    useEffect(() => {
        const handleResize = () =>{
            setIsMobile(window.innerWidth <= 600);
            if(window.innerWidth > 600){
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

  return (
    <div className='category'>
        {
            isMobile && (
                <button className='dropdown-toggle' onClick={() => setIsOpen(!isOpen)}>☰ Categories</button>
            )
        }
        <ul className={`category-list ${isMobile ? (isOpen ? 'open' : '') : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Business</a></li>
            <li><a href="/">Entertainment</a></li>
            <li><a href="/">General</a></li>
            <li><a href="/">Health</a></li>
            <li><a href="/">Science</a></li>
            <li><a href="/">Sports</a></li>
            <li><a href="/">Technology</a></li>
        </ul>
    </div>
  )
}
