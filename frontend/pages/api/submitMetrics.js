// An API to handle frontend POST requests

import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await axios.post('http://localhost:8000/api/submit-metrics/', req.body);
        res.status(200).json(response.data);
      } catch (error) {
        res.status(error.response.status).json({ message: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }