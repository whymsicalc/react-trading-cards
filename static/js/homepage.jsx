"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        Welcome! <br />
        <a href="/cards">Trading Cards</a><br />
        <img src="/static/img/balloonicorn.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
