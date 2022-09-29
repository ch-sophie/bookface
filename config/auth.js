module.exports = {
    /* ensure user has logged in
    if so, moves on to the next middleware
    if not, throws an error and redirect to login page
    */
    ensureAuthenticated : function(req,res,next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg' , 'please login to view this resource');
        res.redirect('/users/login');
    }
}