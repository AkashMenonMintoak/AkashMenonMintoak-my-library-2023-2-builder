import React from "react";

export default function CancellationPolicy() {
  return (
    <div className="mintoak-library-cancelation-policy-div">
      <h3>
        <b>Cancellation Policy</b>
      </h3>
      <ul className="mintoak-library-cancelation-policy-ul">
        <li>Full refund if order is cancelled before confirmation</li>
        <li>No refund if the order is already accepted or dispatched</li>
        <li>For any queries on cancellations, please chat with the seller</li>
      </ul>
    </div>
  );
}
