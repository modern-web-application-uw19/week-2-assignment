import React from 'react';
import PropTypes from 'prop-types';

export default class Author extends React.Component {
  render() {
    const author = this.props.author;
    const date = new Date(this.props.postedDate);
    const minutes = this.props.minutesToRead;
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });

    return <div className="author">
      <img className="author-image" src={author.image} alt="article" />
      <div className="author-body">
        <svg className="bookmark" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" >
          </path>
        </svg>
        <div className="author-name">{author.name}</div>
        <div className="author-date-line">{dateFormat.format(date)} &#8226; {minutes} min read</div>
      </div>
    </div>;
  }
}

Author.propTypes = {
  author: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired
}