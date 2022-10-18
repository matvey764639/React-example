import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface EditPostProps{
    show:boolean;
    post:PostItem;
    handleSave:(id:number, title:string, body:string)=>void;
    handleClose:()=>void;
}


function EditPost(props: EditPostProps) {
    const [title, setTitle] = useState(props.post.title)
    const [body, setBody] = useState(props.post.body)
    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Edit post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Body</label>
                    <input
                        value={body}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => props.handleSave(props.post.id, title, body)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditPost;