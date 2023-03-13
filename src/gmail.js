// import nodemailer from "nodemailer";
// import { google } from "googleapis";

// // These id's and secrets should come from .env file.
// const CLIENT_ID =
//   "797244964784-15gj8vhr56bg0s1f43rmkcdagv5ia69g.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN =
//   "1//04p41O8426VxhCgYIARAAGAQSNwF-L9IrA7Q_TPEd4qubTgq6j9OK0yehehkvuMqCTWzkliWWl68lESvfbI_nhlIgwXxvZKaz98g";

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
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
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: "Zindazed <zindazed@gmail.com>",
//       to: "zindazed@gmail.com",
//       subject: "Hello from gmail using API",
//       text: "Hello kasauli from gmail email using API",
//       html: "<h1>Hello zindazed from gmail email using API</h1>",
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

// export default sendMail;
