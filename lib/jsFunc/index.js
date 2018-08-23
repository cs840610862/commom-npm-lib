// 引入并导出常用的js方法
var numberBeforeZero = (num) => {
  num = +num;
  if (typeof num !== 'number') {
    throw new error('请不要传入非number或不能转换为number类型的参数');
  }
  return `0${num}`;
};
// 处理金额返回为两位小数，无舍入误差解决方法
function handleTwoDot(val) {
  val = val || '';
  if (typeof val !== 'string') {
    console.error('传入参数只能为字符串');
    return false;
  }
  if (val === '') return false;
  val = val + '';
  const index = val.indexOf('.');
  const len = val.length;
  const dotNum = len - index -1;
  if (index === -1) {
    return `${val}.00`;
  } else if (dotNum === 1) {
    return `${val}0`;
  } else if (dotNum > 2) {
    return val.slice(0, index + 3);
  }
  return val;
}
// 一个promise版本的ajax请求方式，支持链式调用
var ajax_p = function() {
  
}

module.exports = {
  numberBeforeZero,
  handleTwoDot,
};
