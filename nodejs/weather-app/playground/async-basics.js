console.log('starting app')

setTimeout(() => {
  console.log('inside of callback')
},200)

setTimeout(() => {
	console.log('inside second callback')
},0)

console.log('finishing up')