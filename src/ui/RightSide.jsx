import Content from "./Content"


function RightSide() {
    return (
        <div className="  rightSide text-white py-8 px-4">

             <div className="text-orange-300 font-[700] text-3xl tracking-[1px]">New</div>
             <Content header={"Hydrogen VS Electric Cars"} text={"Will hydrogen-fueled cars ever catch up to EVs?"} bool={true}/>
             <Content header={"The Downsides of AI Artistry"} text={"  What are the possible adverse effects of on-demand AI image generation?"} bool={true}/>
             <Content header={" Is VC Funding Drying Up?"} text={"Private funding by VC firms is down 50%  YOY. We take a look at what that means."} bool={false}/>

        </div>
    )
}

export default RightSide

// sadjhdhsd
