import * as CONFIG from '../config'
import crypto from 'node:crypto'
import axios from 'axios'

function initFacebookSubscribeEvent(userEmail: string, evenstSourceUrl: string) {
    const emailHash = crypto.createHash('md5').update(userEmail.toLowerCase().trim()).digest('hex');
    const eventTime = Math.floor(Date.now() / 1000);
    const postData = [
        {
            event_name: 'Subscribe',
            event_time: eventTime,
            user_data: {
                em: [
                    emailHash,
                ],
            },
            event_source_url: evenstSourceUrl,
            action_source: 'website',
        },
    ];

    const accessToken = CONFIG.FACEBOOK_ACCESS_TOKEN;
    const pixelId = '<PIXEL_ID>';

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