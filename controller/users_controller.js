module.exports.profile=function(req,res){
    return res.render('profile',{
        title:"Profile"
    });
}

module.exports.post=function(req,res){
    return res.render('post',{
        title:"Post"
    });
}

// render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    });
}

// render the sign in page
module.exports.signIp=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    });
}