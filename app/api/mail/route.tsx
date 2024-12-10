

//Part 11.2 - send email with data passed to this api

// import nodemailer from "nodemailer";

// if you created a new key the IAM pass should be converted using a python script as mentioned here
// https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html


export const POST = async (req:Request) => {

    try {

        //get the url and the user session
        const emailBody = await req.json();
        console.log(emailBody);

      
        

        // 200: operation succeeded
        return new Response(JSON.stringify("Email Sent"), {status: 200});


    } catch {
        return new Response(JSON.stringify("Failed to send email"), {status: 500});
    }

}