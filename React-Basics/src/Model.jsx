import React from "react";
import "./Model.css";

export default function Model({ closeModal, errorMassage }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        {errorMassage ? (
          <>
            <h2 className="error-message">Error</h2>
            <p className="error-message">{errorMassage}</p>
            <button style={{background:"red"}} onClick={closeModal}>Close</button>
          </>
        ) : (
          <>
            <h2>✅ Success</h2>
            <p>The Form Has Been Submitted Successfully</p>
            <button onClick={closeModal}>Close</button>
          </>
        )}

        
      </div>
    </div>
  );
}