

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showpost , deletePost } from "../actions";

class ShowPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showpost(id);
  }

  onDelete(){
    const { id } = this.props.match.params;

  this.props.deletePost(id, () => {
    this.props.history.push("/");
  });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }



    return (
      <div>
      <Link to  = "/" >
      <button className = "btn btn-primary float-lg-right "> Back </button>
      </Link>

      <button className = "btn btn-danger float-lg-right "
        onClick = {this.onDelete.bind(this) }
      > Delete Post </button>
    
      <div className = "details" >
        <h5> <u> Title </u></h5>
        <p> {post.title} </p>
        <h5> <u>Tag:</u> </h5>
        <p> {post.categories} </p>
        <h5> <u>Description </u></h5>
      <p>  { post.content } </p>
      </div>
      </div>

    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { showpost , deletePost })(ShowPost);
