(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(54)},23:function(e,t,a){},25:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=(a(23),a(2)),o=a(3),u=a(5),l=a(4),p=a(6),h=(a(25),a(7)),m=a.n(h),d=a(8),f=a(10),v=a.n(f),k=(a(48),a(50),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"space",onClick:function(){return e.props.onClick()}},r.a.createElement("p",null,"X"===this.props.value||"O"===this.props.value?this.props.value:""))}}]),t}(n.Component)),b=(a(52),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"container__modal-content"},r.a.createElement("div",{className:"row"},r.a.createElement("p",null,this.props.value)),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:function(){return e.props.onClick()}},"Yes!"))))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).createSpace=function(e){return r.a.createElement(k,{value:a.state.spaces[e],onClick:function(){return a.handleClick(e)}})},a.createRows=function(e){var t=[];e*=3;for(var n=0;n<3;n++)t.push(r.a.createElement("div",{key:n+e,className:"col"},a.createSpace(n+e)));return t},a.createBoard=function(){for(var e=[],t=0;t<3;t++)e.push(r.a.createElement("div",{key:t,className:"row"},a.createRows(t)));return e},a.state={spaces:Array.from(Array(9).keys()),isEndGame:!1,message:""},a.baseState={spaces:Array.from(Array(9).keys()),isEndGame:!1,message:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"setStateAsync",value:function(e){var t=this;return new Promise(function(a){t.setState(e,a)})}},{key:"handleClick",value:function(){var e=Object(d.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("O"===(a=this.state.spaces.slice())[t]||"X"===a[t]||0!=this.state.isEndGame){e.next=6;break}return a[t]="X",e.next=5,this.setStateAsync({spaces:a});case 5:this.computerMove(t);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"hasGameEnded",value:function(){var e=this,t=this.state.spaces.slice();v.a.get("https://intense-woodland-70087.herokuapp.com/api/win/".concat(t)).then(function(t){!1!==t.data&&e.setState({spaces:e.state.spaces,isEndGame:!0,message:t.data})})}},{key:"resetBoard",value:function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStateAsync(this.baseState);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"computerMove",value:function(){var e=Object(d.a)(m.a.mark(function e(){var t,a=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.hasGameEnded(),!0!==this.state.isEndGame&&(t=this.state.spaces.slice(),v.a.get("https://intense-woodland-70087.herokuapp.com/api/".concat(t)).then(function(e){a.setStateAsync({spaces:e.data}),a.hasGameEnded()}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container__main-content"},r.a.createElement("div",{className:"board"},this.createBoard()),this.state.isEndGame?r.a.createElement(b,{value:this.state.message,onClick:function(){return e.resetBoard()}},"Modal"):null)}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.7806667e.chunk.js.map