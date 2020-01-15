import { database } from "../firebase/firebase";

const addEntry = (e, user, callback) => {
  e.preventDefault();

  database.ref(`users/${user}`).push(
    {
      place: e.target.elements.place.value,
      seen: e.target.elements.seen.value,
      done: e.target.elements.done.value,
      met: e.target.elements.met.value
    },
    error => (error ? alert(error) : callback)
  );
};

const editEntry = (e, user, id, callback) => {
  e.preventDefault();

  database.ref(`users/${user}/${id}`).set(
    {
      place: e.target.elements.place.value,
      seen: e.target.elements.seen.value,
      done: e.target.elements.done.value,
      met: e.target.elements.met.value
    },
    error => (error ? alert(error) : callback)
  );
};

export { addEntry, editEntry };
