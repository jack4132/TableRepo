import React from "react";
import {useDispatch} from "react-redux";
import {userAction} from "../../../Action/user.action";
import "./Modal.component.css";

function Modal({setModal, edit, setEdit, modal}) {
  const dispatch = useDispatch();
  const submit = async () => {
    console.log(edit);
    const res = await dispatch(userAction.editUser(edit, modal));
    res && dispatch(userAction.getUser());
    setModal(false);
    setEdit({Name: "", age: "", email: ""});
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <div>
          name
          <input onChange={e => setEdit({...edit, Name: e.target.value})} />
        </div>
        <div>
          age:::
          <input
            type={"number"}
            onChange={e => setEdit({...edit, age: e.target.value})}
          />
        </div>
        <div>
          email
          <input
            type={"email"}
            onChange={e => setEdit({...edit, email: e.target.value})}
          />
        </div>
        <div className="btn-container">
          <button onClick={submit}>Submit</button>
          <button onClick={() => setModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
