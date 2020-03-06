import React, { Fragment } from "react";

export function Header(props) {
  return (
    <Fragment>
      <h2 className="header">{props.name}</h2>
    </Fragment>
  );
}
