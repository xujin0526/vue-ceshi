<template>
	<div class="top">
		<div class="topsearch">
			<h2 class="logo">
				<router-link to="/">得知网</router-link>
			</h2>
			<el-input placeholder="搜你想搜的"  icon="search" v-model="input2" :on-icon-click="handleIconClick">
			</el-input>
		</div>
	</div>	
</template>
<script>
	export default {
		name: 'header',
		data () {
			return {
				
				input2: ''
			}
		},
		 methods: {
	      handleSelect(key, keyPath) {
	        // console.log(key, keyPath);
	      },
	      handleIconClick(ev) {
		      // console.log(ev);
		    }
	    }
	}	
</script>
<style>
	*{
		font-family: '微软雅黑';
	}
	.logo a{
		color:#fff;
	}
	.logo{
		font-size:0.75rem;
		color:#fff;
		/*font-family*/
		display: inline-block;
		font-weight: 700;
		margin-left:5%;
	}
	.top{
		z-index: 9999;
		position:fixed;
		margin:0 auto;
	}
	.topsearch{
		position: fixed;
		top:0;
		width:100%;
		height:1.625rem;
		background: #E01222;
	}
	
	.el-menu--horizontal .el-menu-item{
		font-size:0.375rem;
		padding:0 0.25rem;
		border:0.0rem;
		height:0.875rem;
		line-height:0.875rem;
		border-bottom: 0.125rem solid transparent;
	}

	.el-menu--horizontal .el-menu-item a{
		color:#000;
	}
	.el-menu{
		background: #fff;
		position:fixed;
		width:100%;
		border-bottom: 0.03125rem solid #ccc;
		border-radius: 0.0rem;
		-webkit-padding-start:0.3125rem;
		top:1.625rem;
	} 
	.el-menu--horizontal.el-menu--dark .el-menu-item:hover{
		background:#fff;
		color:#E01222;

	}
	
	.el-menu--horizontal>.el-menu-item:hover{
		border-bottom: 0.125rem solid #E01222;
	}
	
	.el-input{
		position: absolute;
		width:60%;
		height:0.75rem;
		display:inline-block;
		margin-left:10%;
		margin-top:0.625rem;
		
	}
	.el-input__icon+.el-input__inner{
		padding-right:2.1875rem;
	}
	.el-input__inner{
		height:0.75rem;
		border:0.0625rem solid #eee;
		border-radius: 0.25rem;
		padding:0 0.125rem;
	}
	.el-input__inner:focus{
		border-color:#ccc;
	}
	
</style>