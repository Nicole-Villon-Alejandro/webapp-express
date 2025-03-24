function setImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/img/books/`;
    next();
}
  
export default setImagePath;