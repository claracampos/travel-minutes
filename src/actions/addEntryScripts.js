import { database } from "../firebase/firebase";

const handleEntryFormSubmit = (e, user) => {
  e.preventDefault();

  database.ref(`users/${user}`).push({
    place: e.target.elements.place.value,
    seen: e.target.elements.seen.value,
    done: e.target.elements.done.value,
    people: e.target.elements.people.value
  });
};
export default handleEntryFormSubmit;
