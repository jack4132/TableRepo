import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../../Action/user.action";
import Modal from "../Modal/Modal.component";
import Pagination from "../Pagination/Pagination.component";
import Search from "../Search/Search.component";
import "./Table.component.css";

function Table() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.user_data);
  let data = [
    {
      id: 110,
      isActive: false,
      age: 24,
      Name: "Mann Elliott",
      gender: "male",
      email: "mannelliott@nurplex.com",
    },
    {
      id: 111,
      isActive: false,
      age: 24,
      Name: "Mann Elliott",
      gender: "male",
      email: "mannelliott@nurplex.com",
    },
  ];
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([...data]);
  const [modal, setModal] = useState(false);
  const editData = {
    age: "",
    Name: "",
    email: "",
  };
  const [edit, setEdit] = useState({...editData});
  console.log(search);
  useEffect(() => {
    dispatch(userAction.getUser());
    // axios.get("https://smarthub-test.herokuapp.com/account/list");
  }, []);
  useEffect(() => {
    setAllData(
      data.filter(d => d?.Name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);
  const deleteItem = async (d, index) => {
    const res = await dispatch(userAction.deleteUser(d.id));
    res && dispatch(userAction.getUser());
    console.log(
      data.filter((val, ind) => d.id !== val.id),
      d,
      index
    );
    setAllData(allData.filter((val, ind) => d.id !== val.id));
  };
  return (
    <div className="container">
      <section className="section-container">
        <Search setSearch={setSearch} />
      </section>
      <section className="section-container">
        <table>
          <thead>
            <tr className="thead">
              <th>Activity</th>
              <th>Age</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allData?.length
              ? allData.map((d, index) =>
                  (page - 1) * 10 <= index < page * 10 ? (
                    <tr key={index}>
                      <td>{d?.isActive ? "true" : "false"}</td>
                      <td>{d?.age}</td>
                      <td>{d?.Name}</td>
                      <td>{d?.gender}</td>
                      <td>{d?.email}</td>
                      <td className="actions">
                        <p onClick={() => setModal(d?.id)}>Edit</p>
                        <p onClick={() => deleteItem(d, index)}>Delete</p>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )
              : ""}
          </tbody>
        </table>
      </section>
      <section className="section-container-start">
        <Pagination setPage={setPage} page={page} length={allData?.length} />
        <div>
          showing {(page - 1) * 10 + 1} to {(page - 1) * 10 + 1 + 9} of{" "}
          {allData?.length}
        </div>
      </section>
      <section className="section-container">
        {modal ? (
          <Modal
            setModal={setModal}
            edit={edit}
            setEdit={setEdit}
            modal={modal}
          />
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Table;
