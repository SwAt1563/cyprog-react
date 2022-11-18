import "./GamingLibrary.css";
import {
  GameCard,
  SectionHeader,
  SectionWrapper,
} from "../../Components/index";
import GItems from "../../Data/GamingData";

const GamingLibrary = () => {
  const cards = GItems.map((card) => {
    return (
      <GameCard
        key={card.id}
        img={card.image}
        title={card.title}
        snap={card.snap}
        hours={card.hours}
        date={card.date}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default GamingLibrary;
