<template>
	<div class="weather">
		<div class="bg">
			<p  v-model="cityname">{{cityname}}天气</p>
			{{day.moon}}
			{{day.date}}
			{{day.week}}
			{{day.time}}
			{{dayweather.info}}
			{{dayweather.img}}
		</div>
		
		<!-- <h3>天气预报</h3> -->

		<!-- <input type="text" v-model="cityname" placeholder="请输入要查询天气的城市" @change="getWeather">

		<div v-for="item in w" class="dayweather">
			<h4>{{item.date}} {{item.nongli}} 星期{{item.week}}</h4>

			<div class="">
				<h3 class="day">白天</h3>
				<p>{{item.info.day[1]}} {{item.info.day[3]}} {{item.info.day[4]}}</p>
				<p v-if="item.info.night[6]">友情提示：{{item.info.day[6]}}</p>
				<h3 class="night">夜间</h3>
				<p>{{item.info.night[1]}} {{item.info.night[3]}} {{item.info.night[4]}}</p>
				<p v-if="item.info.night[6]">友情提示：{{item.info.night[6]}}</p>
			</div>
		</div> -->
	</div>
</template>
<script>
	export default{
		data(){
			return{
				w:[],
				cityname:'北京',
				dayweather:[],
				day:[]
			}
		},
		methods : {
			getWeather(){
				// 调用函数
				if(!this.cityname){
					this.cityname = cityname;
				}

				// 请求天气
				this.$http.get('/afd/api/Weather/Query',{
					params : {
						key : '6586fcc414194147ab18f716eb32a931',
						cityname : this.cityname
					}
				}).then(function(msg){
					// console.log(msg);
					this.w = msg.data.result.weather;
					this.dayweather = msg.data.result.realtime.weather;
					this.day = msg.data.result.realtime;
					this.wind = msg.data.result.realtime.weather.wind;
					// console.log(this.wind);
					// console.log(this.dayweather);
					// console.log(this.day)
				}.bind(this)).catch(function(err){

					// console.log(err);
					if(err){
						// alert('输入有误，请重新输入');
					}
				})
			}
		},
		created(){
			this.getWeather()
		}
	}
</script>
<style>
	.weather{
		width:100%;
		padding:1.875rem 0.3125rem;
		margin-top:1.25rem;
	}
	.bg{
		height:6.25rem;
		/*background: #6BCBF7;*/
	}
</style>