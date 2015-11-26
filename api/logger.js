export default function (req, res, next) {
  console.log(req.method, req.path, req.params, req.query, req.body);
  next();
}
