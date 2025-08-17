const router = require("express").Router();
// const { response } = require("express");
const { Resend } = require('resend');
const contact = require("../models/contact")

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);


router.post("/post", async (req,res) => {
    try {
        const {name, email, message} = req.body;

         if (!name || !email || !message) {
            return res.status(400).json({ 
                message: "All fields (name, email, message) are required" 
            });
        }

     // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                message: "Invalid email format" 
            });
        }

        const newContact = new contact({name, email, message});
        await newContact.save();

// Send email using Resend
        const emailResponse = await resend.emails.send({
              from: 'Acme <onboarding@resend.dev>', // Must be from your verified domain
            to: ['shehkhan494@gmail.com'],
            subject: `New Portfolio Message from ${name}`,
            replyTo: email, // This allows you to reply directly to the sender
            html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px;">New Portfolio Contact</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new message from your portfolio website</p>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; font-weight: bold; color: #555; width: 80px;">Name:</td>
                                    <td style="padding: 8px 0; color: #333;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Date:</td>
                                    <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: #333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h2>
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
                                <p style="margin: 0; line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
                            </div>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 20px; background: #e9ecef; border-radius: 6px; text-align: center;">
                            <p style="margin: 0; color: #6c757d; font-size: 14px;">
                                <strong>Quick Actions:</strong><br>
                                <a href="mailto:${email}?subject=Re: Your Portfolio Inquiry" style="color: #667eea; text-decoration: none; margin: 0 10px;">Reply to ${name}</a> |
                                <a href="mailto:${email}" style="color: #667eea; text-decoration: none; margin: 0 10px;">Send New Email</a>
                            </p>
                        </div>
                    </div>
                </div>
            `
        });

                console.log('Email sent successfully:', emailResponse);

   
        // Send success response
        res.status(200).json({ 
            message: "Message sent and data saved successfully",
            emailId: emailResponse.data?.id 
        });

    } catch (error) {
        console.error("Error occurred:", error);

    if (error.message && error.message.includes('Resend')) {
            return res.status(500).json({ 
                message: "Email service error. Please try again later." 
            });
        }

        res.status(500).json({ message: "An error occurred. Message not sent." });
    }
});



module.exports= router;








