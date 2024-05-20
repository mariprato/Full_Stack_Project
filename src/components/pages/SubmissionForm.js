import React from "react";
import Navbar from "../layout/navbar";
import ButtonSubmit from "../buttons/ButtonSubmit";
import ButtonPostNowBlue from "../buttons/ButtonPostNowBlue";

const SubmissionForm = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "50px" }}>
        <h1>This is the lost pet submission form page</h1>
        <ButtonSubmit text="Submit" />
        {/* <ButtonPostNowBlue text="Post Now" /> */}
      </div>
    </>
  );
};

export default SubmissionForm;
