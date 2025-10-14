import { serve } from "inngest/next";
import { inngest  } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

//create an API that serves zero funcitons
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [generateIndustryInsights],
});