// src/utils/emailService.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_rpi3cjl';
const PUBLIC_KEY = 'b0qmHCoiOIuLvY3kJ';

emailjs.init(PUBLIC_KEY);

export const sendEmailNotification = async (formElement, templateId) => {
    try {
        
        const response = await emailjs.sendForm(SERVICE_ID, templateId, formElement);
        console.log('Email Sent Successfully!', response.status, response.text);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Email Sending Failed:', error);
        return { success: false, error: error };
    }
};