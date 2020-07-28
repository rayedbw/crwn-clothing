import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionDetails }) => (
        <CollectionPreview key={id} {...collectionDetails} />
      ))}
    </div>
  );
};

export default ShopPage;
