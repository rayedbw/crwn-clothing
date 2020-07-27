import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS from "./directory.data";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {SECTIONS.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
