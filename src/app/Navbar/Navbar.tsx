"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Logo from "../assets/logo.png";
import Prof from "../assets/profileholder.png";

export default function Navbar({ userProfile }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileImage = userProfile ? userProfile.image : Prof;
    const dropdownRef = useRef(null);

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
                setIsOpen(false); // Close hamburger menu as well
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
      <nav className="bg-neutral glass">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" passHref>
              <div className="flex items-center py-2 px-1 cursor-pointer">
                <Image src={Logo} alt="Logo" priority width={100} height={100} />
              </div>
            </Link>

            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {["/", "/reviews", "/about", "/contact_us"].map((path, index) => (
                <Link key={index} href={path} passHref>
                  <span className="py-5 px-3 text-base-100 navbar-link">
                    {['Home', 'Reviews', 'About Us', 'Contact Us'][index]}
                  </span>
                </Link>
              ))}
            </div>

            {/* Secondary Navbar Items (Profile) */}
            <div className="flex items-center space-x-3" ref={dropdownRef}>
              <div onClick={handleProfileClick} className="flex flex-col items-center py-5 px-2 cursor-pointer">
                <Image src={profileImage} alt="Profile" width={30} height={30} />
                <span className="text-base-100">{userProfile ? userProfile.name : 'Username'}</span>
              </div>
              {isProfileDropdownOpen && (
                <div className="absolute mt-12 py-2 bg-white shadow-lg rounded-sm">
                  <Link href="/profile" passHref><span className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">My Account</span></Link>
                  <span className="block px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">{userProfile ? 'Sign Out' : 'Sign In'}</span>
                </div>
              )}

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center`} ref={dropdownRef}>
            {["/", "/reviews", "/about", "/contact_us"].map((path, index) => (
              <Link key={index} href={path} passHref>
                <span className="block py-2 px-4 text-sm text-base-100 navbar-link">
                  {['Home', 'Reviews', 'About Us', 'Contact Us'][index]}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .navbar-link {
            color: #007bff; /* Your primary color */
            font-weight: 500; /* Slightly bolder font */
            transition: font-size 0.3s, text-decoration-color 0.3s;
          }

          .navbar-link:hover {
            text-decoration: underline;
            text-decoration-color: #007bff; /* Your primary color */
          }
        `}</style>
      </nav>
    );
}

