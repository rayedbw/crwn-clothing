import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data";
import "./directory.styles.scss";

const Directory = () => {
  const [sectionsData, setSectionsData] = useState(SECTIONS_DATA);
  return (
    <div className="directory-menu">
      {sectionsData.map(({ id, ...menuItemDetails }) => (
        <MenuItem key={id} {...menuItemDetails} />
      ))}
    </div>
  );
};

export default Directory;
