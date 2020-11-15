import axios from 'axios';

const getAllJobs = async () => {
    const jobObj = {
                    "q": "cashier",
                    "size": 20,
                    "r": 35,
                    "geo": "us",
                    "lat": "33.9526",
                    "long": "-84.54993",
                    "formatted_address": "Marietta, Georgia, United States",
                    "botName": "jobs-bear",
                    "page": 1
                }
    let resp = await axios.post(`https://us-central1-better-roi.cloudfunctions.net/job-search`,jobObj);
    if (resp.data.length > 0) {
        return resp.data;
    }
    return null;     
}

export default {getAllJobs}