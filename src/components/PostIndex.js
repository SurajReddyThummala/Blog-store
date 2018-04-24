import React, { Component } from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import {allposts} from '../actions/index';
 class PostIndex extends Component {

   componentDidMount(){
     this.props.allposts();
   }
    renderList(){
      return _.map(this.props.posts , post => {
        return (
          <Link to = { `/posts/${post.id}` } >
          <div  key = {post.id} className="card text-center">
            <div className="card-block">

              <li key = {post.id} >
            <h4>{post.title} </h4>
            <p><i> categories: {post.categories }</i> </p>
             </li>
              </div>
            </div>
            </Link>
        );
      } );
    }
  render() {
    return (
      <div>
      <div className="float-lg-right">
      <Link to = "/post/new" >
      <button className =" btn btn-primary "> New Post </button>

       </Link>
      </div>
          <div className = "h2">
        <h2 > Blog Posts!! </h2>
        </div>
        <ul>
        {this.renderList()}
        </ul>

      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    posts: state.posts
  }
}
export default connect(mapStateToProps , { allposts })(PostIndex)
