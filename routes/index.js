var express = require('express');
var router = express.Router();
var comments={};
 function str_encode(str){
 	var s='';
 	if(str.length==0){
       return '';
 	}
    s=str.replace(/</g,"&lt;")
    s=str.replace(/>/g,"&gt;")
    s=str.replace(/\s/g,"&nbsp;")
    s=str.replace(/&/g,"&amp")
    s=str.replace(/"/g,"&quot")
    return s;
 }
/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('X-XSS-Protection',0);
  res.render('index', {title:'Express', xss:req.query.xss});
});
router.get('/comment',function(req,res,next){
  //comments.v=str_encode(req.query.comment)
  comments.v=escape(req.query.comment)
})
router.get('/getComment',function(req,res,next){
   res.json({
   	comment:comments.v
   })
})
module.exports = router;

//防范xss攻击 对用户输入的字符要做编码,过滤,domparse
