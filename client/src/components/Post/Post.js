import React from 'react';
import clsx from 'clsx';
import { UserInfo } from '../UserInfo/UserInfo';

const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const onClickRemove = () => {};
  return (
    <div className="c"></div>
  );
};

export default Post;
