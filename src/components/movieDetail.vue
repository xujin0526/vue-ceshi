<template>
	<div class="movieDetail">
		<!-- <h1>我是{{$route.params.id}}</h1> -->
		<h3 v-text="details.title"></h3>
		
		<!-- 评价 -->
		<div class="r_rating" >
			<span v-for="n in 5" class="r_stars" :class="{light : n*10<=rating.stars, grey :n*10>rating.stars}">
			</span>
			<span v-text="rating.average"></span>
		</div>
		<p>{{details.year}}年（<span>{{countries}}</span>）上映</p>
		<!-- 图片和演员 -->
		<div class="intro">
			<div class="yanyuan">
				主演：
				<div v-for="item in casts">
					<span>{{item.name}}</span>		
				</div>
			</div>
			<img :src="img.medium">
		</div>
		<span class="wrapper">
		    <el-button type="success">想看</el-button>
		    <el-button type="danger">看过</el-button>
		</span>
		<div class="jqjj">
			<p>《<span>{{details.title}}</span>》剧情简介:</p>
			<p v-text="details.summary"></p>
		</div>
		
		
		
		<!-- <p v-text="countries"></p> -->
	</div>
	
</template>

<script>
import jsonp from 'jsonp'

	export default {
		data () {
			return {
				movieId:this.$route.params.id,				
				details:{},
				rating:[],
				img:[],
				casts:[],
				countries:''
			}
		},
		created:function(){
			var _this = this;

			var url = 'https://api.douban.com/v2/movie/subject/'+this.movieId
			
			jsonp(url,function(err,result){
				_this.details = result;
				// _this.auther = details.casts;
				console.log(_this.details);
				// 获取评价
				_this.rating = result.rating;
				// console.log(result.rating);
				// 获取图片
				_this.img = result.images;
				// console.log(_this.img)
				// console.log(_this.details);
				// 获取演员
				_this.casts = result.casts;
				// console.log(result.casts)
				// console.log(_this.details.countries[0])
				// 获取国家
				_this.countries = result.countries[0];
			})

		}
	}
</script>

<style>
	.movieDetail{
		padding:0 0.3125rem;
		width:100%;
		margin:3.125rem auto;
	}

	.movieDetail .r_rating span{
		font-size:0.5rem;
	}
	.movieDetail p{
		font-size:0.375rem;
		margin-top:0.375rem;
	}
	.movieDetail .r_stars{
		display:inline-block;
		/*vertical-align:top;*/
		width:0.375rem;
		height:0.375rem;
		background-size:cover;
		/*margin-top:0.066667rem;*/
	}
	.intro{
		width:100%;
		height:6.25rem;
	}
	.intro img{
		display: block;
		float:right;
	}
	.intro .yanyuan{
		width:3.125rem;
		float:left;
		font-size:0.5rem;
	}
	.intro .yanyuan span{
		color:#666;
	}
	.jqjj>p{
		font-size:0.4375rem;
	}
	.movieDetail .light{
		background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");
	}
	.movieDetail .grey{
		background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
	}

</style>
