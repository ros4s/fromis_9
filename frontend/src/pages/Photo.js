import "../style/photo.css";
import mb1 from "../images/MB1.avif";
import mb2 from "../images/MB2.avif";
import mg1 from "../images/MG1.avif";
import mg2 from "../images/MG2.avif";

function Photo() {
  return (
    <div>
      <div className="wrapper">
        <div className="item">
          <div className="polaroid">
            <img src={mb1} alt="" width={700} height={500}></img>
            <div className="caption">from our Memento Box #1</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={mb2} alt="" width={500} height={700}></img>
            <div className="caption">from our Memento Box #2</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={mg1} alt="" width={700} height={500}></img>
            <div className="caption">Midnight Guest #1</div>
          </div>
        </div>

        <div className="item">
          <div className="polaroid">
            <img src={mg2} alt="" width={500} height={700}></img>
            <div className="caption">Midnight Guest #2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
