import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';

import type { PropsWithChildren } from 'react';
import { type Comment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Sceleton/Skeleton';

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export function CommentCard (props: PropsWithChildren<CommentCardProps>) {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={'50%'}/>
          <Skeleton width={100} height={16} className={cls.username}/>
        </div>
        <Skeleton width={'100%'} height={50} className={cls.text}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
        <Text className={cls.username} title={comment.user.username}/>
      </div>
      <Text className={cls.text} text={comment.text}/>
    </div>
  );
}
