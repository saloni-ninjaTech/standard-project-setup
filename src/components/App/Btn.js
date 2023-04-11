import { Button } from "antd";
import React from "react";

function Btn() {
  return (
    <Button type="primary" onClick={() => console.log("clicked")}>
      click here
    </Button>
  );
}

export default Btn;
