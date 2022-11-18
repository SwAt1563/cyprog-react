import "./Card.css";

//npm install react-icons --save
import { FaStar, FaDownload } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img
            className="most-popular-item-image image-fluid"
            src={props.img}
            alt=""
          />
          <div className="most-popular-item-content">
            <h4 className="most-popular-item-title">
              {props.title}
              <br />
              <span>{props.snap}</span>
            </h4>
            <ul>
              <li>
                <span style={{ color: "yellow" }}>
                  <FaStar />
                </span>
                <span>{props.rate}</span>
              </li>
              <li>
                <span style={{ color: "var(--color-primary)" }}>
                  <FaDownload />
                </span>
                <span>{props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
