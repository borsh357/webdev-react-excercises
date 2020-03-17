import React from 'react';
export default class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <input
        placeholder={this.props.placeholder}
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
