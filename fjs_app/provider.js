//判断那个端登陆
let  siteName = 'https://fjs.doxinsoft.com';
uni.setStorageSync('siteName', siteName);
wx.setStorageSync('site_name', 'fjs');
uni.getProvider({
	service: 'oauth',
	success: function(res) {
		if (res.provider && res.provider.length > 0 && res.provider[0] == 'weixin') {
			//如果是微信小程序
			console.log(res.provider[0]);
			uni.setStorageSync('source', 'wechatapp');
			uni.login({
				provider: 'weixin',
				success: function(res) {
					console.log(JSON.stringify(res));
					if (res.code) {
						console.log('0013');
						let url = uni.getStorageSync('siteName') + '/getOpenOpenId?code=' + res.code;
						uni.request({
							url: url,
							data: {},
							header: {
								//'custom-header': 'hello' //自定义请求头信息
							},
							success: (msg) => {
								uni.setStorageSync('openid', msg.data.data.openid);
								//uni.setStorageSync('openid', 'ohOO94uhpRx-Un1DdDuSTpof_vpQ');
								uni.setStorageSync('session_key', msg.data.data.session_key);

							}
						});
					} else {
						console.log('456');
						uni.request({
							url: 'https://api.weixin.qq.com/sns/userinfo?access_token=' + res.authResult.access_token + '&openid=' +
								res.authResult.openid,
							data: {},
							header: {
								//'custom-header': 'hello' //自定义请求头信息
							},
							success: (msg) => {
								uni.setStorageSync('openid', res.authResult.openid);
								let userInfo = {
									nickName: msg.data.nickname,
									unionid: res.authResult.unionid,
									avatarUrl: msg.data.headimgurl,
									openid: msg.data.openid,
								}
								console.log(JSON.stringify(userInfo));
								uni.setStorageSync('userInfo', userInfo);
								uni.setStorageSync('unionid', res.authResult.unionid);
								uni.setStorageSync('source', 'Android');
							}
						});
						//console.log(res.authResult.openid);
					}

				},
				fail: function(res) {
					console.log(JSON.stringify(res));
				}
			});
		}
		//uni.clearStorageSync();
		if (res.provider.length == 0) {
			 let site_name = uni.getStorageSync('siteName');
			 if(getOptions('openid')){
			 	let userInfo = {
			 		nickName:getOptions('nickname'),
			 		avatarUrl:getOptions('headimgurl'),
					unionid:getOptions('unionid'),
					openid:getOptions('openid'),
			 	}
			 	uni.setStorageSync("userInfo", userInfo);
				uni.setStorageSync("openid", getOptions('openid'));
			 	uni.setStorageSync("unionid", getOptions('unionid'));
			 	uni.setStorageSync("source", 'wap');
			}
			 let userInfo = uni.getStorageSync('userInfo');
			 if(!userInfo && !getOptions('openid')){
			 	 let site_name = siteName;
			 	 let source = window.location.href.split("#")[0];
			 	 let url = "";
			 	 let arg = window.location.href.split("#")[1];
			 	 arg = arg.split("?");
			 	 let page =arg[0];
			 	 let scope = arg.length >= 1 ? arg[1] : '';
			 	 if(scope){
			 	 	url = site_name+'/openid?page='+page+'&'+scope+'&source='+source;
			 	 }else{
			 	 	url = site_name+'/openid?page='+page+'&source='+source;
			 	 }
			 	console.log(url);
				window.location.href=url;
			 }
			 
		
		}

	}
});

function getOptions(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var url = window.location.href;
	var r = url.substr(url.indexOf("?") + 1).match(reg);
	if (name == 'audit' && r != null) return decodeURI(r[2]) == 0 ? null : decodeURI(r[2]);;
	if (r != null) return decodeURI(r[2]);
	return null;
}
