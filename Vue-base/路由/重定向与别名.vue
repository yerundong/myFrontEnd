<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script src="../common/vue.js" type="text/javascript" charset="utf-8"></script>
		<script src="../common/vue-router.js"></script>
	</head>
	<style type="text/css">
		.head{
			width: 300px;
			height: 300px;
			background: red;
		}
		.body{
			width: 300px;
			height: 300px;
			background: green;
		}
		.foot{
			width: 300px;
			height: 300px;
			background: blue;
		}
	</style>
	<body>
		<div id="app1">
			<router-link to="/head" tag="button">head</router-link>
      		<router-link to="/body" tag="button">body</router-link>
      		<router-link to="/foot" tag="button">foot</router-link>
      		<br />
      		<router-view></router-view>
		</div>
		<script type="text/javascript">
			/*
			 『重定向』:当用户访问某路由时，将会被替换成重定向的路由地址
			 『别名』:/a的别名是 /b，意味着，当用户访问 /b时，URL会保持为 /b，但是路由匹配则为 /a
			 	单个别名为字符串，如[/b]，取多个别名以数组的形式,如['/b','/c','/d']，
			 	每个别名访问到的都是'/a',【实质是同一个路由允许有多个路径访问】
			 * */
			const head = { template: '<div class="head">head</div>' }
			const body = { template: '<div class="body">body</div>' }
			const foot = { template: '<div class="foot">foot</div>' }
			const router = new VueRouter({
			  routes: [
			    { 
			    	//【重定向到head】
			    	path: '/',
			    	//简写
//			      	redirect: '/head'
					//命名路由
//					redirect: {name:'head'}
					//也可以是函数
//					redirect:()=>({name:'head'});
			    },
			    { 
			    	path: '/head',
			    	name:'head',
			      	component: head
			    },
			    { 
			    	//【别名】
			    	path: '/body',
			      	name: 'body',
//			      	alias: '/bodyGet',
					// 多个别名
			      	alias: ['/bodyGet','/bodyGetYou'],
			      	component: body
			    },
			    { 
			    	path: '/foot',
			      	name: 'foot',
			      	component: foot
			    }
			  ]
			});
			var vm1 = new Vue({
				el:'#app1',
				router,
				data:{
					
				}
			});
		</script>
	</body>
</html>