<template>
	<div class="footer">
		<div class="block">
			<el-row>
				<el-col :span="4">
				  	<div class="grid-content bg-purple" id="shouye">
				    	<router-link to="/"><i></i><span>首页</span></router-link>
			    	</div>
		    	</el-col> 
		    	<el-col :span="4">
				  	<div class="grid-content bg-purple" id="news">
				    	<router-link to="/news"><i></i><span>新闻</span></router-link>
			    	</div>
		    	</el-col> 
				<el-col :span="4">
				  	<div class="grid-content bg-purple" id="movie">
				    	<router-link to="/movie"><i></i><span>电影</span></router-link>
			    	</div>
		    	</el-col> 
				<el-col :span="4">
				  	<div class="grid-content bg-purple" id="book">
				    	<router-link to="/book"><i></i><span>图书</span></router-link>
			    	</div>
		    	</el-col> 
				
				<el-col :span="5">
				  	<div class="grid-content bg-purple" id="myapp">
				    	<router-link to="/myapp"><i></i><span>我的</span></router-link>
			    	</div>
		    	</el-col> 
			</el-row> 
		</div>
	</div>
</template>
<script>
	export default{
		name:'footer',
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>
<style>
	.footer{
		position:fixed;
		z-index: 9999;
		bottom:0;
		width:100%;
		height:1.1rem;
		border-top:0.03125rem solid #ccc;
		background:#fff;
	}
	.block{
		margin-left:0.625rem;
	}
	.grid-content span{
		line-height: 0.00625rem;
		display: block;
		margin-top:0.0625rem;
		text-align: center;
	}
	 
	.grid-content .router-link-exact-active{
		color:#E01222 !important;
	}
	.footer .grid-content{
		width:0.75rem;
		height:0.625rem;
		margin-left:0.3125rem;
	}
	.footer a{
		color:#666;
	}
	.grid-content a i{
		margin-left:0.0625rem;
		display: inline-block;
		width: 0.625rem;
		height: 0.625rem;
		/*z-index:88;*/
		background: url(../assets/images/first2.png);
		background-size: 100%;
	}
	.grid-content .router-link-exact-active i{
		display: inline-block;
		z-index:88;
		background: url(../assets/images/first.png);
		background-size: 100%;
	}
	#movie a i{
		background: url(../assets/images/movie2.png);
		background-size: 100%;
	}
	#movie .router-link-exact-active i{
		background: url(../assets/images/movie1.png);
		background-size: 100%;
	}
	#book a i{
		background: url(../assets/images/book2.png);
		background-size: 100%;
	}
	#book .router-link-exact-active i{
		background: url(../assets/images/book1.png);
		background-size: 100%;
	}
	#news a i{
		background: url(../assets/images/new1.png);
		background-size: 100%;
	}
	#news .router-link-exact-active i{
		background: url(../assets/images/new2.png);
		background-size: 100%;
	}
	#myapp a i{
		background: url(../assets/images/me2.png);
		background-size: 100%;
	}
	#myapp .router-link-exact-active i{
		background: url(../assets/images/me1.png);
		background-size: 100%;
	}
	/*#weather a i{
		background: url(../assets/images/weather2.png);
		background-size: 100%;
	}
	#weather .router-link-exact-active i{
		background: url(../assets/images/weather1.png);
		background-size: 100%;
	}*/

</style>