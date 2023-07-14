import { FaAngleRight, FaAngleLeft} from "react-icons/fa6";
import { FaShareAlt, FaHeart} from "react-icons/fa";
import { HiPrinter } from "react-icons/hi";


import image011 from "./images/House-Design-1240x720.jpg"
import image012 from "./images/agent-male-1-1.jpg"


function Productdetails() {
  return(
<div>
  <div className="cover-divv">
<div className="first-divv">
<div className="first-div-innerd">
<div className="displayed-flexed">
  <p>Home</p>
  <FaAngleRight className="arrow-icon"/>
  <p>Miami</p>
</div>
<p className="villagrand"> Villa on Grand Avenue</p>
<p className="cocowalk">CocoWalk, 3015 Grand Avenue, Miami, FL 33133 USA</p>
</div>
<div className="first-div-innerd02">
  <div className="lin-divv">
  <hr className="line-rotate" />
  <div className="gaup-div">
  <p className="for-renttt">For Rent</p>
  <p className="guap">$4,740 Monthly</p>
  </div>

  </div>

</div>
</div>

<div className="second-div">
<img src={image011} alt="" />
<FaAngleRight className="fangle-right"/>
<FaAngleLeft className="fangle-left"/>
</div>

<div className="third-div">
  <div className="third-div-innerd1">
    <div className="upper-sec">
<p className="upper-sec-p">Property ID <span className="span-blue">RH-2017-09</span></p>
<div className="share-cont">
  <FaShareAlt className="share-icon"/>
  <FaHeart className="below-heart"/>
  <HiPrinter className="below-print"/>
</div>
    </div>

    <hr  className="newest-lined"/>
    <div className="cont-props">
      
    </div>
  </div>
  <div className="third-div-innerd2"></div>
  <div className="absolute-div">
    <img src={image012} alt="" />
  </div>
</div>
  </div>
</div>
  )
}

export default Productdetails