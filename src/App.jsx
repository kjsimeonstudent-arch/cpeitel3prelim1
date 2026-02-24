import "./App.css";

export default function App() {
  return (
    <div className="page">
      <h1 className="name">Ken-zhin Simeon</h1>

      <div className="outer">
        <div className="left">
          <div className="topLeft">
            <div className="cell">1</div>
            <div className="cell">2</div>
          </div>

          <div className="cell">5</div>
          <div className="cell">6</div>
        </div>

        <div className="right">
          <div className="cell">3</div>
          <div className="cell">4</div>

          <div className="bottomRight">
            <div className="cell">7</div>
            <div className="cell">8</div>
          </div>
        </div>
      </div>
    </div>
  );
}