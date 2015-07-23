import React from 'react';

const { div, h2, p } = React.DOM;

export default React.createClass({
  displayName: 'Post',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string
  },

  stripParagraphTags(html) {
    return html.replace(/<\/?p>/g, '');
  },

  render() {
    const content = this.stripParagraphTags(this.props.content);

    return (
            div({ className: 'Post'},
              h2({ className: 'Post-header' }, this.props.title),
              p({ className: 'Post-content'}, content)
            )
          );
  }
});
