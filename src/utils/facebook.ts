import * as CONFIG from '../config'
import crypto from 'crypto-js'
import axios from 'axios'
import gql from 'graphql-request'

console.log(CONFIG)

function initFacebookSubscribeEvent(userEmail: string, eventSourceUrl: string) {
    const emailHash = crypto.MD5(userEmail.toLowerCase().trim())
    const eventTime = Math.floor(Date.now() / 1000);
    const mutation = gql`
    mutation {
      logEvent(
        event: "Subscribe",
        eventTime: ${eventTime},
        userData: { em: ["${emailHash}"] },
        eventSourceUrl: "${eventSourceUrl}",
        actionSource: "website"
      ) {
        success
      }
    }
  `;

    const accessToken = CONFIG.FACEBOOK_ACCESS_TOKEN;
    const pixelId = CONFIG.FACEBOOK_PIXEL_ID;

    axios
        .post(`https://graph.facebook.com/v17.0/${pixelId}`, {
            access_token: accessToken,
            query: mutation,
        })
        .then((response) => {
            console.log('Event posted successfully:', response.data);
        })
        .catch((error) => {
            console.error('Error posting event:', error.response.data);
        });
}

export {
    initFacebookSubscribeEvent
}