# EmailJS Setup Instructions

To make your contact form functional, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save the template and note the **Template ID** (e.g., `template_xyz456`)

## 4. Get Public Key
1. Go to "Integration" in your dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

## 5. Update Your Code
Replace the placeholder values in your contact form:

```javascript
// In Contactus.jsx, replace these values:
const serviceId = "service_your_service_id"; // Replace with your Service ID
const templateId = "template_your_template_id"; // Replace with your Template ID  
const publicKey = "your_public_key"; // Replace with your Public Key
```

## 6. Test Your Form
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit a test message
4. Check your email to confirm it works!

## Example Configuration
```javascript
const serviceId = "service_abc123";
const templateId = "template_xyz456";
const publicKey = "user_abc123def456";
```

## Troubleshooting
- Make sure your email service is properly connected
- Verify template variable names match exactly
- Check EmailJS dashboard for failed sends
- Ensure your domain is allowed (for production)

Your contact form will now send emails directly to newtonombese1@gmail.com!
