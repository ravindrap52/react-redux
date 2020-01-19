import React from "react";
import moment from "moment";

function Card(props) {
  return (
    <div className="card cursor">
      <p className="heading pb-8">{props.question.question}</p>
      <p className="caption pb-8">
        {moment(props.question.published_at).format("YYYY/MM/DD")}
      </p>
      <p className="caption pb-8">{props.question.choices.length}</p>
    </div>
  );
}

export default Card;
