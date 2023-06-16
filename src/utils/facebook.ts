import * as CONFIG from '../config'
import crypto from 'crypto-js'
import axios from 'axios'

console.log(CONFIG)

function initFacebookSubscribeEvent(userEmail: string, evenstSourceUrl: string) {
    const emailHash = crypto.SHA256(userEmail.toLowerCase().trim()).toString()
    const eventTime = Math.floor(Date.now() / 1000);

    const postData = {
        data: [{
            event_name: 'Subscribe',
            event_time: eventTime,
            user_data: {
                em: emailHash,
            },
            event_source_url: evenstSourceUrl,
            action_source: 'website',
        }],
        test_event_code: 'TEST17535',
    }

    const accessToken = CONFIG.FACEBOOK_ACCESS_TOKEN;
    const pixelId = CONFIG.FACEBOOK_PIXEL_ID;

    axios
        .post(`https://graph.facebook.com/v17.0/${pixelId}/events`, postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            params: {
                access_token: accessToken,
            },
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