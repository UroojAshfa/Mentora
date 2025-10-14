import { Inngest } from "inngest";

//create a client to send and recieve events
export const inngest = new Inngest(
    {id: "careercoach", 
    name: "Careercoach",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
});