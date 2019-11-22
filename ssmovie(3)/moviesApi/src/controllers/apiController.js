let successState = 0 // 表示成功
let fialState = 1 // 表示失败
let local = 'http://47.103.222.56:8899'   //此处根据需要进行更改



//1根据id获取电影信息
exports.getintroduce = (req, res) => {
    let resObj = { status: successState, message: '' }
    let id = req.params.id//此处到时根据需要更改

    let sql = " SELECT * FROM sea_data WHERE v_id=" + id
    console.log('根据id获取电影信息sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}
//2获取一字段筛选电影类型
exports.getonelist = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let sql = "SELECT tid,tname FROM sea_type ORDER BY tid ASC LIMIT 4,8 "
    console.log('获取一字段筛选电影类型sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}
//3根据电影类型tid获取一字段相关类型电影
exports.gettidmovie = (req, res) => {
    // 代表返回的数据结构    
    let resObj = { status: successState, message: '' }
    let tid = req.params.id
    let sql = "SELECT * FROM sea_data  WHERE tid = " + tid + " ORDER BY v_addtime ASC LIMIT 30 "
    console.log('根据电影类型tid获取一字段相关类型电影语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}

// 4首页推荐获取更新时间最新的30部电影
exports.getmovie = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let sql = "SELECT * FROM sea_data ORDER BY v_addtime DESC LIMIT 30 "
    console.log('首页推荐获取更新时间最新的30部电影sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}
//5获取点击量靠前的20部电影
exports.gethotmovie = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let sql = "SELECT * FROM sea_data ORDER BY v_hit DESC LIMIT 20"
    console.log('获取点击量靠前的20部电影sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}

//6 根据搜索字段获取电影
exports.searchmovie = (req, res) => {
    let resObj = { status: successState, message: '' }
    let name = req.params.name//此处到时根据需要更改
    let sql = " SELECT * FROM sea_data WHERE v_name REGEXP '" + name + "'"
    console.log('根据搜索字段获取电影sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {       
        if (datas.length == 0) {
            resObj.status = fialState
            resObj.message = '未搜到相关电影'
            res.end(JSON.stringify(resObj))
        } else {
            if (err) {
                resObj.status = fialState
                resObj.message = err.message
                res.end(JSON.stringify(resObj))
                return
            }

            //  获取数据成功
            resObj.message = datas
            res.end(JSON.stringify(resObj))
        }

    })
}


// 7 根据id获取电影播放地址
exports.playIdMovie = (req, res) => {
    let resObj = { status: successState, message: '' }
    let id = req.params.id//此处到时根据需要更改

    let sql = " SELECT * FROM sea_playdata WHERE v_id=" + id
    console.log('根据id获取电影播放地址sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        // console.log(datas)
        resObj.message = datas
        // console.log(resObj.message[0].body)
        let a = JSON.stringify(resObj.message[0].body)
        // console.log(a)
        let b = JSON.parse(a)
        // console.log(b)
        let c = new Buffer(b)
        let d = c.toString()
        // console.log(d)
        // console.log(d.match(/http(\S*)index/))      
        if (d.match(/ckm3u8(\S+?)index/) == null) {
            resObj.status = fialState
            resObj.message = '地址丢失！抱歉该电影无法播放！'
            res.end(JSON.stringify(resObj))

        } else {
            
            var str = d.match(/ckm3u8(\S+?)index/)[1];
            // console.log(d.match(/ckm3u8(\S+?)index/)[1],11111111)
            // if(str.indexOf('index.m3u8')== -1){
            resObj.message = str
            res.end(JSON.stringify(resObj))
            // }else{
            //    let str1=str.match(/(\S*)index.m3u8/)[1]
            // //    console.log(str1)
            //    resObj.message = str1
            //    res.end(JSON.stringify(resObj))
            // }
            
        }

    })
}

//8注册用户
exports.register = (req, res) => {
    let resObj = { status: successState, message: '' }
    var username = req.body.name
    var userpassword = req.body.password
    let headimg_url = req.body.url
    let nickname = req.body.nickname
    console.log(username, userpassword,headimg_url,nickname)

    let sql = 'SELECT * FROM users'
    req.db.driver.execQuery(sql, (err, datas) => {
        // console.log(datas)
        if(username!=''&&userpassword!=''&&headimg_url!=''&&nickname!=''){
            usernames = datas.filter((item) => {
                return item.username == username
            })
            if (usernames[0] == undefined) {
                var sql1 = "INSERT INTO users(username,userpassword,nickname,headimg) VALUES ('" + username + "','" + userpassword + "','" + nickname + "','" + headimg_url + "')"
                console.log('注册用户sql语句：============>', sql1)
                // if()
            } else {
                resObj.status = fialState
                resObj.message = '注册失败！'
                res.end(JSON.stringify(resObj))
                return
            }
            req.db.driver.execQuery(sql1, (err, datas) => {
                //   console.log('xxxx')
                //  判断是否异常
                if (err) {
                    resObj.status = fialState
                    resObj.message = err.message
                    res.end(JSON.stringify(resObj))
                    return
                }
                //  获取数据成功
                resObj.message = '注册成功！'
                res.end(JSON.stringify(resObj))
            })
        }else {
            resObj.status = fialState
            resObj.message = '注册失败！'
            res.end(JSON.stringify(resObj))
            
        }
        
    })
}
//9登录
exports.login = (req, res) => {
    let resObj = { status: successState, message: '' }
    var username = req.body.username
    var userpassword = req.body.password
    // var nickname=req.body.nickname
    console.log(username, userpassword)

    let sql = "SELECT username,userpassword,nickname,CONCAT('" + local + "',headimg) AS headimg_url FROM users"
    console.log('登录sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {

        // console.log(datas)
        usernames1 = datas.filter((item) => {
            return item.username == username && item.userpassword == userpassword
        })
        if (usernames1[0] == undefined) {
            resObj.status = fialState
            resObj.message = '登录失败,请检查用户名或密码是否输入正确！'
            res.end(JSON.stringify(resObj))
            return
        } else {
            //  获取数据成功
            resObj.message = usernames1[0]
            res.end(JSON.stringify(resObj))
            // console.log(JSON.stringify(resObj))
        }
    })
}
// 10 根据id获取电影的介绍
exports.getcontent = (req, res) => {
    let resObj = { status: successState, message: '' }
    let id = req.params.id//此处到时根据需要更改

    let sql = " SELECT * FROM sea_content WHERE v_id=" + id
    console.log('根据id获取电影介绍sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        // console.log(datas)
        resObj.message = datas
        let a = JSON.stringify(resObj.message[0].body)
        // console.log(a)
        let b = JSON.parse(a)
        // console.log(b)
        let c = new Buffer(b)
        let str = c.toString()
        resObj.message = str
        // console.log(JSON.stringify(resObj))
        res.end(JSON.stringify(resObj))
    })
}
//11 修改用户信息
exports.changeuser = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }
    let headimg_url = req.body.url
    let password = req.body.password
    let nickname = req.body.nickname    
    let username = req.body.username    
    let sql = "UPDATE users SET headimg='" + headimg_url + "',userpassword='" + password + "',nickname='" + nickname + "' WHERE username='" + username + "'"
    console.log('修改用户信息sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = '更改成功！'
        res.end(JSON.stringify(resObj))
    })
}
//12 获取所有头像
exports.getheadimg = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }    
    let sql = "SELECT img_id,CONCAT('" + local + "',img_url) AS headimg_url FROM headimg"
    console.log('获取所有头像sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}
//13间隔10获取1900部电影
exports.getallmovie = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }

    let sql = "SELECT * FROM sea_data ORDER BY MOD(v_id,10) LIMIT 1900 "
    console.log('间隔10获取1900部电影sql语句：============>', sql)
    req.db.driver.execQuery(sql, (err, datas) => {
        //  判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }

        //  获取数据成功
        resObj.message = datas
        res.end(JSON.stringify(resObj))
    })
}
//14 获取评论信息
exports.getcomments = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }
    let id = req.params.id

    // 1.0 获取参数值
    // let artid = req.params.artid
    // let pageindex = req.query.pageindex
    // let pagesize = 10;
    // let skipCount = (pageindex - 1) * pagesize

    // 2.0 执行查询操作
    let sql = "SELECT v_id,nickname,CONCAT('"+local+"',head) AS headurl,dtime,msg FROM sea_comment WHERE v_id="+id+" ORDER BY dtime DESC"

    console.log('获取评论sql===>', sql)
    req.db.driver.execQuery(sql, (err, data) => {        
        if(data.length==0){
            resObj.status = fialState
            resObj.message ='暂时还没有人评论，快来抢个沙发吧！'
            res.end(JSON.stringify(resObj))
        }else{
           // 3.0 判断是否异常
        if (err) {
            resObj.status = fialState
            resObj.message = err.message
            res.end(JSON.stringify(resObj))
            return
        }
        
        // 4.0 获取数据成功

        data.forEach(item => {
            let a = JSON.stringify(item.msg)
           // console.log(data[0].msg,a)
            let b = JSON.parse(a)
            // console.log(b)
            let c = new Buffer(b)
            let str = c.toString()
            item.msg=str
         });
         
         // console.log(str)
         // resObj.message = str
         resObj.message = data
         res.end(JSON.stringify(resObj)) 
        }
       
       
    })
}


//15 提交评论数据
exports.postcomment = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }
    let id = req.params.id 
    let msg = req.body.msg
    let nickname=req.body.nickname
    let headimg=req.body.headimg
    let dtime=req.body.dtime   
    // // 1.0 获取参数值
    // let artid = req.params.artid
    // //获取评论内容
    // req.on('data', (chunk) => {
    //   let commentTxt = chunk.toString();
    //   console.log(chunk)
    //   const qs = require('querystring');
    //   let commentObj = qs.parse(commentTxt);
      // 2.0 执行查询操作
      let sql = "INSERT INTO sea_comment(v_id,nickname,head,dtime,msg) VALUES ("+id+",'"+nickname+"','"+headimg+"','"+dtime+"','"+msg +"')"
      console.log('post提交评论sql===>', sql)
      req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
          resObj.status = fialState
          resObj.message = err.message
          res.end(JSON.stringify(resObj))
          return
        }

        // 4.0 获取数据成功
        resObj.message = '评论提交成功'
        res.end(JSON.stringify(resObj))
      })

    // })
}
//16根据v_id更新电影的点击量达到更新热点电影页面的目的
exports.updatehit = (req, res) => {
    // 代表返回的数据结构
    let resObj = { status: successState, message: '' }
    let id = req.params.id
      // 2.0 执行查询操作
      let sql = "UPDATE sea_data SET v_hit=v_hit+1 WHERE v_id="+id
      console.log('更新点击量sql===>', sql)
      req.db.driver.execQuery(sql, (err, data) => {
        // 3.0 判断是否异常
        if (err) {
          resObj.status = fialState
          resObj.message = err.message
          res.end(JSON.stringify(resObj))
          return
        }
        // 4.0 获取数据成功
        resObj.message = '更新点击量成功！'
        res.end(JSON.stringify(resObj))
      })
}