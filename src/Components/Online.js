import React from "react";

export default function Online(props) {
  return (
    <div>
      <div>
        {props.rank === 1 && (
          <div className="greendot text-white">{props.rank}</div>
        )}
        {props.rank === 2 && (
          <div className="reddot text-white">{props.rank}</div>
        )}
        {props.rank === 3 && (
          <div className="greydot text-white">{props.rank}</div>
        )}
        {props.rank >= 4 && <div className="dot text-white">{props.rank}</div>}
      </div>
    </div>
  );
}
