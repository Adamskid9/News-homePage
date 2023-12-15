import { useState } from "react";
import { HiMenuAlt1, HiAnnotation, HiX } from "react-icons/hi";

function Header() {
    const [isOpen,setIsOpen] = useState(false);

    function openMenu (){
        setIsOpen(true)
    }
    function closeMenu (){
        setIsOpen(false);
        console.log("hi world")
    }
    
    const li = `hover:text-red-500 hover:rounded-lg li transition duration-500 cursor-pointer p-1`;



    return (
    <>
        <div className="flex justify-between py-1 mb-8">
            <div className="uppercase py-1 text-[35px] ice font-[900]">W.</div>
            <ul className="hidden md:flex items-center justify-center space-x-5">
                <li className={li}>Home</li>
                <li className={li}>News</li>
                <li className={li}>Popular</li>
                <li className={li}>Trending</li>
                <li className={li}>Catergories</li>
            </ul>
            
            
            <div  className="cursor-pointer flex sm:hidden items-center justify-center  ">
                {!isOpen&&<div onClick={openMenu}><HiMenuAlt1 className="text-3xl"/></div>}

                {isOpen&&<div onClick={closeMenu} className="absolute backdrop-blur top-0 left-0 h-full w-full">
                <div className={`p-5 bg-white absolute  h-screen top-0 right-0  ${isOpen?"w-8/12":"w-0"} duration-500 transition-all bg-red-500 `}>
                    <div onClick={closeMenu} className="flex justify-end items-center"><HiX/></div>

                    <ul className="flex-col font-bold mt-20 items-center justify-center space-y-5">
                <li className={li}>Home</li>
                <li className={li}>News</li>
                <li className={li}>Popular</li>
                <li className={li}>Trending</li>
                <li className={li}>Catergories</li>
                    </ul>
                </div>
                    </div>}
            </div>
        </div>  

    </>
    )
}

export default Header
