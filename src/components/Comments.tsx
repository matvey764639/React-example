import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

interface CommentProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function MakeComment(props: CommentProps) {
  return (
    <>
      <h3>{props.name}</h3>
      <div>{props.body}</div>
    </>
  );
}

interface CommentsProps {
  postId: number;
  show: boolean;
  hideComments: () => void;
}

function Comments(props: CommentsProps) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCommentsData = async () => {
    try {
      let url =
        "https://jsonplaceholder.typicode.com/posts/" +
        props.postId.toString() +
        "/comments";
      setLoading(true);
      const response = await fetch(url);
      const c = await response.json();
      setLoading(false);
      setComments(c);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <Modal show={props.show} onHide={() => props.hideComments()}>
      <Modal.Header>
        <Modal.Title className="text-center">Комментарии</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {comments.length > 0 ? (
          comments.map((comment: any) => (
            <MakeComment key={comment.id} {...comment} />
          ))
        ) : loading ? (
          <h4>
            {<Spinner animation="border" role="status" />} Загрузка
            комментариев...
          </h4>
        ) : (
          <h4>No comments</h4>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default Comments;
