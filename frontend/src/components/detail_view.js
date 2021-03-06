import React, {Component} from 'react';

import Navigation from './navigation';
import GlobalError from '../containers/global_errors'
import SampleDetails from '../containers/sample_details'

export default class DetailView extends Component {
  componentDidMount() {
    document.title = `${process.env.REACT_APP_SITE_NAME} - ${this.props.match.params.sha2}`;
  }

  render() {
    return (
      <div>
        <Navigation history={this.props.history}/>
        <GlobalError/>
        <SampleDetails sha2={this.props.match.params.sha2}/>
      </div>
    );
  }
}