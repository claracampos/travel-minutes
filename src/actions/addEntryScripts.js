import { database } from "../firebase/firebase";

const handleEntryFormSubmit = e => {
  e.preventDefault();
  database.ref("place").set(e.target.elements.place.value);
  database.ref("seen").set(e.target.elements.seen.value);
  database.ref("done").set(e.target.elements.done.value);
  database.ref("people").set(e.target.elements.people.value);
};
export default handleEntryFormSubmit;
