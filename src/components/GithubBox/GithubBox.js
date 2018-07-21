import React from 'react';
import { Link } from 'react-router';
// 引入 material-ui 的卡片式组件
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
} from 'material-ui/Card';
// 引入 material-ui 的 RaisedButton
import RaisedButton from 'material-ui/RaisedButton';
// 引入 ActionHome icon
import ActionHome from 'material-ui/svg-icons/action/home';

const GithubBox = ({ data, visible, userId }) => (
  <div>
    {visible ? (
      '正在加载'
    ) : (
      <Card>
        <CardHeader title={data.get('name')} subtitle={userId} avatar={data.get('avatar_url')} />
        <CardText>
          Followers :
          {data.get('followers')}
        </CardText>
        <CardText>
          Following :
          {data.get('following')}
        </CardText>
        <CardActions>
          <Link to="/">
            <RaisedButton label="Back" icon={<ActionHome />} secondary />
          </Link>
        </CardActions>
      </Card>
    )}
  </div>
);

export default GithubBox;
