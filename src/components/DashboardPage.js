import React, { useState, useContext, useEffect } from "react";
import { database } from "../firebase/firebase";
import AppContext from "../context/AppContext";

const DashboardPage = () => {
  const { user } = useContext(AppContext);
  const [journalEntries, setJournalEntries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await database.ref(`users/${user}`).once("value");
      const entries = [];

      data.forEach(entry => {
        entries.push({ id: entry.key, ...entry.val() });
      });
      setJournalEntries(entries);
    };

    fetchData();
  }, [user]);

  console.log(journalEntries);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
