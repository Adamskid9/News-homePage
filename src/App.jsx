import Header from "./ui/Header"
import LeftSide from "./ui/LeftSide"
import RightSide from "./ui/RightSide"
import "./App.css"
import Bottom from "./ui/Bottom"
import Footer from "./ui/Footer"

function App() {
  return (
    <div className="lg:py-8 lg:px-20 p-3 " >
      <Header/>
      <div className="flex flex-col md:flex-row md:space-x-3">
      <LeftSide/>
      <RightSide/>
      </div>
      <Bottom/>
      <Footer/> 
    </div>
  )
}

export default App
