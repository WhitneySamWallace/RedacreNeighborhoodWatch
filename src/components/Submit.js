import React from 'react';

function Submit() {

  return(
    <div>
      <h2>Form for Submission</h2>
      <form>
        <label htmlFor="link-input">Link: </label>
        <input 
        id="link-input" 
        type="url"
        aria-required="true"
        aria-describedby="link-constraint"
        required
        />
        <div id="link-constraint">Direct Link to submission on Twitter, dArt, Tumblr, ArtStation, etc.</div>

        <label htmlFor="name-input">Name: </label>
        <input 
        id="name-input"
        type="text"
        aria-required="true"
        aria-describedby="name-constraint"
        required
        />
        <div id="name-constraint">The name you would like us to refer to you as the artist.</div>

        <label htmlFor="credit-input">Credit: </label>
        <input 
        id="credit-input"
        type="url"
        aria-required="true"
        aria-describedby="credit-constraint"
        required
        />
        <div id="credit-constraint">Direct link to the credit you'd like us to display with your submission.</div>

        <label htmlFor="pronoun-input">Preferred Pronouns: </label>
        <input 
        id="pronoun-input"
        type="text"
        aria-required="true"
        aria-describedby="pronoun-constraint"
        required
        />
        <div id="pronoun-constraint">Your preferred pronouns - he/him, she/her, they/them, etc.</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Submit;