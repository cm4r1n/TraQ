import React, {useState} from "react";

function Card(props) {
  const {title, note, date, book, prior } = props;
  const [priority, setPriority] = useState(0);

  function increase() {
    setPriority(priority + 1);
  }
  function decrease() {
    setPriority(priority - 1);
  }

  return (
    <div className="card">
      <div className="cardTitle">
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
      <div className="cardContent">
        <p>{props.note}</p>
      </div>

      <div className="cardMeta">
        <p className="cardBook">{props.book}</p>
        <div className="cardForm">
          <div className="cardBtn" onClick={decrease}>-</div>
          <p className="cardPrior"> {priority} </p>
          <div className="cardBtn" onClick={increase}>+</div>
        </div>
      </div>

      <div className="cardTools">
        <div className="toolBar">
          <i className='nf nf-fa-trash'/>
          <i className='nf nf-fa-pen'/>
          <i className='nf nf-fa-user_plus'/>
          <i className='nf nf-md-bell_plus'/>
        </div>
        <div className="toolClip">
          <i className='nf nf-md-pin'/>
        </div>
      </div>
   </div>
  );
}

export default Card;
