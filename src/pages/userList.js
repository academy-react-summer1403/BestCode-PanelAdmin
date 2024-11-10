import React from "react";
import { Card, CardBody } from "reactstrap";
import RippleButton from "../@core/components/ripple-button";

const userList = () => {

  return (
    <Card>
      <CardBody>
        <RippleButton>Submit</RippleButton>
      </CardBody>
    </Card>
  );
};

export default userList;
