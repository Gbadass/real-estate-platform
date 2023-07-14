import { FaAngleRight, FaAngleLeft} from "react-icons/fa6";
import image011 from "./images/House-Design-1240x720.jpg"


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
  <div className="third-div-innerd1"></div>
  <div className="third-div-innerd2"></div>
</div>
  </div>
</div>
  )
}

export default Productdetails