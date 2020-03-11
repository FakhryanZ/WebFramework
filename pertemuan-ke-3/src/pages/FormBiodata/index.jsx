import React, { Component } from "react";
import { Navbar, Container, Card, Row, Col, Image } from "react-bootstrap";

export default class FormBiodata extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand>
              <a style={{ fontWeight: "bold", fontFamily: 'Open Sans' }}>Muhammad</a>
              <a style={{ color: "green", fontWeight: "bold", fontFamily: 'Open Sans' }}> Fakhryan</a>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Card
            style={{
              marginTop: "20px",
              borderTopRightRadius: "25px",
              borderTopLeftRadius: "25px"
            }}
          >
            <Card.Img
              variant="top"
              src="https://ak6.picdn.net/shutterstock/videos/1010117306/thumb/11.jpg"
              height="300px"
              style={{
                borderTopRightRadius: "25px",
                borderTopLeftRadius: "25px"
              }}
            />
            <Card.ImgOverlay>
              <Row>
                <Col lg="6">
                  <Card
                    style={{
                      height: "300px",
                      width: "300px",
                      marginTop: "10px",
                      marginLeft: "30px"
                    }}
                  >
                    <Image src="Fakhryan.jpg" height="100%" width="100%" />
                  </Card>
                </Col>
                <Col lg="6">
                  <Card.Text style={{ padding: "100px" }}>
                    <a
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "30px", fontFamily: 'Open Sans'
                      }}
                    >
                      Muhammad Fakhryan
                    </a>
                  </Card.Text>
                </Col>
              </Row>
            </Card.ImgOverlay>
            <Card.Body style={{ marginTop: "50px", marginLeft: "30px" }}>
              <Card.Title>
                <a style={{ fontWeight: "bold", fontFamily: 'Open Sans' }}>About</a>{" "}
                <a style={{ color: "green", fontWeight: "bolder", fontFamily: 'Open Sans' }}>Me</a>
              </Card.Title>
              <Row>
                <Col lg="6">
                  <Card.Text style={{ marginTop: "30px", fontFamily: 'Open Sans'}}>
                    Hai, saya Fakhryan mahasiswa Teknologi Informasi dari Politeknik Negeri Malang.
                  </Card.Text>
                </Col>
                <Col lg="6">
                  <Card.Text style={{ padding: "30px", fontFamily: 'Open Sans' }}>
                    <Row>
                      <Col lg="3">
                        Umur <br/>
                        Alamat <br/>
                        Email <br/>
                        No. Telp
                      </Col>
                      <Col lg="9" >
                        21 <br/>
                        Ds. Kwadungan, Kec. Ngasem, Kab. Kediri <br/>
                        Fakhryanmuhammad@gmail.com <br/>
                        085608700087
                      </Col>
                    </Row>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
