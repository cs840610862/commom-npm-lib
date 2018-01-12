// 引入并导出常用的js方法
export const numberBeforeZero = (num) => {
    num = +num;
    if (typeof num !== 'number') {
        throw new error('请不要传入非number或不能转换为number类型的参数');
    }
    return `0${num}`;
}
