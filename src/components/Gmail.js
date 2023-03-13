// import React, { Component } from "react";
// import nodemailer from "nodemailer";
// import { google } from "googleapis";

// class EmailSender extends Component {
//   constructor(props) {
//     super(props);

//     // These id's and secrets should come from .env file.
//     this.CLIENT_ID =
//       "797244964784-15gj8vhr56bg0s1f43rmkcdagv5ia69g.apps.googleusercontent.com";
//     this.CLEINT_SECRET = "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";
//     this.REDIRECT_URI = "https://developers.google.com/oauthplayground";
//     this.REFRESH_TOKEN =
//       "1//04b9GAbA5xTgFCgYIARAAGAQSNwF-L9IrMMwJLs5DngSrVsTlgOt6LZ0xBwQRrnHMBQWXq6-AXqwsxDPuTbz_9ofCmgsU8AZAZvs";

//     this.oAuth2Client = new google.auth.OAuth2(
//       this.CLIENT_ID,
//       this.CLEINT_SECRET,
//       this.REDIRECT_URI
//     );
//     this.oAuth2Client.setCredentials({ refresh_token: this.REFRESH_TOKEN });
//   }

//   async sendMail() {
//     try {
//       const accessToken = await this.oAuth2Client.getAccessToken();

//       const transport = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           type: "OAuth2",
//           user: "zindazed@gmail.com",
//           clientId: this.CLIENT_ID,
//           clientSecret: this.CLEINT_SECRET,
//           refreshToken: this.REFRESH_TOKEN,
//           accessToken: accessToken,
//         },
//       });

//       const mailOptions = {
//         from: "zindazed@gmail.com",
//         to: "zindazed@gmail.com",
//         subject: "Hello from gmail using API",
//         text: "Hello from gmail email using API",
//         html: "<h1>Hello from gmail email using API</h1>",
//       };

//       const result = await transport.sendMail(mailOptions);
//       return result;
//     } catch (error) {
//       return error;
//     }
//   }

//   componentDidMount() {
//     this.sendMail()
//       .then((result) => console.log("Email sent...", result))
//       .catch((error) => console.log(error.message));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Sending Email</h1>
//       </div>
//     );
//   }
// }

// export default EmailSender;

// import nodemailer from "nodemailer";
// import { google } from "googleapis";

// // These id's and secrets should come from .env file.
// const CLIENT_ID =
//   "797244964784-15gj8vhr56bg0s1f43rmkcdagv5ia69g.apps.googleusercontent.com";
// const CLEINT_SECRET = "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";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN =
//   "1//04u_N2xQgS06mCgYIARAAGAQSNwF-L9IrEIVJrDZ-Zu4EGjD0T9mgr3XShFjBowdqSAi5-vE1kyq303TpyS2Yru5d0JFPKQV_hD0";

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLEINT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendMail() {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: "zindazed@gmail.com",
//         clientId: CLIENT_ID,
//         clientSecret: CLEINT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: "zindazed@gmail.com",
//       to: "zindazed@gmail.com",
//       subject: "Hello from gmail using API",
//       text: "Hello from gmail email using API",
//       html: "<h1>Hello from gmail email using API</h1>",
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

// sendMail()
//   .then((result) => console.log("Email sent...", result))
//   .catch((error) => console.log(error.message));

// import React from "react";
// import { google } from "googleapis";
// // import MimeBuilder from "emailjs-mime-builder";
// import MimeBuilder from "emailjs-mime-builder";

// class GmailSender extends React.Component {
//   constructor(props) {
//     super(props);

//     // Initialize state
//     this.state = {
//       to: "",
//       subject: "",
//       body: "",
//     };

//     // Bind methods
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     // Authenticate client
//     const auth = new google.auth.OAuth2(
//       "797244964784-15gj8vhr56bg0s1f43rmkcdagv5ia69g.apps.googleusercontent.com",
//       "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",
//       "https://developers.google.com/oauthplayground"
//     );
//     auth.setCredentials({
//       access_token:
//         "ya29.a0AVvZVsoMB4k89Eh_R65_32H2US__kQFFt3GNIWvBG1se-Q_YtSWt_Pj6nnGcRJCWkla6E2-W_uBV9cDYiKOuNLit7WbZs1SbAPB9z281Rw53penD1j46KqUNKwOWDXTegS9hEHfDBInMih_l4sSTdDDVt9NIaCgYKAfwSARMSFQGbdwaIM442uqOHd9M_qQ2sW2PdMw0163",
//       refresh_token:
//         "1//04u_N2xQgS06mCgYIARAAGAQSNwF-L9IrEIVJrDZ-Zu4EGjD0T9mgr3XShFjBowdqSAi5-vE1kyq303TpyS2Yru5d0JFPKQV_hD0",
//     });

//     // Create Gmail API client
//     const gmail = google.gmail({ version: "v1", auth });

//     // Create email message
//     const builder = new MimeBuilder();
//     builder.setSender("YOUR_EMAIL_ADDRESS");
//     builder.setSubject(this.state.subject);
//     builder.setTo(this.state.to);
//     builder.setBody(this.state.body);

//     const message = builder.build();

//     // Send email
//     gmail.users.messages.send({
//       userId: "me",
//       request: {
//         raw: message,
//       },
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           To:
//           <input
//             type="email"
//             name="to"
//             value={this.state.to}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Subject:
//           <input
//             type="text"
//             name="subject"
//             value={this.state.subject}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Body:
//           <textarea
//             name="body"
//             value={this.state.body}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// export default GmailSender;

import React from "react";
import sendMail from "../gmail";

function MyComponent() {
  const handleClick = async () => {
    try {
      const result = await sendMail();
      console.log("Email sent...", result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send Email</button>
    </div>
  );
}

export default MyComponent;
