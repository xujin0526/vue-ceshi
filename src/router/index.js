// 路由模块
import Vue from 'vue'
import Index from '../components/index.vue'
import Movie from '../components/movieAll.vue'
import Book from '../components/Book.vue'
import Weather from '../components/Weather.vue'
import News from '../components/News.vue'
import movieDetail from '../components/movieDetail.vue'
import myapp from '../components/myapp.vue'

export default [
	{
		path:'/',
		name:'index',
		component:Index
	},
	{
		path:'/movie',
		name:'movie',
		component:Movie
	},
	{
		path:'/movieDetail/:id',
		name:'movieDetail',
		component:movieDetail
	},
	{
		path:'/book',
		name:'book',
		component:Book
	},
	// {
	// 	path:'/weather',
	// 	name:'weather',
	// 	component:Weather
	// },
	{
		path:'/news',
		name:'news',
		component:News
	},
	{
		path:'/myapp',
		name:'myapp',
		component:myapp
	}
]
