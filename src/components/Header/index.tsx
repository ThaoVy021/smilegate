import "./index.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container custom_header">
        <div className="logo_and_name">
          <div className="logo">
            <img src="https://i.imgur.com/sOCVfKv.png" alt="logo" />
          </div>
          <div title="" className="name">
            Thao Vy
          </div>
        </div>
        <div className="menu">
          <button>Indie Game</button>
          <button>Entry Game</button>
          <button>Community Game</button>
        </div>
      </div>
    </div>
  );
}
