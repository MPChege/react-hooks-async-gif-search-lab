import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs('puppies');
  }

  fetchGifs = (searchTerm) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_API_KEY&rating=g`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0, 3)
        });
      })
      .catch(error => console.error(error));
  }

  handleSubmit = (searchTerm) => {
    this.fetchGifs(searchTerm);
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
