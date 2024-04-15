// "use server"

import Config from "@/config";
import { GoogleSpreadsheet } from "google-spreadsheet";
const doc = new GoogleSpreadsheet(Config.SPREADSHEET_ID);

// Append Function
const appendSpreadsheet = async (row) => {
  try {
    console.log("row=====asdfghjk======", row);
    await doc.useServiceAccountAuth({
      client_email: Config.GOOGLE_CLIENT_EMAIL,
      private_key: Config.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    // const sheet = doc.sheetsById[Config.SHEET_ID];
    const sheet = doc.sheetsById[Config.SHEET_ID];

    console.log("sheet===========", sheet);
    const res = await sheet.addRow(row);
    console.log("resres===========", res);
    return res;
  } catch (e) {
    console.error("Error: ", e);
  }
};
export default {
  appendSpreadsheet,
};
// import fs from "fs";
// import { google } from "googleapis";

// async function getServerSideProps(range) {
//   const target = ["https://www.googleapis.com/auth/spreadsheets"];
//    const auth = await google.auth.getClient({
//     projectId: "croggy-tech-institude",
//     credentials: {
//       type: "service_account",
//       private_key:
//         "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4N436Y8XZM9Z0\neTMIYbd8gSVZ5zQGtu8aD6UdrQeWqaD7hQRermz/mV1REt9Hit7NEBeTbqd14+X4\n/N/6nE8uu+1iErAY7Um7Q9vcRbvA6mITypMk484SDC9rK16KSqvtV/5QUMqT0bIf\n/WsYRdvCA5wWaq1eHKQoG9YLxiSyZCepCS8iZ9XqpYdkhIqOx8DR3BqlBgZzonqP\nkAh9i7lGRHcU2sDRYNxGKYdJwGttOh9gTf8K2dBqwgDYz65yTyh2kerEpur4iBD9\nwn/2ETtDwWor3i8BCqiIQm2eQz2USGn7RYCVFEFKt3DkNw6nqjuCBJOunf+3GOXt\nTHdUW/jjAgMBAAECggEAOT5iKxWH7He0Q1tKJWegCdtjzO0QeKmt4Q5Ng8w52HJ7\nqMzrz7QqAL8ahU/0/BlGJLjEarbu6K5ZzyZdP1YFMQOKv3gJKqXJzJxInMk6j7cF\npRrE4Ki9Z1RMA+RlK1oK1OUMDM8eNBLsZA5ukgtbP425mimqF92UkTYdLGl1C82V\nbZzG3IphDdHfD4w6dvM0GDzXTF58ho2b7IxckK0PKTnvIQNboucUBZ0PWn0CWX6C\nCQZ/X3B5zuxRsxViCQOpJ56eqqxou09PYhyRArC2A5LhvdGy0vzERZuF+UOzoBrp\nunYvaLea5jkXWgaJOSWYg9iTBBTJCxhxH/vF7tX3GQKBgQD4NWhFHlOYAFU38sMb\nLXVB2Olpf6YnmePnREfN6Qn6/62oGrlze6BY/TaFVOTnbbUKpeMDXO0DnM5rcIsw\n71b2p0eIB71dzjWYaw5ISFZ8UKMEigbJrc2Rw9jYbU8aX1euuqkbVJCauaCJZlFx\nV9EUG8310aJqsbt6FmV1fwXddQKBgQC9/+nrCvCIrsFVf4RKpYwH758XQRUwomHC\nvv2lZ4vqOAsx8iqyXIsweUtxL8vhPYt/dVX5AK3X6XEX1asXBMO/egoosiNr21cz\njiQ4Spa46YdYSTaVs2I05Owr2jVHmeAaSAQd9ybyiHDnBnPfaXthrvu83dpEu+8c\nkGH2DAt59wKBgQDrLS9uzh1GmIomSM60oY3Ipk4CuAAm5ZkbN4cRgw0B1eAkt62f\nzjNQHhvamWWKIli3jhZayWGJWrn68tfvtdcgPb95FFxI1WnS0RznQCMyBvVvB5kG\n3rc4tehwqKGay1u5IwO38ZhSAjAp/9iLHDnuY6nykH7juSN5ul7HxWM5QQKBgQC8\n6ZkhtGzY2jks028r8VI8Ccr7CiERjEL7qX71WPFK3pJzBL/jPBTBC7kxPz7OI61x\n+66RuFUhmuBxvGcyqfAfkC5NrGF/ukUH48qrla4rCTcjVxhI3GVHBl60c3AKUzr5\npqVBTh6Rg4wOiOHpPy4IQD3Y2hVNxjbHBeABDpTSnQKBgBEYccO/AV7U3q4bwPct\nmp6ToEIiWCjCoZq2+kouF1Q5/VRLEjL+AOuskOTB9HSsyBng+Vbfz101OMRkSLEK\npM21u3RKF/k6ggBX4HyTtKyVFUMLixKm7ofif/14tTRfSWoD238hsSj+tJcFiYlC\nC+/8vfc/VPa9mVHa2Nc9+3W5\n-----END PRIVATE KEY-----\n",
//       client_email: "croggy@croggy-tech-institude.iam.gserviceaccount.com",
//       client_id: "103429183735660550737",
//       token_url: "https://oauth2.googleapis.com/token",
//       universe_domain: "googleapis.com"
//     },
//     scopes: target
//   });
//   const sheets = google.sheets({ version: "v4", auth });
//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: Config.NEXT_PUBLIC_SPREADSHEET_ID,
//     range: "Institude1", // sheet name
//   });
//   console.log("response=============", response);
//   return response;
// }

// export default getServerSideProps;
