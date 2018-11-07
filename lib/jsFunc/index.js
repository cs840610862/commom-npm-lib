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
// 获取鼠标坐标
getMouseXY(e) {
  var x = 0, y = 0;
  e = e || window.event;
  if (e.pageX) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft - document.body.clientLeft;
    y = e.clientY + document.body.scrollTop - document.body.clientTop;
  }
  return {
    x: x,
    y: y
  };
}
// 根据选择器获取元素
queryDom(select) {
  return document.querySelector(select);
}
// 弹框拖动时间，依赖于 jquery 插件
boxMove(trigger, moveElement) {
  // trigger - 触发移动的元素，可以是class， id
  // moveElement - 需要移动的目标元素
  let calcEl = $(moveElement);
  const _this = this;
  $(trigger).mousedown(function(ev) {
    var lf = parseInt(calcEl.css('left'));
    var rt = parseInt(calcEl.css('top'));
    var mX = parseInt(getMouseXY(ev).x);
    var mY = parseInt(getMouseXY(ev).y);

    document.onmousemove=function(ev) {
      var msX = parseInt(getMouseXY(ev).x);
      var msY = parseInt(getMouseXY(ev).y);
      var l = lf + (msX - mX);
      var t = rt + (msY - mY);
      if (l <= 0) {
        l = 0;
      }
      if (t <= 0) {
        t = 0;
      }
      
      calcEl.css('left', l + 'px');
      calcEl.css('top', t + 'px');
    }
    document.onmouseup = function() {
      document.onmousemove = null
      document.onmouseup = null
    }
  });
}
module.exports = {
  numberBeforeZero,
  handleTwoDot,
  getMouseXY,
  boxMove,
};
