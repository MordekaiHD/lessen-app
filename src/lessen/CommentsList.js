import React, { useState } from 'react';

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div>
      <h2>Комментарии</h2>
      {comments.length > 0 ? (
        comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </div>
        ))
      ) : (
        <p>Комментариев пока нет.</p>
      )}
    </div>
  );
};

export default CommentsList;
