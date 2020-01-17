import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import EditEntryForm from "../components/forms/EditEntryForm";
import GoHomeButton from "../components/GoHomeButton";
import { deleteEntry } from "../utils/entryUtils";

const EditEntryPage = () => {
  const { id } = useParams();
  const { user } = useContext(AppContext);
  const [entry, setEntry] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await database
        .ref(`users/${user}/entries/${id}`)
        .once("value");

      data.exists()
        ? setEntry({ id: id, ...data.val() })
        : history.replace("/error");
    };
    fetchData();
  }, [id, user, history]);

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
