import React from 'react';

const crumbs = ['Home', 'StudentList', 'DetailResult'];

export default class BreadCrumbs extends React.Component {
  breadCrumbClick(page) {
    const { breadCrumbClick } = this.props;
    return breadCrumbClick(page);
  }

  render() {
    let fCrumbs = [...crumbs];
    const { currentPage } = this.props;
    fCrumbs = currentPage !== 'DetailResult' ? crumbs.slice(0, 2) : [...crumbs];
    return (
      <ul>
        {
          fCrumbs.map((item) => {
            return (
              <li
                key={item}
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
