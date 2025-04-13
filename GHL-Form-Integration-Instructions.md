# GoHighLevel Form Integration Instructions

## Overview

You've successfully integrated the GoHighLevel (GHL) form into your website. The form is now embedded in the footer section of your website, replacing the previous placeholder form. To make the GHL form match your website's styling perfectly, you'll need to add custom CSS in the GHL form builder.

## Steps to Apply Custom CSS in GHL Form Builder

1. **Log in to your GoHighLevel account**

2. **Navigate to your form**:
   - Go to Sites -> Forms
   - Find your "Website simple email form" and click on it to edit

3. **Access the Custom CSS section**:
   - In the form builder, look for the "CUSTOM CSS" option (usually in the right sidebar or under advanced settings)
   - Click to expand this section

4. **Copy and paste the following CSS**:
   ```css
   .ghl-form-wrap {
     font-family: 'Google Sans', sans-serif;
     max-width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 12px;
   }

   .ghl-question-set {
     flex: 1;
     margin: 0;
   }

   .ghl-question {
     margin-bottom: 0;
   }

   .ghl-question input[type="email"] {
     border-radius: 9999px !important;
     padding: 0.75rem 1.5rem !important;
     font-size: 14px !important;
     line-height: 20px !important;
     background-color: white !important;
     border: 0 !important;
     box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
     outline: 1px solid #dadce0 !important;
     color: #202124 !important;
     width: 100% !important;
     height: 46px !important;
   }

   .ghl-question input[type="email"]::placeholder {
     color: #5f6368 !important;
   }

   .ghl-question input[type="email"]:focus {
     outline: 2px solid #1a73e8 !important;
     outline-offset: -1px !important;
   }

   .ghl-footer {
     margin: 0 !important;
     padding: 0 !important;
     width: auto !important;
   }

   .ghl-footer button {
     border-radius: 9999px !important;
     padding: 0.75rem 1.5rem !important;
     font-size: 14px !important;
     line-height: 20px !important;
     font-weight: 500 !important;
     background: linear-gradient(to right, #2563eb, #4f46e5) !important;
     color: white !important;
     border: none !important;
     box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3) !important;
     transition: all 0.3s ease !important;
     position: relative !important;
     overflow: hidden !important;
     height: 46px !important;
     white-space: nowrap !important;
   }

   .ghl-footer button:hover {
     background: linear-gradient(to right, #1d4ed8, #4338ca) !important;
   }

   .ghl-footer button::after {
     content: '' !important;
     position: absolute !important;
     inset: 0 !important;
     background: linear-gradient(to right, #4f46e5, #2563eb) !important;
     opacity: 0 !important;
     transition: opacity 0.3s ease !important;
   }

   .ghl-footer button:hover::after {
     opacity: 1 !important;
   }

   .ghl-footer button span {
     position: relative !important;
     z-index: 10 !important;
   }

   .ghl-form-title {
     display: none !important;
   }

   .ghl-question label {
     display: none !important;
   }
   ```

5. **Save your changes** in the GHL form builder

6. **Update form settings (if needed)**:
   - Make sure the button text is set to "Subscribe" to match your website's design
   - Ensure the form is configured to only show the Email field
   - Set appropriate form submission actions (e.g., thank you message, redirect, etc.)

## Form Customization Tips

- **Button Text**: Change the button text to "Subscribe" in the GHL form builder to match your current design
- **Placeholder Text**: Set the email field placeholder to "Enter your email" to match your current form
- **Form Height**: If the form appears too tall or short on your website, you can adjust the height in the footer.tsx file (currently set to 100px)
- **Button Color**: Make sure to apply the custom CSS to change the button color from green to the blue gradient that matches your site
- **Form Layout**: The custom CSS is designed to make the form display in a horizontal layout with the email field and button side by side, similar to your original form

## Troubleshooting

If the form doesn't appear correctly:

1. **Check browser console** for any JavaScript errors
2. **Verify the iframe is loading** correctly
3. **Adjust the height** of the form container if needed
4. **Ensure the custom CSS** is properly applied in the GHL form builder

## Additional Notes

- The form is now fully functional and will submit data directly to your GoHighLevel account
- All form submissions will be tracked in your GHL dashboard
- You can set up automations in GHL to respond to form submissions (e.g., send welcome emails, add to workflows, etc.)
