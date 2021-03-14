import { useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailRef = useRef(null);
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending'
    });

    const email = emailRef.current.value;

    if (!email) {
      return;
    }

    fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      // .then(res => {
      //   setTimeout(() => {
      //     return res;
      //   }, 1000);
      // })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error
      })
      .then(res => {
        notificationCtx.showNotification({
          title: 'Register',
          message: 'Registered for newsletter.',
          status: 'success'
        });
      })
      .catch(res => {
        notificationCtx.showNotification({
          title: 'Error',
          message: 'Something went wrong.',
          status: 'error'
        });
      });

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
