import React from "react";
import { Button } from "react-bootstrap";

const Post = props => {
  return (
    <div>
      <div className="artikel">
        <div className="gambar-artikel">
          <img
            src="http://placeimg.com/120/120/any"
            alt="Gambar Thumbnail Artikel"
          />
        </div>
        <div className="konten-artikel">
          <div className="judul-artikel">{props.judul}</div>
          <p className="isi-artikel">{props.isi}</p>
          <Button variant="danger" onClick={props.onDelete}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
