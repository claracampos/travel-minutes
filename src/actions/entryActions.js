import { database } from "../firebase/firebase";

const addEntry = (e, user) => {
  e.preventDefault();

  database.ref(`users/${user}`).push({
    place: e.target.elements.place.value,
    seen: e.target.elements.seen.value,
    done: e.target.elements.done.value,
    met: e.target.elements.met.value
  });
};

const editEntry = (e, user, id) => {
  e.preventDefault();

  database.ref(`users/${user}/${id}`).update({
    place: e.target.elements.place.value,
    seen: e.target.elements.seen.value,
    done: e.target.elements.done.value,
    met: e.target.elements.met.value
  });
};

export { addEntry, editEntry };
