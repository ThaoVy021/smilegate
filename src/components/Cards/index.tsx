import "./index.scss";
import { cards } from "../../mockData/cards";

export default function Cards() {
  return (
    <div className="cards">
      <div className="container custom_cards">
        {cards.map((card: any) => (
          <div className="card">
            <img src={card.image} alt="Sea" />
            <div className="title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
