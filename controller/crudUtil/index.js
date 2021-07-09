/**
 * 用于添加数据的公共方法
 * @param {*} model 
 * @param {*} params 
 * @param {*} ctx 
 */
const add = (model, params, ctx) => (
    model.create(params).then((rel) => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: '成功',
                data: rel
            }
        } else {
            ctx.body = {
                code: 300,
                msg: "add aberrant"
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: "add aberrant"
        }
        console.error(err);
    })
)

/**
 *  关于修改数据的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} params 
 * @param {*} ctx 
 */
const update = (model, where, params, ctx) => (
    model.updateOne(where, params).then(rel => {
        ctx.body = {
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: "update aberrant"
        }
        console.error(err);
    })
)

/**
 *  用于删除的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} ctx 
 */
const del = (model, where, ctx) => (
    model.findOneAndDelete(where).then(rel => {
        ctx.body = {
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: "del aberrant"
        }
        console.error(err);
    })

)

/**
 * 用于查询单个数据的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} ctx 
 */
const findOne = (model, where, ctx) => (
    model.findOne(where).then(rel => {
        ctx.body = {
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: "find aberrant"
        }
        console.error(err);
    })
)

/**
 * 用于查询所有数据的公共方法
 * @param {*} model 
 * @param {*} where 
 * @param {*} ctx 
 * @returns 
 */
const find = (model, where, ctx) => (
    model.find(where).then(rel => {
        ctx.body = {
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: "find aberrant"
        }
        console.error(err);
    })
)



module.exports = {
    find,
    add,
    update,
    del,
    findOne
}