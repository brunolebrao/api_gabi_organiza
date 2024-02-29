import app from '../app';

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Press Ctrl+Click to http://localhost:${port}/ to open in the browser`);
  console.log('Press Ctrl+C to quit');
});
