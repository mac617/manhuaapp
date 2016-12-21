import index from '../src/components/index.vue'
import page from '../src/components/page.vue'
import search from '../src/components/search.vue'
import comic from '../src/components/comic.vue'
import chapter from '../src/components/chapter.vue'

export default [
{
	path:'/',
	component: function (resolve) {
		require(['../src/components/index.vue'], resolve)
	}
},
{
	path:'/page',
	name:'page',
	component: function (resolve) {
		require(['../src/components/page.vue'], resolve)
	}
},
{
	path:'/search',
	name:'search',
	component: function (resolve) {
		require(['../src/components/search.vue'], resolve)
	}
},
{
	path:'/comic',
	name:'comic',
	component: function (resolve) {
		require(['../src/components/comic.vue'], resolve)
	}
},
{
	path:'/chapter',
	name:'chapter',
	component: function (resolve) {
		require(['../src/components/chapter.vue'], resolve)
	}
}
]