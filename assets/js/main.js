document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formParams = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                subject: contactForm.subject.value,
                message: contactForm.message.value
            };

            emailjs.send('service_caw3upe', 'template_bn2igxh', formParams)
                .then(function() {
                    alert('Message sent successfully!');
                    contactForm.reset(); 
                }, function(error) {
                    alert('An error occurred while sending the message: ' + JSON.stringify(error));
                    console.error("EmailJS Error:", error); 
                });
        });
    }
});
