import origJsonp from 'jsonp'

const formatParams = obj => {
    let url = ''
    for(let k in obj){
        const val = obj[k]===undefined ? '' : obj[k]
        url += `&${k}=${encodeURIComponent(val)}`
    }
    return url ? url.substr(1):''
}
export default (url, data, options) => new Promise((resolve, reject)=>{
    url += `${url.indexOf('?') < 0 ? '?' : '&'}${formatParams(data)}`
    origJsonp(url, options, (err, data) => {
        if(!err){
            resolve(data)
        }else{
            reject(err)
        }
    })
})

