import React, { Component } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { connect } from "react-redux";

import { uploadImagePending } from "../../actions/loginActions";

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

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.fileName) {
      const data = {
        fileName: this.state.fileName,
        file: this.state.file
      };
      this.props.uploadImagePending(data);
    } else {
      alert("please, upload image");
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
  { uploadImagePending }
)(Profile);
