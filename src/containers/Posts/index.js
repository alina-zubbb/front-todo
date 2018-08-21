import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getFakePostsPending,
  changePostsSearchInput
} from "../../actions/getFakePostsAction";
import Input from "../../components/Input";

class Posts extends Component {
  _currentPostIndex = 1;

  state = {
    currPost: {}
  };

  changeSearchValue = () => {
    this.props.changePostsSearchInput();
  };

  filteredList = () => {
    return this.props.jsonState.data.filter(el => {
      return el.title.indexOf(this.props.jsonState.searchInputValue) < 0
        ? 0
        : 1;
    });
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

  queryPost = id =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err.message));

  getPost = async id => {
    let post = await this.queryPost(id);
    this.setState({
      currPost: post
    });
  };

  getPostByIndex(index) {
    this.getPost(index);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  componentDidMount() {
    this.props.getFakePostsPending();

    this.getPostByIndex(this._currentPostIndex);

    this._timer = setInterval(() => {
      if (++this._currentPostIndex > 100) {
        this._currentPostIndex = 1;
      }
      this.getPostByIndex(this._currentPostIndex);
    }, 3000);
  }

  render() {
    const { currPost } = this.state;

    if (this.props.jsonState.error) {
      return <div>error</div>;
    }
    if (this.props.jsonState.pending) {
      return <div>loading</div>;
    }

    const list = this.filteredList();
    return (
      <div className="page1">
        <hr />
        <h3>News</h3>
        <div className="feedPosts">
          <span className="marker">ID</span> {currPost.id} <br />
          <span className="marker">USER ID</span> {currPost.userId} <br />
          <span className="marker">TITLE</span> {currPost.title} <br />
          <span className="marker">BODY</span> {currPost.body} <br />
        </div>
        <hr />
        <h1>Page 1 content</h1>
        <h2>SEARCH</h2>
        <Input
          type="text"
          placeholder="Search"
          value={this.props.jsonState.searchInputValue}
          changeHandler={e => this.props.changePostsSearchInput(e.target.value)}
        />
        <p>Find {list.length} items</p>
        <ul className="posts">{list.map(this.listItemMapper)}</ul>
      </div>
    );
  }
}

Posts.propTypes = {
  jsonState: PropTypes.object.isRequired
};

export default connect(
  ({ jsonState }) => ({ jsonState }),
  { getFakePostsPending, changePostsSearchInput }
)(Posts);
