import "./MostPopular.css";
import { Card, SectionHeader, SectionWrapper } from "../../Components/index";
import MostPopularItems from "../../Data/MostPopularData";

const MostPopular = () => {
  const cards = MostPopularItems.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.image}
        title={card.title}
        snap={card.snap}
        rate={card.rate}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="most-popular-items">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
