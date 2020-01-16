import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";
import { database } from "../firebase/firebase";
import EditEntryForm from "./EditEntryForm";
import { deleteEntry } from "../actions/entryActions";
import GoHomeButton from "./GoHomeButton";

const EditEntryPage = () => {
  const { id } = useParams();
  const { user } = useContext(AppContext);
  const [entry, setEntry] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await database.ref(`users/${user}/${id}`).once("value");
      if (data.exists()) {
        setEntry({ id: id, ...data.val() });
      } else {
        history.replace("/error");
      }
    };
    fetchData();
  }, [id, user, history]);

  console.log(entry);
  return (
    <div>
      <h1>Edit Entry</h1>
      {!entry && <h1>Loading...</h1>}
      {entry && <h2>{`${entry.date} - ${entry.place}`}</h2>}
      {entry && <EditEntryForm entry={entry} />}
      <GoHomeButton>Cancel</GoHomeButton>
      <button
        onClick={() => deleteEntry(user, id, () => history.push("/dashboard"))}
      >
        Delete Entry
      </button>
    </div>
  );
};

export default EditEntryPage;
