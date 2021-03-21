import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p className='contactp'>Thank you for taking the time to look over my portfolio of current work. If you're interested in contacting me, you can send me an email at</p><p className='emailp'>grundy.darcey@gmail.com</p><p> or feel free to send in a submission below! I will get back to you ASAP.</p>
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