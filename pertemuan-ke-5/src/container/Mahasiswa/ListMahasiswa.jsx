import React, { Component } from "react";
import ItemMahasiswa from "../../component/Mahasiswa/ItemMahasiswa";
import { Form, Row, Col, Button } from "react-bootstrap";

export class ListMahasiswa extends Component {
  state = {
    listMahasiswa: [],
    insertMahasiswa: {
      NIM: 1,
      Nama: "",
      Alamat: "",
      Hp: "",
      Angkatan: "",
      Status: ""
    }
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:3001/mahasiswa")
      .then(response => response.json())
      .then(jsonFromAPI => {
        this.setState({ listMahasiswa: jsonFromAPI });
      });
  }

  handleDelete = Data => {
    fetch("http://localhost:3001/mahasiswa/" + Data, {
      method: "DELETE"
    }).then(res => this.getData());
  };

  handleTambah = event => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa
    });
    console.log(formInsertMahasiswa);
  };

  handleTombolSimpan = () => {
    fetch("http://localhost:3001/mahasiswa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.insertMahasiswa)
    }).then(Response => this.getData());
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              NIM
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Masukkan NIM"
                name="NIM"
                onChange={this.handleTambah}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Nama
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama"
                name="Nama"
                onChange={this.handleTambah}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Alamat
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="Alamat"
                placeholder="Masukkan Alamat"
                onChange={this.handleTambah}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Nomor Hp
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Masukkan Nomor Hp"
                name="Hp"
                onChange={this.handleTambah}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Angkatan
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Angkatan"
                name="Angkatan"
                onChange={this.handleTambah}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Status
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Masukkan Status"
                name="Status"
                onChange={this.handleTambah}
              />
            </Col>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </Button>
        </Form>

        <hr />

        <h2>Daftar Mahasiswa</h2>
        {this.state.listMahasiswa.map(mahasiswa => {
          return (
            <ItemMahasiswa
              key={mahasiswa.NIM}
              nim={mahasiswa.NIM}
              nama={mahasiswa.Nama}
              alamat={mahasiswa.Alamat}
              hp={mahasiswa.Hp}
              angkatan={mahasiswa.Angkatan}
              status={mahasiswa.Status}
              onDelete={() => this.handleDelete(mahasiswa.NIM)}
            />
          );
        })}
      </div>
    );
  }
}

export default ListMahasiswa;
