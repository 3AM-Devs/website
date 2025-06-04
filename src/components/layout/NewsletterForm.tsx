import React, { useState } from "react";

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

    // Mailchimp API credentials
  const API_KEY = "z$&5Nn!Qffg7t4fR"; 
  const LIST_ID = "b6e2e6b2e2";
  const DC = "us22";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }
    if (!consent) {
      setMessage("You must consent to receive emails.");
      return;
    }
    setLoading(true);
    try {
        // Mailchimp API endpoint for adding a new member
      const url = `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
      const data = {
        email_address: email,
        status: "subscribed"
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Basic ${btoa('anystring:' + API_KEY)}`
        },
        body: JSON.stringify(data)
      });
      if (response.status === 200 || response.status === 201) {
        setMessage("Thank you for subscribing!");
        setEmail("");
        setConsent(false);
      } else {
        const resp = await response.json();
        setMessage(resp.detail || resp.title || "Subscription failed. Try again later.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`flex flex-col gap-2 ${className}`} onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-muted text-foreground rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      <label className="flex items-center text-xs text-muted-foreground gap-2">
        <input
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          required
        />
        I consent to receive emails and accept the <a href="/privacy-policy" className="underline ml-1">Privacy Policy</a>.
      </label>
      {message && <p className="text-xs text-primary mt-1">{message}</p>}
    </form>
  );
};

export default NewsletterForm;
