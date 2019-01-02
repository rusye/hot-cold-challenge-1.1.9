import React from 'react';
// may not need this file

export default function AuralStatus(props) {
  return (
    <p id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true">{props.auralStatus}
    </p>
  );
}