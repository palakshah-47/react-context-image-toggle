import React from "react";
const StaticContent = () => {
  console.log("inside static content");
  return <div>This is static content</div>;
};

export default React.memo(StaticContent);
