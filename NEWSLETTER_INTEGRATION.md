# Newsletter Integration Documentation

## Overview
This project integrates a Mailchimp-powered newsletter subscription form directly into the website footer. Users can subscribe to updates, announcements, and news. The form is styled with Tailwind CSS and ensures GDPR-compliant consent.

---

## Service Used
- **Provider:** Mailchimp
- **API Endpoint:** `https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members`
- **Audience/List ID:** `b6e2e6b2e2`
- **Data Center:** `us22`

---

## Integration Steps

1. **Mailchimp Setup**
   - Create a Mailchimp account.
   - Create an Audience (List) and note its List ID.
   - Generate an API key from your Mailchimp account.

2. **Frontend Integration**
   - The form is implemented in `src/components/layout/NewsletterForm.tsx`.
   - The form is rendered in the footer via `src/components/layout/Footer.tsx`.
   - The form collects the user's email and explicit GDPR consent.
   - On submit, it sends a POST request to the Mailchimp API to add the subscriber.

3. **Configuration**
   - Update the following constants in `NewsletterForm.tsx` if needed:
     ```ts
     const API_KEY = "<YOUR_API_KEY>";
     const LIST_ID = "<YOUR_LIST_ID>";
     const DC = "<YOUR_DATA_CENTER>";
     ```
   - **Warning:** The API key is exposed in the frontend for demo purposes. For production, use a backend or serverless function to proxy requests securely.

4. **GDPR Compliance**
   - The form includes a required consent checkbox and a link to the Privacy Policy.

5. **Testing**
   - Enter a valid email and check the consent box.
   - Submit the form and verify the email is added to your Mailchimp audience.
   - Test with both valid and invalid emails to ensure error handling.

6. **Deployment**
   - Deploy your site as usual. The form will work in the footer on all pages.

---

## Maintenance & Scalability
- To change the newsletter provider, update the logic in `NewsletterForm.tsx`.
- To update styling, edit the form's Tailwind classes.
- For improved security, move API calls to a backend/serverless function and remove the API key from the frontend.

---

## File References
- **Form Logic:** `src/components/layout/NewsletterForm.tsx`
- **Footer Integration:** `src/components/layout/Footer.tsx`

---

## Contact
For questions or issues, contact the dev team at [3amdevs@proton.me](mailto:3amdevs@proton.me).
