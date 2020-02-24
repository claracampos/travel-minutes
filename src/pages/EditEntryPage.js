import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";
import EditEntryForm from "../components/forms/EditEntryForm";
import PrivateNavBar from "../components/PrivateNavBar";
import LoadingSpinner from "../components/LoadingSpinner";

const EditEntryPage = () => {
  const { id } = useParams();
  const { user } = useContext(AppContext);
  const [entry, setEntry] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await database
          .ref(`users/${user}/entries/${id}`)
          .once("value");

        data.exists()
          ? setEntry({ id: id, ...data.val() })
          : history.replace("/error");
      } catch {
        history.replace("/error");
      }
    };
    fetchData();
  }, [id, user, history]);

  return (
    <div className="d-flex justify-content-center bg-light">
      <div className="main-container shadow-lg">
        <PrivateNavBar />
        <div className="p-4">
          <h1 className="serif h5 mb-1">Edit Entry</h1>
          {!entry && <LoadingSpinner />}
          {entry && (
            <h2 className="serif h3 text-wrap text-break mb-3">{`${entry.date} - ${entry.place}`}</h2>
          )}
          {entry && <EditEntryForm entry={entry} />}
        </div>
      </div>
    </div>
  );
};

export default EditEntryPage;
