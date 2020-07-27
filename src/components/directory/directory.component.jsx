import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS from "./directory.data";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {SECTIONS.map(({ id, title }) => (
        <MenuItem key={id} title={title} />
      ))}
    </div>
  );
};

export default Directory;
