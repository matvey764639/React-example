import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

interface DeletePostProps {
  show: boolean;
  handleYes: () => void;
  handleNo: () => void;
}

function DeletePost(props: DeletePostProps) {
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Удалить пост?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={() => props.handleYes()}>
          Да
        </Button>
        <Button variant="secondary" onClick={() => props.handleNo()}>
          Нет
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default DeletePost;
