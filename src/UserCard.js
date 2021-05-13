import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
const UserCard = ({ user }) => {
  return (
    <div>
      <Card className="card-User">
        <CardBody>
          <CardTitle className="cardtitle" tag="h5">
            {user.name}{" "}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2text-muted">
            User name : {user.username}{" "}
          </CardSubtitle>
        </CardBody>
        <CardText> Email: {user.email}</CardText>
        <CardText>
          Adress: {user.address.street},{user.address.suite},{user.address.city}
        </CardText>

        <Link to={`/details/${user.id}`}>
          <Button className="detailsbutton"> More details</Button>
        </Link>
      </Card>
    </div>
  );
};
export default UserCard;
