function Widget({tittle,text1,text2,num,img}) {
    return (
        <div className="flex space-x-3 justify-center items-center">
            <img className="h-[50%] w-2/5"  src={img} alt="" />
            <div>
                <span className="num font-bold text-xl">{num}</span>
                <h2 className="header font-extrabold cursor-pointer hover:text-red-500">{tittle}</h2>
                <span>{text1}</span>
                <span>{text2}</span>
            </div>
        </div>
    )
}

export default Widget