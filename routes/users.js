const router = require('koa-router')()
const userCtl = require('../controller/user')
router.prefix('/users')

// 添加系统用户
router.post('/add', userCtl.userAdd)

// 修改系统用户
router.post('/update', userCtl.userUpdate)

// 删除系统用户
router.post('/del', userCtl.userDelete)

// 查询所有系统用户
router.get('/find', userCtl.userFindAll)

// 查询单个系统用户
router.get('/find/:id', userCtl.userFindOne)



module.exports = router
