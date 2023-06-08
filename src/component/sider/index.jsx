import React, { useState } from "react";
import SellerInfoCard from "../sellerInfoCard";
import TopAgentCard from "../topAgentCard";
import RelatedPropertyCard from "../relatedPropertyCard";

function Sider({userInfo , topAgent, relatedProperty}) {
  return (
    <>
    {userInfo && <SellerInfoCard />}
    {topAgent && <TopAgentCard />}
    {relatedProperty && <RelatedPropertyCard />}
    </>
  );
}

export default Sider;
