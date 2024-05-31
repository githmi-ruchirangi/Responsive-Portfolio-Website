import { MapIcon } from "@heroicons/react/16/solid";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";

const Footer = () => {

    return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 
        border-opacity-40 ">
            <div>
                <div className="font-logo text-white text-[18px]">
                    <span className="text-[30px] md:text[40px] text-yellow-400">WD</span>
                    warriors
                </div>
                <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Kuis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea Lorem ipsum dolor sit amet, consectetur</h1>
                     <p className="mt-[1.3rem] text-yellow-300 font-light underline cursor-pointer">dilanthaweerakoon@gmail.com</p>
            </div>
            <div className="md:mx-auto">
                <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Quick Links</h1>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" >About</p>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" >Services</p>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" >Projects</p>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300" >Contact</p>
                
            </div>
            <div className="lg:mx-auto">
            <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">Address</h1>
            <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">No. 93/1, Kandy Road, Yakkala</p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">dilanthaweerakoon@gmail.com</p>
            </div>
            <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
            <p className="text-[17px] font-normal text-white opacity-75">+94-71 919 0880</p>
            </div>
            </div>
        </div>
        <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
            &#169; Copyright webdev warriors 2024
        </div>
        </div>
    );
};
export default Footer;