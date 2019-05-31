import React from 'react';
const crumbs = ['Home','StudentList'];

export default class BreadCrumbs extends React.Component {
  breadCrumbClick(pageName) {
    return this.props.breadCrumbClick(pageName);
  }

  render() {
    return (
      <ul>
        {
          crumbs.map((item, i) => {
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
