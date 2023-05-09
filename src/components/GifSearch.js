import React, { Component } from 'react';

class GifSearch extends Component {
state = {
searchTerm: ''
}

handleSubmit = (event) => {
event.preventDefault();
this.props.fetchGIFs(this.state.searchTerm);
}

render() {
return (
<form onSubmit={this.handleSubmit}>
<label>
Enter a Search Term:
<input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
</label>
<button type="submit">Find GIFs</button>
</form>
)
}
}

export default GifSearch;