const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		proxy('/api', {
			target: ' http://chest-ct.dev.yitu-med.info/',
			secure: true,
			changeOrigin: true,
			pathRewrite: {
				'^/api': '/'
			}
		})
	);
	app.use(
		proxy('/rap',{
			target:'http://rap2api.taobao.org/',
			secure:true,
			changeOrigin:true,
			pathRewrite:{
				'^/rap':'/'
			}
		}
	))
	//	app.listen(3000);
};
