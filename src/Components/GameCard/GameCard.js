import "./GameCard.css";
import { SecondaryButton } from "../../Components/index";

const GameCard = (props) => {
  return (
    <>
      <div className="gaming-library-card">
        <ul>
          <li>
            <img src={props.img} alt="" />
          </li>
          <li>
            <h4>{props.title}</h4>
            <span>{props.snap}</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>{props.date}</span>
          </li>
          <li>
            <h4>Hours </h4>
            <span>{props.hours}</span>
          </li>
          <li>
            <h4>Currently </h4>
            <span>{props.download}</span>
          </li>
          <SecondaryButton>Download</SecondaryButton>
        </ul>
      </div>
    </>
  );
};

export default GameCard;
