const addCommentHandler = (req, res) => {
  if (req.method === 'POST') {
    const eventId = req.query.eventId;
    const { name, email, text } = req.body.commentData;

    if (!name || !email.includes('@') || !text) {
      res.status(422).json({ message: 'Invalid input' });
    }

    console.log(commentData);
    console.log(eventId);

    res.status(201).json({ message: 'Saved' });
  }
};

export default addCommentHandler;
