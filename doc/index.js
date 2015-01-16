// var $ = require('node').all;
var DOM = require('dom');
var Event = require('event');
// var Base = require('base');

/**
 * 浏览器新开tab页，不被浏览器拦截
 * @author:wulin.zwl@tmall.com
 * @date:2014年8月18
 */
var NewTab = {
    /**
     * 执行调用
     * @method goto
     * @param {String} url 需要跳转的url
     * @param {type} type.data cspu 的数据
     * @return {null}
     */
    goto: function(url, type) {
        if (type == 1) {
            var tForm = DOM.create('<form id="openWin" action="' + url + '" target="_blank" method="get"></form>')
            tForm && tForm.submit();
        } else {
            var tHref = DOM.create('<a target="_blank" href="' + url + '"></a>')
            Event.fire(tHref, 'click');
        }
    }
}

// var NewTab = Base.extend({
//     initializer: function() {
//         // var self = this;
//         // var $target = self.get('$target');

//     },
//     /**
//      * 执行调用
//      * @method goto
//      * @param {String} url 需要跳转的url
//      * @param {type} type.data cspu 的数据
//      * @return {null}
//      */
//     goto: function(url, type) {
//         if (type == 1) {
//             var tForm = DOM.create('<form id="openWin" action="' + url + '" target="_blank" method="get"></form>')
//             tForm && tForm.submit();

//         } else {

//             var tHref = DOM.create('<a target="_blank" href="' + url + '"></a>')
//             Event.fire(tHref, 'click');
//         }
//     }

// }, {
//     ATTRS: {
//         $target: {
//             value: '',
//             getter: function(v) {
//                 return $(v);
//             }
//         }
//     }
// });

module.exports = NewTab;
