function Content({header,text,bool}) {
    return (
        <div className="space-y-6 mt-5">
            <div className="font-bold cursor-pointer hover:text-orange-300">{header}</div>
            <div className="text">{text}</div>
            {bool&&<hr/>}
        </div>
    )
}

export default Content
