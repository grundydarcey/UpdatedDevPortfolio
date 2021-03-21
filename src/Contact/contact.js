import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <p>Here is how to get in touch with me</p>
      <form action="https://formspree.io/f/xpzkaqqy" method="post">
        <fieldset>
          <legend>Contact Me!</legend>
          <label htmlFor='name' name='name'>Your Name: </label><br />
          <input type='text' id='name' name='name' required></input><br />
          <label htmlFor='company' name='company'>Company: </label><br />
          <input type='text' id='company' name='company' required></input><br />
          <label htmlFor='email' name='email'>Email Address: </label><br />
          <input type='text' id='email' name='email' required></input><br />
          <label htmlFor='number' name='number'>Phone Number: </label><br />
          <input type='text' id='number' name='number' required></input><br />
          <label htmlFor='message' name='message'>Message: </label><br />
          <textarea id='message' name='message'></textarea><br /><br />
          <button type='submit' className='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}