import React from "react";
import { Card, CardText, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
const UserDetails = (props) => {
  const userFound = props.users.find(
    (user) => user.id == props.match.params.userId
  );
  return (
    <div className="App">
      {console.log(userFound)}

      <Card className="card-details">
        <CardText> {userFound && userFound.username}</CardText>

        <CardBody>
          <CardText>Phone Number : {userFound && userFound.phone}</CardText>
          <CardText>website: {userFound && userFound.website}</CardText>
          <CardText>Company: {userFound && userFound.company.name}</CardText>
          <CardText>
            {" "}
            {userFound && userFound.company.catchPhrase} ,
            {userFound && userFound.company.bs}
          </CardText>
        </CardBody>
        <Link to={`/`}>
          <Button className="detailsbutton"> Back to users list</Button>
        </Link>
      </Card>
    </div>
  );
};
export default UserDetails;
