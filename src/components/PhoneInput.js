import React from 'react';
export default class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      input: ''
    };
  }

  validate() {
    // prettier-ignore
    const regex = /^[(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}/g;
    return regex.test(this.state.input);
  }

  format(input) {
    var x = input.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    input.value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] + '-' + x[4] : '');
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span style={{ fontSize: '20px', marginRight: '10px' }}>+7</span>
          <input
            placeholder="(___) - ___ - ____"
            type="tel"
            disabled={this.props.isSent}
            style={{
              borderColor: this.validate() ? 'green' : 'red',
              fontSize: '20px',
              outline: 'none',
              marginBottom: '20px',
              padding: '10px'
            }}
            onChange={event => {
              this.setState({ input: event.target.value });
              this.format(event.target);
              this.props.verifyNumber(this.validate());
            }}
          ></input>
        </div>
      </React.Fragment>
    );
  }
}
