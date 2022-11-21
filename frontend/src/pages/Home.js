import "../style/home.css";
import home_image from "../images/home.avif";
import from_1 from "../images/1f.avif";
import from_2 from "../images/2f.avif";
import from_4 from "../images/4f.avif";
import from_5 from "../images/5f.avif";
import from_6 from "../images/6f.avif";
import from_7 from "../images/7f.avif";
import from_8 from "../images/8f.avif";
import from_9 from "../images/9f.avif";

function Home() {
  return (
    <div>
      <div className="cover">
        <div className="book">
          <label for="page-1" className="book__page book__page--1">
            <img src={home_image} alt=""></img>
          </label>

          <label for="page-2" className="book__page book__page--4">
            <div className="page__content">
              <div className="page__content-blockquote">
                <img src={from_1} alt="" className="image"></img>
                <img src={from_2} alt="" className="image"></img>
                <img src={from_4} alt="" className="image"></img>
                <img src={from_5} alt="" className="image"></img>
              </div>
              <div className="page__number">3</div>
            </div>
          </label>

          <input type="radio" name="page" id="page-1" />

          <input type="radio" name="page" id="page-2" />
          <label className="book__page book__page--2">
            <div className="book__page-front">
              <div className="page__content">
                <h1 className="page__content-book-title">Fromis_9</h1>

                <p className="page__content-credits">
                  from + idol + school = fromis
                </p>

                <p className="page__content-credits">
                  <span>Flover</span>
                </p>
              </div>
            </div>
            <div className="book__page-back">
              <div className="page__content">
                <div className="page__content-blockquote">
                  <img src={from_6} alt="" className="image"></img>
                  <img src={from_7} alt="" className="image"></img>
                  <img src={from_8} alt="" className="image"></img>
                  <img src={from_9} alt="" className="image"></img>
                </div>
                <div className="page__number">2</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
