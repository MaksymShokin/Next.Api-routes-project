import { useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments(prevStatus => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: 'Loading...',
      // message: 'Registering for newsletter.',
      status: 'pending'
    });

    fetch(`/api/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({
        commentData
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        notificationCtx.showNotification({
          title: 'Done',
          message: 'Working',
          status: 'success'
        });
      })
      .catch(() =>
        notificationCtx.showNotification({
          title: 'Done',
          message: 'Working',
          status: 'error'
        })
      );
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList eventId={eventId} />}
    </section>
  );
}

export default Comments;
