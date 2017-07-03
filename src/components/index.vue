<template>
    <div class="main">
    	<div class="s_nav">
            <div><a href="">影院热映</a></div>
            <div><a href="">图书市场</a></div>
            <div><a href="">聊聊时间</a></div>
            <div><a href="">使用得知网App</a></div>
        </div>
        <div class="news" v-for="news in newsLists">
          	<div class="news_content">
          		<p class="title" v-text="news.title"></p>
          		<span class="news_info" v-text="news.from"></span>
          	</div>
          	<div class="news_img">
          		<img :src="news.img" alt="">
          	</div>
          	<div class="news_from" >
          		<span v-text="news.name"></span>
          		<span v-text="news.lanmu"></span>
          	</div>
        </div>
    </div>
</template>

<script>
	export default {
		name:'index',
		data () {
			return {
				newsLists:[
					{
						id:1,title:'得知网',from:'得知网',
						img:'https://qnmob2.doubanio.com/img/files/file-1497866496.png?imageView2/2/q/80/w/330/h/330',lanmu:'得知网',name:'by 得知网'
					},
					{
						id:2,title:'得知网',from:'得知网',
						img:'https://qnmob2.doubanio.com/img/files/file-1497866496.png?imageView2/2/q/80/w/330/h/330',lanmu:'得知网',name:'by 得知网'
					}

				]
			}
		}
	}
</script>

<style lang="scss">

.main{
  margin-top:3.125rem;
  width:100%;
}
.s_nav{
  width:8.893333rem;
  height:2.586667rem;
  margin:0 auto;
  margin-top:0.786667rem;
  display:-webkit-flex;
  display:flex;
  flex-wrap:wrap;
  div{
    width:4.373333rem;
    height:1.173333rem;
    background:#f6f6f6;
    a{
      width:100%;
      height:100%;
      display:block;
      color:#494949;
      font-size:0.4rem;
      text-align:center;
      line-height:1.173333rem;
    }
  }
  div:nth-child(2n-1){
    margin-right:0.133333rem;
  }
}
.news{
	position:relative;
	width:9.56rem;
	height:4.426667rem;
	border-bottom:0.013333rem solid #ccc;
	padding-top:0.6rem;
    margin:0 auto;
	.news_content{
		width:6.24rem;
		height:2.426667rem;
		display:inline-block;
		vertical-align:top;
	}
	.news_img{
		display:inline-block;
		img{
			width:2.32rem;
			height:2.32rem;
		}
	}
}
</style>
