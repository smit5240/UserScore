import React from "react";
import Online from "./Online";

export default function Image(props) {
  return (
    <div>
      <div className="position-relative">
        <img src={props.src} alt="" className="userImage" />
        <div className="fixonline">
          <Online rank={props.rank} />
        </div>
      </div>
    </div>
  );
}
