"use client"
import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral glass py-5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center flex-col md:flex-row text-lg">
                    {/* Left side: Slogan */}
                    <div className="mb-4 md:mb-0 flex-1">
                        <span className="text-black text-md md:text-xl lg:text-2xl">The ultimate car review listing site</span>
                    </div>

                    {/* Right side: Contact Information */}
                    <div className="flex flex-col text-white text-sm space-y-2">
                        <Link href="https://www.instagram.com/sejoqariz/" className="hover:underline ">
                            <FaInstagram className="inline"/> Instagram
                        </Link>
                        <a href="mailto:dummyemail@example.com" className="hover:underline">
                            <FaEnvelope className="inline"/> dummyemail@example.com
                        </a>
                        <a href="tel:1234567890" className="hover:underline">
                            <FaPhone className="inline"/> (123) 456-7890
                        </a>
                    </div>
                </div>

                {/* Thin white line */}
                <hr className="my-4 border-t border-white" />

                {/* Bottom Center: Copyright */}
                <div className="text-center text-lg">
                    <span className="text-white">&copy; {currentYear}</span>
                </div>
            </div>
        </footer>
    );
}
