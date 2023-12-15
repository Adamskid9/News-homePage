import Widget from "./Widget"


function Bottom() {
    return (
        <div className="flex-col p-5 md:p-0 flex md:flex-row mt-14 space-y-3 md:justify-between">
            <Widget num={"01"} img={"/public/image-retro-pcs.jpg"} tittle={"Reviving Retro PCs"} text1={"What happens when old PCs"} text2={"are given modern upgrades?"} />
            <Widget num={"02"} img={"/public/image-top-laptops.jpg"} tittle={"Top 10 Laptops of 2022"} text1={"Our best picks for various"} text2={" needs and budgets."}/>
            <Widget num={"03"} img={"/public/image-gaming-growth.jpg"} tittle={"The Growth of Gaming"} text1={" How the pandemic has sparked"} text2={"fresh opportunities."}/>
        </div>
    )
};

export default Bottom