import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import HomePage from './HomePage';
import ResultPage from './ResultPage';
import DetailResult from './DetailResult';
import Data from './result.json'

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      studentsData: Data.results,
      displayPage: 'Home',
      indStudent: {},
    }
    this.doRenderPageContent = this.doRenderPageContent.bind(this);
    this.breadCrumbClick = this.breadCrumbClick.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  breadCrumbClick(displayPage) {
    this.setState({
      displayPage,
    })
  }

  displayResult(displayPage, indStudent) {
    this.setState({
      displayPage,
      indStudent,
    })
  }

  doRenderPageContent() {
    if(this.state.displayPage === 'Home')
      return <HomePage />
    else if (this.state.displayPage === 'StudentList')
      return <ResultPage
      studentsData={this.state.studentsData}
      displayResult={this.displayResult}
      />
    else if (this.state.displayPage === 'DetailResult')
      return <DetailResult indStudent={this.state.indStudent}/>
  }

  render() {
    return (
      <div className="PageContent">
        <BreadCrumbs
        breadCrumbClick={this.breadCrumbClick}
        currentPage={this.state.displayPage}
        />
        {this.doRenderPageContent()}
      </div>
    );
  }
}

export default Main;
