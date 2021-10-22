import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: [
        { id: '1', showContent: false, title: 'Hypertext Markup Language', content: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior (JavaScript).' },
        { id: '2', showContent: false, title: 'Cascading Style Sheets', content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
        { id: '3', showContent: false, title: 'JavaScript', content: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' },
        { id: '4', showContent: false, title: 'JavaScript', content: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
      ]
    };
  }

  handleClick(e) {
    this.setState({
      data: this.state.data.map(item => {
        for (let i = 0; i < this.state.data.length; i++) {
          if (e.target.id === item.id) {
            item.showContent = !item.showContent;
          } else {
            item.showContent = false;
          }
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => {
          if (item.showContent === true) {
            return (
            <div key={item.id}>
              <div className="header" id={item.id} onClick={this.handleClick}>
                {item.title}
              </div>
              <div className="body">{item.content}</div>
            </div>
            );
          } else {
            return (
            <div key={item.id}>
              <div className="header" id={item.id} onClick={this.handleClick}>
                {item.title}
              </div>
              <div className="body hidden">{item.content}</div>
            </div>
            );
          }
        })
        }
      </div>
    );
  }
}

export default Accordion;
