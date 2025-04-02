import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { blogId, blogTitle } = req.query;

    if (req.method === "GET") {
        try {
            // Forward request to backend
            const response = await fetch(`http://localhost:8080/api/blogs/${blogId}/${blogTitle}`, {
                method: "GET",
   
            //     body: JSON.stringify({}) // If backend requires a body, add it here.
            });

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            return res.status(200).json(data);
        } catch (error) {
            const err = error as Error;
            return res.status(500).json({ error: "Failed to forward request", details: err.message });
        }
    }

    return res.status(405).json({ error: "Method Not Allowed" });
}
