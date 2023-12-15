function LeftSide() {
    return (
           <div className="basis-4/5 mb-5">
             <img className="h-[350px] w-full"  src="/image-web-3-desktop.jpg" alt=""/>

             <div className="flex mt-10 justify-between space-y-5 md:space-y-0 flex-col md:flex-row">

                <div className="flex-col flex text-4xl header font-[700]">
                 <span>The Bright</span>
                 <span>Future of</span>
                 <span>Web 3.0?</span>
                </div>

                <div>
                    <h1 className="text-base left ">
                    We dive into the next evolution of the web that <br/> claims to put the power of the
                     platforms back <br/> into the hands of the people. 
                     But is it really <br/> fulfilling its promise?
                    </h1>
                    <button className="px-2 py-1 mt-3 tracking-[2px] text-sm md:text-base btn font-[600] text-white bg-red-500">READ MORE</button>
                </div>


              </div>
            </div>


    )
}

export default LeftSide
