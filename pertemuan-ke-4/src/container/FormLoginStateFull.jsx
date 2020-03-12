import React, { Component } from "react";
import "./FormLoginStateFull.css";

export class FormLoginStateFull extends Component {
  state = {
    username: "",
    password: "",
    remember: false
  };

  handleChange = (value, name) => {
    this.setState({ ...this.state, [name]: value });
  };

  submitForm = e => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "1em",
              marginTop: "1em"
            }}
          >
            Form Login
          </h4>
        </div>
        <div className="form-area">
          <div className="text-center title">
            <h2
              style={{
                fontWeight: "bold"
              }}
            >
              Tugas Pertemuan Ketiga
            </h2>
          </div>
          <div className="text-center">
            <div>
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Masukkan Username"
                value={this.state.username}
                onChange={event =>
                  this.handleChange(event.target.value, "username")
                }
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                value={this.state.password}
                onChange={event =>
                  this.handleChange(event.target.value, "password")
                }
              />
            </div>
            <button className="btnLogin" onClick={this.submitForm}>
              Login
            </button>
            <div className="checkbox">
              <h5>
                <span>
                  <input
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={event => this.handleChange(!this.state.remember, "remember")}
                  />
                </span>
                Remember Me
              </h5>
            </div>
            <button className="btnCancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormLoginStateFull;
