export default function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({error: err.message});
}
