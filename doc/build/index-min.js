KISSY.add("kg/new-tab/1.0.0/index",["dom","event"],function(e,t,n,a){var r,o=t("dom"),i=t("event");r=function(e){var t=o,n=i,a={"goto":function(e,a){if(1==a){var r=t.create('<form id="openWin" action="'+e+'" target="_blank" method="get"></form>');r&&r.submit()}else{var o=t.create('<a target="_blank" href="'+e+'"></a>');n.fire(o,"click")}}};return e=a}(),a.exports=r});