import React from "react";
import styles from './add-pop-up.module.css';
import PopUpLayout from "../pop-up-layout/pop-up-layout";

function AddPopUp({ handleCLose }) {

    return (
      <PopUpLayout handleCLose={handleCLose}>
        <h1> it is popup</h1>
      </PopUpLayout>
    )
}

export default AddPopUp;
