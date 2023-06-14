const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("");
const objmsg = {
    to: [],
    from: '', // Use the email address or domain you verified above
    subject: 'Welcome to Medical solutions project',
    html: `<strong>Below are the project Details: 
                <div>
                    Client: ${'Medical Solutions'}
                </div>
                <div>
                    Project: ${'PRN'}
                </div>
                
            </strong>`,
};
const sendMail = (emailData) => {
    // const msg = {
    //     to: data.to,
    //     from: 'rgaddam@evoketechnologies.com', // Use the email address or domain you verified above
    //     subject: data.subject,
    //     html: data.body,
    // };
    //ES6
    sgMail
        .send(emailData)
        .then((response) => { 
            console.log(response);
        }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body);
            }
        })
    // try {
    //   sgMail.send(msg);
    // } catch (error) {
    //   console.error(error);

    //   if (error.response) {
    //     console.error(error.response.body)
    //   }
    // }

}

module.exports = sendMail;
