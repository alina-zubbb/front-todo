import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import { uploadImage } from "../../actions/loginActions";

class Profile extends Component {
  state = {
    imageLink: null,
    file: null
  };
  inputFileChange = e => {
    const input = e.target;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        this.setState({ fileName: input.files[0].name, file: input.files[0] });
        document.getElementById("preview").setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.fileName) {
      const token = window.localStorage.getItem("token");
      const data = {
        userId: this.props.userId,
        fileName: this.state.fileName,
        file: this.state.file,
        token: token
      };
      this.props.uploadImage(data);
    } else {
      console.log("please, upload image");
    }
  };

  render() {
    return (
      <form
        className="auth-form"
        id="profile"
        onSubmit={this.handleSubmit}
        encType="multipart/form-data"
      >
        <h1>Profile</h1>
        <Input
          name="image"
          type="file"
          id="imgInp"
          changeHandler={this.inputFileChange}
        />
        <img id="preview" src={this.props.imageLink} alt="your_image" />
        <Button className="add" text="Add Image" type="submit" />
      </form>
    );
  }
}

export default connect(
  ({ loginState }) => ({
    state: loginState,
    isLogin: loginState.authenticated,
    isPending: loginState.pending,
    isError: loginState.error,
    username: loginState.username,
    userId: loginState.userId,
    imageLink: loginState.imageLink
  }),
  { uploadImage }
)(Profile);
