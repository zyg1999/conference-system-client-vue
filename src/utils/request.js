import axios, { CancelToken } from "axios";
import qs from "qs";
//全局配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "www.shidongxuan.top/smartMeeting_Web";
axios.defaults.withCredentials = true;
axios.defaults.responseType = "json";

const pending = new Map();
//取消重复请求
function cancelReq(config) {
  const str = `${config.url}+${config.method}`;
  const f = pending.get(str);

  if (f) {
    f();
  }
}
//错误原因
/**
 *  错误原因
 * @param {number} status
 */
function switchError(status) {
  switch (status) {
    case 400:
      return "错误请求";
    case 401:
      return "未授权，请重新登录";
    case 403:
      return "拒绝访问";
    case 404:
      return "请求错误,未找到该资源";
    case 405:
      return "请求方法未允许";
    case 408:
      return "请求超时";
    case 500:
      return "服务器端出错";
    case 501:
      return "网络未实现";
    case 502:
      return "网络错误";
    case 503:
      return "服务不可用";
    case 504:
      return "网络超时";
    case 505:
      return "http版本不支持该请求";
    default:
      return `连接错误${status}`;
  }
}
//请求拦截
axios.interceptors.request.use(
  config => {
    //loading.show()
    cancelReq(config);
    config.cancelToken = new CancelToken(c => {
      pending.set(`${config.url}+${config.method}`, c);
    });
    let token = localStorage.getItem("token");
    config.headers["token"] = token;
    //判断是否上传头像
    if (config.url && /\/user\/update\/[avatar]/.test(config.url)) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8";
    }
    return config;
  },
  err => {
    //loading.close()
    return Promise.reject(err);
  }
);

// 响应拦截
axios.interceptors.response.use(
  res => {
    //loading.close()
    cancelReq(res.config);
    if (res.status >= 200 && res.status < 300 && res.data.status === 0) {
      return res;
    }
    const errMsg = res.data.message || "服务器异常，请稍后再试";
    //toast(errMsg)
    return Promise.reject(errMsg);
  },
  err => {
    //loading.close()
    if (err && err.response) {
      console.log(err);
      return Promise.reject(switchError(err.response.status));
    }
    return Promise.reject(new Error("连接到服务器失败"));
  }
);
export const request = (url, method, data) => {
  return axios({
    url,
    method,
    params: method.toLocaleLowerCase() === "get" ? data : null,
    data:
      method.toLocaleLowerCase() === "post"
        ? Object.prototype.toString.call(data) === "[object FormData]"
          ? data
          : qs.stringify(data)
        : null
  });
};
