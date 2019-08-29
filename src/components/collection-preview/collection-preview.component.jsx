import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, CollectionTitleContainer, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitleContainer>{title}</CollectionTitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
