import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const itemMahasiswa = props => {
  return (
    <div>
      <Card style={{ padding: "10px", marginBottom: "10px" }}>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              alt="Profile Mahasiswa"
              src="http://placeimg.com/120/120/any"
            />
          </Col>
          <Col xs={11}>
            <Card.Body>
              <Card.Title>{props.nim}</Card.Title>
              <Card.Text>Nama : {props.nama}</Card.Text>
              <Card.Text>Alamat : {props.alamat}</Card.Text>
              <Card.Text>Hp : {props.alamat}</Card.Text>
              <Card.Text>Angkatan : {props.angkatan}</Card.Text>
              <Card.Text>Status : {props.status}</Card.Text>
            </Card.Body>
            <Button variant="danger" onClick={props.onDelete}>
              Hapus
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default itemMahasiswa;
