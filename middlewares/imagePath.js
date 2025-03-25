function setImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/img/movies/`;
    next();
}
  
export default setImagePath;