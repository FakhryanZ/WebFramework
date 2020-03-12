import React, { Component } from "react";
import Post from "../../component/BlogPost/Post";
import "./BlogPost.css";

export class BlogPost extends Component {
  state = {
    listArtikel: [],
    insertArtikel: {
      userId: 1,
      id: 1,
      title: "",
      body: ""
    }
  };

  componentDidMount() {
    this.ambilDataDariAPI();
  }

  ambilDataDariAPI() {
    fetch("http://localhost:3001/posts?_sort=id&_order=desc")
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({ listArtikel: jsonHasilAmbilDariAPI });
      });
  }

  handleDelete = Data => {
    fetch("http://localhost:3001/posts/" + Data, {
      method: "DELETE"
    }).then(res => this.ambilDataDariAPI());
  };

  handleTambah = event => {
    let formInsertArtikel = { ...this.state.insertArtikel };
    let timestamp = new Date().getTime();
    formInsertArtikel["id"] = timestamp;
    formInsertArtikel[event.target.name] = event.target.value;
    this.setState({
      insertArtikel: formInsertArtikel
    });
    console.log(formInsertArtikel);
  };

  handleTombolSimpan = () => {
    fetch("http://localhost:3001/posts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.insertArtikel)
    }).then(Response => this.ambilDataDariAPI());
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom" style={{ marginTop: "30px" }}>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Judul
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={this.handleTambah}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Isi
            </label>
            <div className="col-sm-10">
              <textarea
                name="body"
                id="body"
                cols="30"
                rows="3"
                className="form-control"
                onChange={this.handleTambah}
              ></textarea>
            </div>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Artikel</h2>
        {this.state.listArtikel.map(artikel => {
          return (
            <Post
              key={artikel.id}
              judul={artikel.title}
              isi={artikel.body}
              onDelete={() => this.handleDelete(artikel.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;
