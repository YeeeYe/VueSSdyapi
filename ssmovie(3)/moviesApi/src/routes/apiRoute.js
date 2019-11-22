const express = require('express')

let route = express.Router()

const apiCtrl = require('../controllers/apiController.js')

// 1获取首页推荐的30部电影信息
route.get('/api/getmovie', apiCtrl.getmovie)

// 1请求电影播放地址
// route.get('/api/getplayData', apiCtrl.getplayData)


//2 根据搜索字段获取电影信息
// route.get('/api/searchmovie1',apiCtrl.searchmovie1)
route.get('/api/searchmovie/:name',apiCtrl.searchmovie)
//3 根据id获取电影播放地址
route.get('/api/playIdMovie/:id',apiCtrl.playIdMovie)
//4 注册
route.post('/api/register',apiCtrl.register)
//5 登录
route.post('/api/login',apiCtrl.login)
//6获取热点电影
route.get('/api/gethotmovie',apiCtrl.gethotmovie)
//7 根据id获取电影介绍
route.get('/api/getcontent/:id',apiCtrl.getcontent)
//8 根据电影类型tid获取相关类型电影
route.get('/api/gettidmovie/:id',apiCtrl.gettidmovie)
//9获取一字段筛选电影类型
route.get('/api/getonelist',apiCtrl.getonelist)
//10修改用户信息
route.post('/api/changeuser',apiCtrl.changeuser)
//11获取所有头像
route.get('/api/getheadimg',apiCtrl.getheadimg)
//12间隔获取1000部电影
route.get('/api/getallmovie',apiCtrl.getallmovie)
//13根据id获取电影信息
route.get('/api/getintroduce/:id',apiCtrl.getintroduce)
//14根据id获取评论
route.get('/api/getcomments/:id',apiCtrl.getcomments)
//15提交评论
route.post('/api/postcomment/:id',apiCtrl.postcomment)
//16根据v_id更新电影的点击量达到更新热点电影页面的目的
route.get('/api/updatehit/:id',apiCtrl.updatehit)

module.exports = route