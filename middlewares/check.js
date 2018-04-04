module.exports = {
	checkLogin: function checkLogin (req, res, next) {
		console.log(new Date(),"checkLogin");
		if (!req.session.user) {
			req.flash("error", "未登录");
			return res.redirect("/signin");
		}
		next();
	},
  
	checkNotLogin: function checkNotLogin (req, res, next) {
		console.log(req.session.user,"req.session.user");
		console.log(new Date(),"checkNotLogin");
		if (req.session.user) {
			req.flash("error", "已登录");
			return res.redirect("back");// 返回之前的页面
		}
		next();
	}
};