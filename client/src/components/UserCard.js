import React from "react";
import { Card, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact, getContact } from "../JS/actions/contactActions";
import { toggleTrue } from "../JS/actions/contactEditActions";
const UserCard = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexWrap: "warp",
      }}
    >
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            height: "13rem",
          }}
        />
        <Col>
          <Image
            src="https://www.pngitem.com/pimgs/m/526-5265027_alien-marciano-marciam-space-tumblr-emoji-oveelays-alien.png"
            roundedCircle
            style={{
              height: "150px",
              width: "150px",
              position: "relative",
              bottom: "80px",
              border: "10px solid white",
              backgroundColor: "transparent",
            }}
          />
        </Col>
        <Card.Body style={{ position: "relative", bottom: "90px" }}>
          <Card.Title style={{ margin: "0", color: "#505151" }}>
            {contact.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            {contact.email}
          </Card.Text>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            <strong>{contact.phone}</strong>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/Edit_Contact">
            <Button
              variant="outline-primary edit-button"
              onClick={() => {
                dispatch(getContact(contact._id));
                dispatch(toggleTrue());
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="outline-danger edit-button"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
