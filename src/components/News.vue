<template>
	<div class="newsnews">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1" @click="zuixin">
		  		<router-link to="">最新</router-link>
			</el-menu-item>
			<el-menu-item index="2" @click="redian">
		  		<router-link to="">热点</router-link>
			</el-menu-item>
			<el-menu-item index="3" @click="shehui">
		  		<router-link to="" >社会</router-link>
			</el-menu-item>
			<el-menu-item index="4" @click="yule">
				<router-link to="">娱乐</router-link>
			</el-menu-item>
			<el-menu-item index="5" @click="tiyu">
				<router-link to="">体育</router-link>
			</el-menu-item>
			<el-menu-item index="6" @click="beijing">
				<router-link to="">北京</router-link>
			</el-menu-item>
			<el-menu-item index="7" @click="hebei">
				<router-link to="">河北</router-link>
			</el-menu-item>	
		</el-menu>
		
		<div class="loading" v-if="!n">
			<img src="../assets/images/loading1.gif" alt="">
		</div>
		<div v-else>
			<div v-for="item in n" class="newslist">
				<h3 class="title" v-text="item.full_title"></h3> 
				<img :src="item.img" alt="">
				<span v-text="item.src"></span>
				<span v-text="item.pdate"></span>
				<span v-text="item.pdate_src"></span>

				
				<p v-html="item.content"></p>
			</div>
		</div>
		
		<router-view></router-view>
	</div>
	
</template>
<script>
	export default{
		data(){
			return{
				activeIndex: '1',
				n : [],
				keyword : '每日新闻',

				zx : '最新新闻',
				rd : '热点新闻',
				sh : '社会新闻',
				yl : '娱乐新闻',
				ty : '体育新闻',
				bj : '北京新闻',
				hb : '河北新闻'
			}
		},
		methods:{
			zuixin(){
				this.keyword = this.zx;
			    this.getNews()
			},
			redian(){
				this.keyword = this.rd;
				// console.log(this.keyword)
			    this.getNews()
			},
			shehui(){
				this.keyword = this.sh;
				// console.log(this.keyword)
			    this.getNews()
			},
			yule(){
				this.keyword = this.yl;
				// console.log(this.keyword)
			    this.getNews()
			},
			tiyu(){
				this.keyword = this.ty;
				// console.log(this.keyword)
			    this.getNews()
			},
			beijing(){
				this.keyword = this.bj;
				// console.log(this.keyword)
			    this.getNews()
			},
			hebei(){
				this.keyword = this.hb;
				// console.log(this.keyword)
			    this.getNews()
			},
			getNews(){
				// 请求新闻
				this.$http.get('/afd/api/ActNews/Query',{
					params : {
						key:'875af8191d094af18a1bd9b0c17d12c2',
						keyword : this.keyword
					}
				}).then(function(msg){
					// console.log(msg);
					this.n = msg.data.result;
					// console.log( msg.data.result);
				}.bind(this)).catch(function(err){
					// console.log(err);
				})
			},
			 handleSelect(key, keyPath) {
	        // console.log(key, keyPath);
	      	},
	      handleIconClick(ev) {
		      // console.log(ev);
		    }
		},
		created(){
			this.getNews()
		}
	}
</script>
<style>
	.newsnews{
		padding:0 0.3125rem;
		border:none;
		margin-top:3.125rem;
	}

	.newslist{
		clear: both;
		border-bottom: 0.01rem solid #eee;
	}
	.newslist p,.newslist span{
		color:#666;
	}
	.newslist span{
		margin-left:0.25rem;
	}
	.newslist p{
		font-size: 0.375rem;
		margin-top:0.5rem;
	}
	.newslist img{
		width:100%;
	}
	.newsnews .title{
		line-height: 0.625rem;
		font-size:0.4375rem;
		font-weight: 800;
	}
	.loading img{
		width:100%;
	}
</style>