import express, { Request, Response } from 'express';

// Create an Express application
const app = express();
const port = 4000; // We'll use port 4000 for this service

// Middleware to parse JSON bodies
app.use(express.json());

// A simple in-memory store for our votes (for now)
const votes = {
    tabs: 0,
    spaces: 0
};

// The POST endpoint for casting a vote
app.post('/vote', (req: Request, res: Response) => {
    const { option } = req.body; // Expecting { "option": "tabs" } or { "option": "spaces" }

    if (option === 'tabs') {
        votes.tabs++;
        console.log('Vote received for Tabs. Total:', votes.tabs);
        return res.status(200).send({ message: 'Vote for tabs counted!' });
    } else if (option === 'spaces') {
        votes.spaces++;
        console.log('Vote received for Spaces. Total:', votes.spaces);
        return res.status(200).send({ message: 'Vote for spaces counted!' });
    } else {
        return res.status(400).send({ message: 'Invalid vote option provided.' });
    }
});

// A GET endpoint to check the current votes
app.get('/results', (req: Request, res: Response) => {
    res.status(200).json(votes);
});

// Start the server
app.listen(port, () => {
    console.log(`Voting API service listening on port ${port}`);
});