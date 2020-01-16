import { database } from "../firebase/firebase";

const addEntry = (e, user, date, callback) => {
  e.preventDefault();
  const formattedDate = date.toLocaleDateString();

  const dateKey = `${32503680000000 - date.valueOf()}-${Date.now().valueOf()}`;

  database.ref(`users/${user}/${dateKey}`).set(
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

  database.ref(`users/${user}/${id}`).update(
    {
      place: e.target.elements.place.value,
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
      .ref(`users/${user}/${id}`)
      .remove(error => (error ? alert(error) : callback()));
  }
};

export { addEntry, editEntry, deleteEntry };
