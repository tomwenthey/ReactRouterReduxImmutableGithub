import { connect } from 'react-redux';
import HomePage from '../../components/HomePage/HomePage';

import { getGithub, changeUserId } from '../../actions';

export default connect(
  state => ({
    userId: state.getIn(['github', 'userId']),
  }),
  dispatch => ({
    onChangeUserId: e => dispatch(changeUserId(e.target.value)),
    onSubmitUserId: userId => () => dispatch(getGithub(userId)),
  }),
)(HomePage);
