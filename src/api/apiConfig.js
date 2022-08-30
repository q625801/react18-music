import axios from "axios"; // 引用axios
const instance = axios.create({
  timeout: 60000,
});
//请求拦截器
instance.interceptors.request.use(config => {
  return config
})

//post请求
function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance({
      headers: {
        'Content-Type': "application/json;charset=utf-8"
      },
      params: data,
      method: 'get',
      url: url
    }).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

//download blob
function downloadBlobFile(url, data = {}){
  return new Promise((resolve, reject) => {
    instance({
      headers: {
        'Content-Type': "application/json;charset=utf-8"
      },
      responseType:'blob',
      params: data,
      method: 'get',
      url: url
    }).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
export function getJson(url, params, successCallback, errorCallback,isloading = true){
    // if (isloading){
    //     store.state.loadding = true;
    // }
    // const interfaceSign = url.indexOf('?') > -1 ? '&' : '?';
    const interfaceUrl =
      url;
    get(interfaceUrl, params)
        .then(res => successDataFun(res, successCallback, isloading))
        .catch(err => failDataFun(err, errorCallback, isloading));
}
export function downloadJson(url, params, successCallback, errorCallback,isloading = true){
  // if (isloading){
  //     store.state.loadding = true;
  // }
  downloadBlobFile(url, params)
      .then(res => successDataFun(res, successCallback, isloading))
      .catch(err => failDataFun(err, errorCallback, isloading));
}
function successDataFun(res, successCallback, isloading){
    // if (isloading) {
    //     store.state.loadding = false;
    // }
    // let ret = res.data
    if(successCallback){
        successCallback(res)
    }

    // let state = parseInt(ret.state);
    // switch (state) {
    //     case 6001: //账号密码错误
        
    //     break
    // default:
    //     if(successCallback){
    //         successCallback(res)
    //     }
    //     break
    // }
}
function failDataFun(err, errorCallback, isloading){
    // if (isloading) {
    //     store.state.loadding = false;
    // }
    // let ret = err.data
    if(errorCallback){
        errorCallback(err)
    }
    // let state = parseInt(ret.state);
    // switch (state) {
    // case 6001: //账号密码错误
        
    //     break
    // default:
    //     if(errorCallback){
    //         errorCallback(err)
    //     }
    //     break
    // }
}
