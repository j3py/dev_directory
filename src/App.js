import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Category from './Category'
import './App.css';
import githubImg from './GitHub-Img.png';
import * as docs from './lists/docs.json';
import * as podcasts from './lists/podcasts.json';
import * as slack from './lists/slack.json';
import * as twitter from './lists/twitter.json';
import * as websites from './lists/websites.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentType: 'type',
      categories: [
        docs,
        podcasts,
        slack,
        twitter,
        websites
      ]
    };
    this.handleSortAll = this.handleSortAll.bind(this);
  }

  handleSortAll() {
    let categories = [
      'name',
      'prog_lang',
      'language',
      'topic',
      'subtopic',
      'tech',
      'type'
    ];
    let sorted;
    let parentType = this.state.parentType;
    // determine next type (simple iteration over array)
    let nextType = (categories.indexOf(parentType) === 6)
      ? categories[0]
      : categories[categories.indexOf(parentType)+1];
    // flatten categories
    let joined = [].concat.apply([],this.state.categories);

    // sort all by new type
    joined.sort((a,b) => {
      if (a[nextType] < b[nextType]) {
        return -1;
      }
      if (a[nextType] > b[nextType]) {
        return 1;
      }
      return 0;
    });

    if (nextType === 'name') {
      // name should be a single alphabetical array
      sorted = [joined];
    } else {
      sorted = [];
      let posArr = [];

      joined.forEach((obj) => {
        let val = obj[nextType];

        if (!posArr.includes(val)) {
          posArr.push(val);
          sorted[posArr.indexOf(val)] = [];
        }

        sorted[posArr.indexOf(val)].push(obj);
      });
    }

    this.setState({
      categories: sorted,
      parentType: nextType
    });
  }

  componentDidUpdate() {
    // load Twitter again :(
    window.twttr.widgets.load();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 id="maintitle">DEV DIRECTORY</h1>
        </div>

        <div id="sort-all-btn" className="btn" onClick={this.handleSortAll}>Sort all</div>

        <h2>Sorted by {this.state.parentType}</h2>
        <div className="App-body">
          <FlipMove duration={1000} easing="ease-in-out">
            {this.state.categories.map((item, i) => (
              <div key={i}>
                <Category
                  data={this.state.categories[i]}
                  parentType={this.state.parentType}
                  category={i}
                  sort={this.sort}>
                </Category>
              </div>
            ))}
          </FlipMove>
        </div>
        <div className="App-footer">
          <h2>
            Want to add or change something?  Make a pull request:
          </h2>
          <div>
            <a href="#"><img alt="GitHub Mark" src={githubImg}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
