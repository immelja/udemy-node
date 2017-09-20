console.log('starting callbck.js')

var getUser = (id, callback) => {
    var user = {
    	id: id,
    	name: 'vikram'
    }
    setTimeout(() => {
        callback(user)
    },0)
}

getUser(101,(usr) => {
    console.log(usr)
})

console.log('end')