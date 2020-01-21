import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PrivateNavBar from "../components/PrivateNavBar";
import PublicNavBar from "../components/PublicNavBar";
import button from "../media/button.jpg";

const HelpPage = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="pb-3">
      {user ? <PrivateNavBar /> : <PublicNavBar />}
      <div className="m-3">
        <h1 className="serif text-left pb-3">Help</h1>
        <p className="font-weight-bold mb-0">How do I register?</p>
        <p>There’s no need to - simply log in with your Google account.</p>
        <p className="font-weight-bold mb-0">
          Can I log in with anything other than a Google account?
        </p>
        <p>Unfortunately not. (Sorry!)</p>
        <p className="lead mb-2 font-italic">After logging in:</p>
        <p className="font-weight-bold mb-0">How do I add an entry?</p>
        <p>
          You can add entries by clicking
          <img
            src={button}
            alt="blue button with a plus sign"
            className="button-image rounded-circle mx-1"
          />
          on your <i>Travel Log</i> page or the “Add entry” option in the
          navigation bar/dropdown menu.
        </p>
        <p className="font-weight-bold mb-0">How do I edit an entry?</p>
        <p>
          On your <i>Travel Log</i> page, find the entry you would like to alter
          and click the side button to expand it. Click “Edit” at the bottom of
          the entry to alter the details.
        </p>
        <p className="font-weight-bold mb-0">How do I delete an entry?</p>
        <p>
          Follow the steps above (<i>"How do I edit an entry?"</i>). At the
          bottom of the Edit page, you will find a “Delete entry” option. Please
          note that once an entry has been deleted, it cannot be restored -- it
          is gone for good.
        </p>
        <p className="font-weight-bold mb-0">
          Why is there a 100-character limit in the forms?
        </p>
        <p>
          To encourage you to write entries that are short, sweet and to the
          point. That way you can spend less time documenting your adventures
          and more time having them!
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
