import React from "react";
import { Random } from "react-animated-text";

import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>
        <Random
          text="Troy Allen"
          iterations={1}
          effect="verticalFadeIn"
          effectChange={2}
          effectDirection="up"
        />
      </h1>
      <h2>
        <Random
          text=" - Front End Developer - "
          iterations={1}
          effect="fadeIn"
          effectChange={2}
          effectDirection="up"
        />
      </h2>
    </header>
  );
}

const MemoHeader = React.memo(Header);

export default MemoHeader;
