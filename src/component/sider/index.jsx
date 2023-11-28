import React, { useState } from "react";
import SellerInfoCard from "../sellerInfoCard";
import TopAgentCard from "../topAgentCard";
import RelatedPropertyCard from "../relatedPropertyCard";

function Sider({ userInfo, topAgent, relatedProperty, cardData }) {
  return (
    <>
      {userInfo && <SellerInfoCard cardData={cardData} />}
      {topAgent && <TopAgentCard />}
      {relatedProperty && <RelatedPropertyCard />}
    </>
  );
}

export default Sider;
