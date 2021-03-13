const getCommentHandler = (req, res) => {
  const eventId = req.query.eventId;

  const commentsData = [
    { email: 'SuperPUZ', name: 'SuperPUZ', text: 'MEGAPUZ' },
    { email: 'SuperPUZ', name: 'SuperPUZ', text: 'MEGAPUZ' },
    { email: 'SuperPUZ', name: 'SuperPUZ', text: 'MEGAPUZ' }
  ];

  res.status(200).json({ commentsData });
};

export default getCommentHandler;
