import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postObjects = data.map(
          (post) => new Post(post.userId, post.id, post.title, post.body),
        );
        this.setState({ posts: postObjects });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return (
        <div>
          <h1>Blog Posts</h1>
          <p>Something went wrong while loading posts.</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    );
  }
}

export default Posts;
