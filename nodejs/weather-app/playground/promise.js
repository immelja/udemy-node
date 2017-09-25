var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        	if (typeof a === 'number' && typeof b === 'number') {
        	   resolve(a+b)
        	} else {
        		reject('arguments must be numbers')
        	}
        },1000)
    })
}
asyncAdd(5,'e').then((result) => {
   console.log(result)
},(error) => {
   console.log(error)
})

// var somePromise = new Promise((resolve,reject) => {
// 	setTimeout(() => {
//         // resolve('hey it worked')
//         reject('failed')
// 	},1000)
// })

// somePromise.then((message) => {
//     console.log(message)
// },(error) => {
//     console.log(error)
// })

console.log('start app')
