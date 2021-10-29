import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  id: string;
}

const PostView = ({ match }: RouteComponentProps<RouteParams>) => {
  const { id } = match.params;

  return <h1>PostView: {id}</h1>;
};

export default PostView;
