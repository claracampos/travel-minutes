import { database } from "../firebase/firebase";
import generateId from "./generateId";

const addEntry = (e, user, date, callback) => {
  e.preventDefault();
  const formattedDate = date.toLocaleDateString();
  const id = generateId(date);

  database.ref(`users/${user}/entries/${id}`).set(
    {
      date: formattedDate,
      place: e.target.elements.place.value,
      seen: e.target.elements.seen.value,
      done: e.target.elements.done.value,
      met: e.target.elements.met.value
    },
    error => (error ? alert(error) : callback())
  );
};

const editEntry = (e, user, id, callback) => {
  e.preventDefault();

  database.ref(`users/${user}/entries/${id}`).update(
    {
      seen: e.target.elements.seen.value,
      done: e.target.elements.done.value,
      met: e.target.elements.met.value
    },
    error => (error ? alert(error) : callback())
  );
};

const deleteEntry = (user, id, callback) => {
  const confirmation = window.confirm(
    "Are you sure you would like to delete this entry? This cannot be undone."
  );

  if (confirmation) {
    database
      .ref(`users/${user}/entries/${id}`)
      .remove(error => (error ? alert(error) : callback()));
  }
};

const searchEntries = (e, entries, setSearchResults) => {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  if (!searchTerm) {
    return setSearchResults(false);
  }

  const searchResults = entries.filter(entry =>
    Object.values(entry)
      .slice(1)
      .toString()
      .toLowerCase()
      .includes(searchTerm)
  );

  setSearchResults(searchResults);
};

export { addEntry, editEntry, deleteEntry, searchEntries };
