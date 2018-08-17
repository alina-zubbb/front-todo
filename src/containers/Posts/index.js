import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { store } from "../../store/configureStore";
import { getFakePostsPending } from "../../actions/getFakePostsAction";
import Input from "../../components/Input";

class Posts extends Component {
  _currentPostIndex = 1;

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

  getPostByIndex(index) {
    this.getPost(index);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    const { jsonState } = this.props;

    const { currPost } = this.state;

    if (jsonState.error) {
      return <div>error</div>;
    }
    if (jsonState.pending) {
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
          changeHandler={this.changeSearchValue}
        />
        <p>Find {list.length} items</p>
        <ul className="posts">{list.map(this.listItemMapper)}</ul>
      </div>
    );
  }

  componentDidMount() {
    store.dispatch(getFakePostsPending());

    this.getPostByIndex(this._currentPostIndex);

    this._timer = setInterval(() => {
      if (++this._currentPostIndex > 100) {
        this._currentPostIndex = 1;
      }
      this.getPostByIndex(this._currentPostIndex);
    }, 3000);
  }
}

Posts.propTypes = {
  jsonState: PropTypes.object
};

export default connect(
  ({ jsonState }) => ({ jsonState }),
  { getFakePostsPending }
)(Posts);
