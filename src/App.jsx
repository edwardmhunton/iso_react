import React from 'react';
import { connect} from 'react-redux';
import QuestionsList from './components/QuestionsList';

const AppDisplay = ({test}) => (


<div>
<h1>     Iso React {test}     </h1>
<QuestionsList />
</div>


);

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AppDisplay);
