import React from 'react';
const crumbs = ['Home', 'StudentList', 'DetailResult'];

export default class BreadCrumbs extends React.Component {
  breadCrumbClick(page) {
    return this.props.breadCrumbClick(page);
  }

  render() {
    let fCrumbs = [...crumbs];
    this.props.currentPage != 'DetailResult' ? fCrumbs = crumbs.slice(0, 2) : fCrumbs = crumbs;
    return (
      <ul>
        {
          fCrumbs.map((item, i) => {
            return (
              <li
                key={i}
                onClick={this.breadCrumbClick.bind(this, item)}
                >
                {item}
              </li>
            );
          })
        }
      </ul>
    );
  }
}
