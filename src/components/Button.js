import React from 'react';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <input
        type="submit"
        value={this.props.text}
        style={{
          fontSize: '20px',
          outline: 'none',
          marginBottom: '20px',
          padding: '10px'
        }}
      />
    );
  }
}
