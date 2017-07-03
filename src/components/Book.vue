<template>
	<div class="book">
		<div class="loading" v-if="books==undefined">
			<img src="../assets/images/loading1.gif" alt="">
		</div>
		<div v-else class="books">
			<div v-for="book in books" class="booklist">
				<img :src="book.image" alt="">
				<div class="content">
					<span v-text="book.price"></span>
					<p class="booktitle" v-text="book.title"></p>
					
					<!-- <p v-text="book.author[0]"></p> -->
					<!-- <p v-text="book.summary"></p> -->
					<!-- <div class="r_rating" >
						<span v-for="n in 5" class="r_stars" :class="{light : n*10<=rating.numRaters, grey :n*10>rating.numRaters}">
						</span>
						<span v-text="rating.average"></span>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script> 
	import jsonp from 'jsonp'
 	export default{
 		data(){
 			return{
 				books:[],
 				// rating:''
 			}
 		},
 		methods:{
 		},
 		created:function(){
 			var _this = this;
			 jsonp('https://api.douban.com/v2/book/search?q=vue&fields=all',function(err,msg){
			 	// console.log(msg);
			 	msg.books.forEach(function(val){
			 		if(val){
			 			_this.books.push(val);
			 			// console.log(_this.books);
			 			// _this.rating = val.rating
			 			// console.log(val.rating);
			 		}
			 		
			 	})
			 })
 		}
 	}
</script>
<style lang="scss">
	.book{
		padding:0 auto;
		margin-top:1.875rem;
		.loading{
			margin-top:1.875rem;
			img{
				width:100%;
				height:5.106667rem;
			}
		}
	}
	
	.booklist{
		width:30%;
		height:6rem;
		border-bottom: 0.00625rem solid #eee;
		/*margin-top:0.3125rem;*/
		float:left;	
		overflow: hidden;
		/*margin-left:0.3125rem;*/
		margin:0.625rem 0.15625rem;
		.content{
			width:3rem;
			.booktitle{
				/*height:1.5rem;*/
				margin:0 0.03125rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			span{
				color:#C50D1A;
			}
		}

	}
	/*.booklist:nth-child(2n){
		float:right;
		}
	.booklist:nth-child(2n+1){
		f.booklistloat:left;
	}*/
</style>