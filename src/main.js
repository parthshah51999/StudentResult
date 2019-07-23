import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import HomePage from './HomePage';
import ResultPage from './ResultPage';
import DetailResult from './DetailResult';
import Data from './result.json';
import './css/style';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      studentsData: Data.results,
      displayPage: 'Home',
      indStudent: {},
    };
    this.doRenderPageContent = this.doRenderPageContent.bind(this);
    this.breadCrumbClick = this.breadCrumbClick.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  breadCrumbClick(displayPage) {
    this.setState({
      displayPage,
    });
  }

  displayResult(displayPage, indStudent) {
    this.setState({
      displayPage,
      indStudent,
    });
  }

  doRenderPageContent() {
    const { displayPage, studentsData, indStudent } = this.state;
    if (displayPage === 'Home') {
      return <HomePage />;
    }
    if (displayPage === 'StudentList') {
      return (
        <ResultPage
          studentsData={studentsData}
          displayResult={this.displayResult}
        />
      );
    }
    if (displayPage === 'DetailResult') {
      return <DetailResult indStudent={indStudent} />;
    }
    return <HomePage />;
  }

  render() {
    const { displayPage } = this.state;
    return (
      <div className="PageContent">
        <BreadCrumbs
          breadCrumbClick={this.breadCrumbClick}
          currentPage={displayPage}
        />
        {this.doRenderPageContent()}
      </div>
    );
  }
}

export default Main;
