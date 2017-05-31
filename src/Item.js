import React, { Component } from 'react';
import './App.css';


class Item extends Component {
  renderNameOrTwitter(name, url) {
    if (/^@/.test(name)) {
      return (
        <a className="twitter-follow-button"
          href={url}>
        Follow {name}</a>
      );
    } else {
      return (
        <div className="names">
          {name}
        </div>
      );
    }
  }

  handleShow(e) {
    let mobileTags = Array.from(e.target.parentNode.getElementsByClassName('mobile-tags'));
    let btnText = e.target.textContent;

    if (btnText === 'Show more') {
      btnText = 'Show less';
    } else {
      btnText = 'Show more';
    }

    mobileTags.forEach((node) => {
      node.classList.toggle('hidden');
    });
  }

  render() {
    let item = this.props.item;
    const sortedClass = "tags tooltip sorted-by";
    const unsortedClass = "tags tooltip";

    return (
      <div className="Cat-container" key={item.name}>
        <div className={this.props.type === 'name' ? "tags name tooltip sorted-by" : "tags name tooltip"}>
          {this.renderNameOrTwitter(item.name, item.url)}
          <span className="tooltiptext">{item.name}</span>
        </div>
        <a className="tags btn" href={item.url}>Go now</a>
        <a className="tags btn mobile-btns" onClick={this.handleShow}>Show more</a>
        <div className="mobile-tags hidden">
          <div className={this.props.type === 'prog_lang' ? sortedClass : unsortedClass}>
            {item.prog_lang}
            <span className="tooltiptext">programming language</span>
          </div>
          <div className={this.props.type === 'topic' ? sortedClass : unsortedClass}>
            {item.topic}
            <span className="tooltiptext">topic</span>
          </div>
          <div className={this.props.type === 'subtopic' ? sortedClass : unsortedClass}>
            {item.subtopic}
            <span className="tooltiptext">subtopic</span>
          </div>
          <div className={this.props.type === 'tech' ? sortedClass : unsortedClass}>
            {item.tech}
            <span className="tooltiptext">technology</span>
          </div>
          <div className={this.props.type === 'type' ? sortedClass : unsortedClass}>
            {item.type}
            <span className="tooltiptext">type</span>
          </div>
          <div className={this.props.type === 'language' ? sortedClass : unsortedClass}>
            {item.language}
            <span className="tooltiptext">written/spoken language</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
