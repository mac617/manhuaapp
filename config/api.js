var superagent = require('superagent')
var cheerio = require('cheerio')

function api_data(method,url,type,callback) {
	superagent(method,url)
		.end(function (err,sres) {
			if (err) {
				return console.error(err);
			}

			var $ = cheerio.load(sres.text);

			if(type=='index') {
				var hot_content = [];

				var res_hot = $('.main-list-wrap ul:nth-child(1) li');
				for(var i=0;i<res_hot.length;i++){
					var hot = {};
					hot.name = res_hot.eq(i).find('a h3').text()
					var href = res_hot.eq(i).find('a').attr('href')
					hot.href = href.substring(20)
					hot.src = res_hot.eq(i).find('a img').attr('data-src')
					hot.desc = res_hot.eq(i).find('a p').text()
					if(hot.name){
						hot_content.push(hot)
					}
				}
				if(callback){
					// console.log(hot_content)
					callback(hot_content)
				}
			}

			if(type=='page') {
				var page_content = []
				var res_name = $('.main-bar')
				var res_page = $('.book-detail')
				var res_ep = $('.chapter-list li')
				// var res_recommend = $('.comic-list .comic-grid li')
				var page = {};
				page.name = res_name.find('h1').eq(0).text()
				page.author = res_page.find('.cont-list dd').eq(2).text()
				page.newsep = res_page.find('.cont-list dd').eq(0).text()
				page.update = res_page.find('.cont-list dd').eq(1).text()
				page.type = res_page.find('.cont-list dd').eq(3).text()
				page.desc = res_page.find('.book-intro p').text()
				page.src = res_page.find('.cont-list img').attr('src')
				page_content.push(page)

				var ep_content = []
				for(var i=0;i<res_ep.length;i++){
					var ep = {}
					ep.href = res_ep.eq(i).find('a').attr('href').substring(20)
					ep.title = res_ep.eq(i).find('a').attr('title')
					if(ep.href){
						ep_content.push(ep)
					}
				}
				page_content.push(ep_content)

				// var recommend_content = []
				// for(var j=0;j<res_recommend.length;j++){
				// 	var recommend = {}
				// 	recommend.title = res_recommend.eq(j).find('a').attr('title')
				// 	recommend.href = res_recommend.eq(j).find('a').attr('href')
				// 	recommend.href = res_recommend.eq(j).find('img').attr('data-cfsrc')
				// 	recommend.desc = res_recommend.eq(j).find('p').text()
				// 	if(recommend.title){
				// 		recommend_content.push(recommend)
				// 	}
				// }
				// page_content.push(recommend_content)

				// page.ep = res_page.find('.comic-list .comic-chapter li a').text()
				// page.recommend_title = res_page.find('.comic-list .comic-grid li a').attr('title')
				// page.recommend_href = res_page.find('.comic-list .comic-grid li a').attr('href')
				// page.recommend = res_page.find('.comic-list .comic-grid li a').attr('title')
				if(callback){
					console.log(page_content)
					callback(page_content)
				}
			}

			if(type=='comic') {
				var comic_content = []
				var content = sres.text.match(/\[.*?]/g)[0].slice(1,-1).replace(/\\/g, '').replace(/\"/g, '').split(',')
				$('.main-bar a').remove()
				var ep_name = $('.main-bar h1').text()
				comic_content.push(content)
				comic_content.push(ep_name)

				if(callback){
					// console.log(comic_content)
					callback(comic_content)
				}
			}

			if(type=='search') {
				var search_content = [];

				var res_search = $('#detail li');
				for(var i=0;i<res_search.length;i++){
					var search = {};
					search.name = res_search.eq(i).find('h3').text()
					search.src = res_search.eq(i).find('.thumb img').attr('data-src')
					search.href = res_search.eq(i).find('a').attr('href')
					search.author = res_search.eq(i).find('dd').eq(0).text()
					search.type = res_search.eq(i).find('dd').eq(1).text()
					search.newsep = res_search.eq(i).find('dd').eq(2).text()
					search.update = res_search.eq(i).find('dd').eq(3).text()
					if(search.name){
						search_content.push(search)
					}
				}
				if(callback){
					// console.log(search_content)
					callback(search_content)
				}
			}

			if(type=='chapter') {
				var res_chapter = $('.chapter-list li')
				var chapter_content = []
				for(var i=0;i<res_chapter.length;i++){
					var chapter = {}
					chapter.title = res_chapter.eq(i).find('a').attr('title')
					chapter.href = res_chapter.eq(i).find('a').attr('href').substring(20)
					if(chapter.href){
						chapter_content.push(chapter)
					}
				}
				if(callback){
					// console.log(chapter_content)
					callback(chapter_content)
				}
			}

			// var data = []
			// var $ = cheerio.load(sres.text);

			// var res_hot = $('.comic-grid li');
			// for(i=0;i<res_hot.length;i++){
			// 	var hot = {}
			// 	hot.name = res_hot.eq(i).find('a').attr('title')
			// 	if(hot.name){
			// 		data.push(hot)
			// 	}
			// }

			// var res_news = $('#comicList ul:nth-child(3) li');
			// for(var i=0;i<res_news.length;i++){
			// 	var news = {};
			// 	news.name = res_news.eq(i).find('a').attr('title')
			// 	news.href = "http://localhost:8080/page.html?" + res_news.eq(i).find('a').attr('href')
			// 	news.src = res_news.eq(i).find('a img').attr('data-cfsrc')
			// 	news.desc = res_news.eq(i).find('.red').attr('tditle')
			// 	if(news.name){
			// 		news_content.push(news)
			// 	}
			// }

			// data.push(hot_content)
			// data.push(news_content)

			// if(callback){
			// 	console.log(data)
			// 	callback(data)
			// }
			// console.log(data)
		})
}

// api_data('get','http://www.92mh.cc/')
export default {
	get: function(url,type,callback) {
		return api_data('GET',url,type,callback)
	}
}