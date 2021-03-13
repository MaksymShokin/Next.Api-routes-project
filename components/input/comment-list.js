import { useState, useEffect } from 'react';
import classes from './comment-list.module.css';

function CommentList({ eventId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments/${eventId}`)
      .then(res => res.json())
      .then(res => setComments(res.commentsData));
  }, []);

  return (
    <ul className={classes.comments}>
      {comments.map(({ email, name, text }, index) => {
        return (
          <li key={index}>
            <p>{text}</p>
            <div>
              By <address>{name}</address>
            </div>
          </li>
        );
      })}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
