import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Item from './Item';
import './App.css';


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentType: this.props.parentType,
      category: this.props.data,
      childType: 'none'
    };
    this.handleSort = this.handleSort.bind(this);
  }

  renderNameOrTwitter(name, url) {
    if (/^@/.test(name)) {
      return (
        <a className="twitter-follow-button"
          href={url}>
        Follow {name}</a>
      );
    } else {
      return (
        {name}
      );
    }
  }

  handleSort() {
    let categories = [
      'name',
      'prog_lang',
      'language',
      'topic',
      'subtopic',
      'tech',
      'type'
    ];
    let nextType = (categories.indexOf(this.state.childType) === 6)
      ? categories[0]
      : categories[categories.indexOf(this.state.childType)+1];

    let sorted = this.state.category.sort((a,b) => {
      if (a[nextType] < b[nextType]) {
        return -1;
      }
      if (a[nextType] > b[nextType]) {
        return 1;
      }
      return 0;
    });

    this.setState({
      category: sorted,
      childType: nextType
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      parentType: nextProps.parentType,
      category: nextProps.data,
      childType: 'none'
    });
  }

  render() {
    return (

      <div className="App">
        <div className="Cat-header">
          {this.state.parentType === 'name' ?
            <h1>Everything by name:</h1> :
            <h1>{this.state.category[0][this.state.parentType]}:</h1>
          }
        </div>
        <div className="Cat-body">
          <div className="btn sort-cat-btn" onClick={this.handleSort}>Sort this category</div>

          <FlipMove duration={1000} easing="ease-in-out">
            {this.state.category.map((item) => (
              <Item item={item} key={item.name} type={this.state.childType} />

            ))}
          </FlipMove>
        </div>

      </div>

    );
  }
}

export default Category;
