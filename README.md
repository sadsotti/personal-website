# My Website - Lorenzo Sottile

This repository contains the source code of my personal website, developed as a practical project within the **HTML & CSS** course at **start2impact**.

---

## 🚀 Project Overview

This project is a static personal website, entirely built using HTML, CSS (with Sass), and the Bootstrap 5 framework. The main goal is to showcase my front-end web development skills and provide a professional point of contact.

The website includes the following main sections:

* **Homepage:** A welcome and introduction page.  
* **CV (Curriculum Vitae):** A detailed section about my professional and educational background.  
* **Contact Me:** A functional contact form to facilitate communication.

---

## ✨ Main Features

* **Responsive Design:** A layout that adapts and is optimized for different screen sizes (desktop, tablet, mobile) thanks to Bootstrap 5.  
* **Semantic HTML:** Clean, well-structured, and semantically correct HTML code.  
* **Advanced Styling with Sass:** Efficient and modular management of CSS using the Sass preprocessor.  
* **Working Contact Form:** Client-side integration with [EmailJS](https://www.emailjs.com/) to send messages directly without the need for a backend server.  
* **Professional Icons:** Use of Bootstrap Icons to enhance the user interface.  
* **Custom Fonts:** Fonts imported from Google Fonts (`VT323`).

---

## 🛠️ Technologies Used

* **HTML5**  
* **CSS3**  
* **Sass (SCSS)**  
* **Bootstrap 5**  
* **JavaScript** (Only for EmailJS integration)  
* **EmailJS** (for managing the contact form)

---

## 📧 Contact Form Configuration (EmailJS)

The contact form uses EmailJS to send emails directly from the browser. To make it work properly, you need to:

1. Create an account on [EmailJS](https://www.emailjs.com/).  
2. Get your **Public Key** from the "Account" section in the left menu on EmailJS.  
3. Set up a **Service ID** and a **Template ID**.  
4. Update the file (in my case) `contact-me.html` with the **EmailJS Public Key**:

    ```html
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script> 
    <script type="text/javascript">
       (function() {
          emailjs.init('THE_PUBLIC_KEY_PROVIDED_BY_EMAILJS'); // watch out for the source — EmailJS likes to change it!
       })();
    </script>
    ```

5. Update the file `assets/js/main.js` with your **Service ID** and **Template ID**:

    ```javascript
    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formParams) // of course, replace SERVICE_ID and TEMPLATE_ID
    ```

---

## 🔗 Useful Links

* **View the Project:** [https://sadsotti.github.io/personal-website/](https://sadsotti.github.io/personal-website/)  
* **start2impact:** [https://www.start2impact.it/](https://www.start2impact.it/)  
* **EmailJS:** [https://www.emailjs.com/](https://www.emailjs.com/)
