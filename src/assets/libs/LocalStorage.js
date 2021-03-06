let storage = window.localStorage;
let localStorage = {
  // 获取
  getItem: function (key) {
    var value = storage.getItem(key);
    if (value === null) { // 如果不存在
      return false;
    }
    if (value && value.substring(0, 1) === "{" || value.substring(0, 1) === "[") { // 如果字符串符合对象或者数组基本特征
      value = JSON.parse(value); // 把字符串转为对象
    }
    return value;
  },
  // 设置
  setItem: function (key, value) {
    if (getType(value) === "object" || getType(value) === "Array") { // 如果是对象
      value = JSON.stringify(value);
    }
    storage.setItem(key, value);
  },
  // 删除项
  removeItem: function (key) {
    this.getItem(key) && storage.removeItem(key);
  },
  //  清空
  clear: function () {
    storage.clear(); // 清空本地存储
  }
}
// 判断变量类型
function getType(object) {
  /**
   * 方法来源：prototype.js
   * getType(5); // => "Number"
   * getType({}); // => "Object"
   * getType(/foo/); // => "RegExp"
   * getType(''); // => "String"
   * getType(true); // => "Boolean"
   * getType([]); // => "Array"
   * getType(undefined); // => "Window"
   * getType(Element); // => "Constructor"
   **/
  return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
}
export default {
  install: function (vm) {
    vm.prototype.$localStorage = localStorage;
  }
}
