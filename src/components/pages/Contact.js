import React from 'react';
import '../../styles/Pages.css';

export default function Contact() {
  return (
    <div class="page-style">
      <h1>Contact</h1>
      <br></br>
      <form action="https://formspree.io/f/xleaagkl"  method="POST">
        <label> Email</label><br></br>
        <input type="email" name="_replyto"/><br></br>
        <label> Message</label><br></br>
        <textarea name="message"></textarea><br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
