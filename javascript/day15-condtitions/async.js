console.log('requesting product infomation')
setTimeout(function(){
    console.log('user 1 response sent')
}, 1500)

console.log('user 2 requesting order information')
setTimeout(function(){
    console.log('user 2 response sent')
}, 2000)

console.log('user 3 requesting shoe info')
setTimeout(function(){
    console.log('user 3 response sent')
}, 500)

console.log('user 4 requesting login screen')
setTimeout(function(){
    console.log('user 4 response sent')
}, 200)

/*
requesting product infomation
user 2 requesting order information
user 3 requesting shoe info
user 4 requesting login screen
user 4 response sent
user 3 response sent
user 1 response sent
user 2 resoponse sent
*/