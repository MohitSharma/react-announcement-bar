import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class AnnouncementBar extends Component {
    static propTypes = {
      width: PropTypes.string,
      height: PropTypes.string,
      padding: PropTypes.string,
      backgroundColor: PropTypes.string,
      iconColor: PropTypes.string,
      topOffset: PropTypes.string,
      relative: PropTypes.bool,
      children: PropTypes.func.isRequired
    }

    static defaultProps = {
      width: "100%",
      height: "60px",
      padding: "10px",
      backgroundColor: '#d89d26',
      iconColor: '#ffffff',
      relative: false,
      topOffset: "0px"
    }

    state = {
      style: {
        backgroundColor: this.props.backgroundColor,
        padding: this.props.padding,
        height: this.props.height,
        width: this.props.width,
        position: "relative",
        marginTop: this.props.topOffset
      },
      announcementBar: true
    }

    constructor(props) {
     super(props);
     this.handleScroll = this.handleScroll.bind(this);
     this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let style = {};
        let scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop > 10 && !this.props.relative) {
           style = {
             position: 'fixed',
             padding: this.props.padding,
             width: this.props.width,
             height: this.props.height,
             top: this.props.topOffset,
             zIndex: 1000,
             backgroundColor: this.props.backgroundColor
           };
        }
        else {
          style = {
            position: "relative",
            backgroundColor: this.props.backgroundColor,
            padding: this.props.padding,
            width: this.props.width,
            height: this.props.height,
            marginTop: this.props.topOffset
          };
        }
        this.setState({style: style});
    }

    onClose(event) {
      this.setState({ announcementBar: false });
    }


    render() {
      const element = React.cloneElement(this.props.children({}), { ref: content => { this.content = ReactDOM.findDOMNode(content); } } )
      const announcementBar = this.state.announcementBar;
      return (
          announcementBar ? <div>
            <div style = { this.state.style } >  { element } <span style= {{position: "absolute", top: '10px', right: "10px", cursor: "pointer", color: this.props.iconColor }} onClick={this.onClose}> X </span></div>
          </div> : ''
      )
  }
}
