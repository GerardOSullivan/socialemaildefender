// pages/newsletter-thank-you.js
import Link from 'next/link';

const NewsletterThankYou = () => {
  return (
    <div className="container mx-auto">
      <h1>Thank You for Subscribing!</h1>
      <p>We appreciate your interest in our newsletter.</p>
      <Link href="/">
        <a>Return to Home</a>
      </Link>
    </div>
  );
};

export default NewsletterThankYou;
