const User =require('../models/user');


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

// get the sign up data
module.exports.create=function(req,res){

    if(req.body.password != req.body.confirm_password){
        //console.log('Wrong Password');
        return res.redirect('/users/sign-up');
        
    }

    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding user in singing up'); return; }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating user while sining up'); return }

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    });
    
}

// get the sign in data and create session for the user
module.exports.create=function(req,res){
    // todo later
}