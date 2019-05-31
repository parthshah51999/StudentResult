import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import HomePage from './HomePage';
import ResultPage from './ResultPage';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      displayPage: 'Home'
    }
    this.doRenderPageContent = this.doRenderPageContent.bind(this);
    this.breadCrumbClick = this.breadCrumbClick.bind(this);
  }

  breadCrumbClick(pageName) {
    this.setState({
      displayPage: pageName
    })
  }

  doRenderPageContent() {
    if(this.state.displayPage === 'Home')
      return <HomePage />
    else if (this.state.displayPage === 'StudentList')
      return <ResultPage />
  }

  render() {
    return (
      <div className="PageContent">
        <BreadCrumbs breadCrumbClick={this.breadCrumbClick}/>
        {this.doRenderPageContent()}
      </div>
    );
  }
}

export default Main;
