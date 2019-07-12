import React from 'react';

function DaimonOTMonth(props) {

  return(
    <div>
      <h2>Daimon of the Month</h2>
      <h3>Thee-I-Dare</h3>
      <p>Tune in on {props.nextDate} at {props.nextTime}!</p>
    </div>
  )
}

export default DaimonOTMonth;