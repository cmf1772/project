// const host = /localhost/.test(window.location.host)?'https://h5.chelun.com':'http://h5-test.chelun.com';
import JSBridge from '@/utils/JSBridge.js';

function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method
    };
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    return fetch(url, params)
      .then(res => res.json())
      .then(body => body);
}


export let uploadImg = (type)=>{
  return new Promise((resolve, reject)=>{
    JSBridge.invoke('device', 'chooseImage', {
      type,
      chooseCallbackName: function(res){
        resolve(res);
      }
    })
  })
}

export let cityList = ()=>{
  return sendRequest('/api/ExchangeJiaZhao/cityList');
}

export let costList = (...params)=>{
  return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params.type}&city_id=${params.city_id}&province_id=${params.pro_id}`);
}
