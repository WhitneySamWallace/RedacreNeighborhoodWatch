import React from 'react';
import '../styles/SpecialOTMonth.css';

function SpecialOTMonth(props) {

  return(
    <div className="special-of-the-month">
      <h2>Daimon of the Month</h2>
      <h3>Thee-I-Dare</h3>
      <p>Tune in on {props.nextDate} at {props.nextTime}!</p>
    </div>
  )
}

export default SpecialOTMonth;