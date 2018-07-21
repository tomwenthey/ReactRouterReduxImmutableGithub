import Immutable from 'immutable';

export const UiState = Immutable.fromJS({
  spinnerVisible: false,
});

// 我们使用 userId 来暂存使用者 ID，data 存放 Ajax 取回的资料
export const GithubState = Immutable.fromJS({
  userId: '',
  data: {},
});
