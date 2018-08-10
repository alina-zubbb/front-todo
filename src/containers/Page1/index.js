import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchJson } from "../../actions/jsonAction";
import Input from "../../components/Input";

class Page1 extends Component {
  state = {
    inputValue: "",
    currPost: {}
  };

  changeSearchValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  filteredList = () => {
    return this.props.jsonState.data.filter(
      el => ~el.title.indexOf(this.state.inputValue)
    );
  };

  listItemMapper = ({ id, userId, title, body }) => (
    <li key={id} className="postItem">
      <span className="marker">ID</span>
      {id}
      <br />
      <span className="marker">USER ID</span>
      {userId}
      <br />
      <span className="marker">TITLE</span>
      {title}
      <br />
      <span className="marker">BODY</span>
      {body}
    </li>
  );

  fetchPost = id =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
      res.json()
    );

  getPost = async id => {
    let post = await this.fetchPost(id);
    this.setState({
      currPost: post
    });
  };

  showFeed() {
    let id = 98;
    setInterval(() => {
      this.getPost(id);
      id = id === 100 ? 1 : id + 1;
    }, 3000);
  }

  render() {
    if (this.props.jsonState.error) {
      return <div>error</div>;
    }
    if (this.props.jsonState.pending) {
      return <div>loading</div>;
    }
    return (
      <div className="page1">
        <hr />
        <h3>News</h3>
        <div className="feedPosts">
          <span className="marker">ID</span> {this.state.currPost.id} <br />
          <span className="marker">USER ID</span> {this.state.currPost.userId}{" "}
          <br />
          <span className="marker">TITLE</span> {this.state.currPost.title}{" "}
          <br />
          <span className="marker">BODY</span> {this.state.currPost.body} <br />
        </div>
        <hr />
        <h1>Page 1 content</h1>
        <h2>SEARCH</h2>
        <Input
          type="text"
          placeholder="Search"
          changeHandler={this.changeSearchValue}
        />
        <p>Find {this.filteredList().length} items</p>
        <ul className="posts">
          {this.filteredList().map(this.listItemMapper)}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchJson();
    this.showFeed();
  }
}

Page1.propTypes = {
  jsonState: PropTypes.object
};

export default connect(
  ({ jsonState }) => ({ jsonState }),
  { fetchJson }
)(Page1);
