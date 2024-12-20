(()=>{"use strict";var t={886:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([t.id,"html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,o,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var h=[].concat(t[u]);i&&a[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),o&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=o):h[4]="".concat(o)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},a=[],s=0;s<t.length;s++){var c=t[s],u=i.base?c[0]+i.base:c[0],h=r[u]||0,p="".concat(u," ").concat(h);r[u]=h+1;var l=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var d=o(f,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:d,references:1})}a.push(p)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var r=i(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a]);e[s].references--}for(var c=i(t,o),u=0;u<r.length;u++){var h=n(r[u]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}r=c}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),i=n(795),o=n.n(i),r=n(569),a=n.n(r),s=n(565),c=n.n(s),u=n(216),h=n.n(u),p=n(589),l=n.n(p),f=n(886),d={};d.styleTagTransform=l(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=h(),e()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals;var m,g,y=window.innerWidth,v=window.innerHeight;!function(t){t.LEFT="ArrowLeft",t.RIGHT="ArrowRight",t.UP="ArrowUp",t.DOWN="ArrowDown"}(m||(m={})),function(t){t.SKIER_CRASH="skierCrash",t.SKIER_LEFT="skierLeft",t.SKIER_LEFTDOWN="skierLeftDown",t.SKIER_DOWN="skierDown",t.SKIER_RIGHTDOWN="skierRightDown",t.SKIER_RIGHT="skierRight",t.TREE="tree",t.TREE_CLUSTER="treeCluster",t.ROCK1="rock1",t.ROCK2="rock2",t.RHINO="rhino",t.RHINO_RUN1="rhinoRun1",t.RHINO_RUN2="rhinoRun2",t.RHINO_EAT1="rhinoEat1",t.RHINO_EAT2="rhinoEat2",t.RHINO_EAT3="rhinoEat3",t.RHINO_EAT4="rhinoEat4",t.RHINO_CELEBRATE1="rhinoCelebrate1",t.RHINO_CELEBRATE2="rhinoCelebrate2"}(g||(g={}));var w=[{name:g.SKIER_CRASH,url:"img/skier_crash.png"},{name:g.SKIER_LEFT,url:"img/skier_left.png"},{name:g.SKIER_LEFTDOWN,url:"img/skier_left_down.png"},{name:g.SKIER_DOWN,url:"img/skier_down.png"},{name:g.SKIER_RIGHTDOWN,url:"img/skier_right_down.png"},{name:g.SKIER_RIGHT,url:"img/skier_right.png"},{name:g.TREE,url:"img/tree_1.png"},{name:g.TREE_CLUSTER,url:"img/tree_cluster.png"},{name:g.ROCK1,url:"img/rock_1.png"},{name:g.ROCK2,url:"img/rock_2.png"},{name:g.RHINO,url:"img/rhino_default.png"},{name:g.RHINO_RUN1,url:"img/rhino_run_left.png"},{name:g.RHINO_RUN2,url:"img/rhino_run_left_2.png"},{name:g.RHINO_EAT1,url:"img/rhino_eat_1.png"},{name:g.RHINO_EAT2,url:"img/rhino_eat_2.png"},{name:g.RHINO_EAT3,url:"img/rhino_eat_3.png"},{name:g.RHINO_EAT4,url:"img/rhino_eat_4.png"},{name:g.RHINO_CELEBRATE1,url:"img/rhino_celebrate_1.png"},{name:g.RHINO_CELEBRATE2,url:"img/rhino_celebrate_2.png"}],b=1.4142;function E(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}var R=function(t,e){this.x=0,this.y=0,this.x=t,this.y=e},_=function(t,e,n,i){this.left=0,this.top=0,this.right=0,this.bottom=0,this.left=t,this.top=e,this.right=n,this.bottom=i};function T(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}var I,O,A=function(){function t(t,e,n){this.drawOffset=new R(0,0),this.canvasId=t,this.width=e,this.height=n,this.canvas=this.findCanvas(),this.ctx=this.getCanvasContext(),this.setupCanvas()}return t.prototype.findCanvas=function(){var t=document.getElementById(this.canvasId);if(!(t instanceof HTMLCanvasElement))throw new Error("Canvas element ".concat(this.canvasId," not found!"));return t},t.prototype.getCanvasContext=function(){var t=this.canvas.getContext("2d");if(!t)throw new Error("Could not retrieve context for canvas ".concat(this.canvasId));return t},t.prototype.setupCanvas=function(){this.canvas.width=this.width*window.devicePixelRatio,this.canvas.height=this.height*window.devicePixelRatio,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px",this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio)},t.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height)},t.prototype.setDrawOffset=function(t,e){this.drawOffset.x=t,this.drawOffset.y=e},t.prototype.drawImage=function(t,e,n,i,o){e-=this.drawOffset.x,n-=this.drawOffset.y,this.ctx.drawImage(t,e,n,i,o)},t}(),S=function(){function t(){this.loadedImages={}}return t.prototype.loadImages=function(t){return e=this,n=void 0,o=function(){var e,n,i,o,r;return function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(a=0)),a;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(a){switch(a.label){case 0:for(e=[],n=0,i=t;n<i.length;n++)o=i[n],r=this.loadSingleImage(o),e.push(r);return[4,Promise.all(e)];case 1:return a.sent(),[2]}}))},new((i=void 0)||(i=Promise))((function(t,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,s)}c((o=o.apply(e,n||[])).next())}));var e,n,i,o},t.prototype.loadSingleImage=function(t){var e=this;return new Promise((function(n){var i=new Image;i.onload=function(){i.width*=.5,i.height*=.5,e.loadedImages[t.name]=i,n()},i.src=t.url}))},t.prototype.getImage=function(t){return this.loadedImages[t]},t}(),N=function(){function t(t,e,n,i){this.position=new R(t,e),this.imageManager=n,this.canvas=i}return t.prototype.getPosition=function(){return this.position},t.prototype.draw=function(){var t=this.imageManager.getImage(this.imageName);if(t){var e=this.position.x-t.width/2,n=this.position.y-t.height/2;this.canvas.drawImage(t,e,n,t.width,t.height)}},t.prototype.getBounds=function(){var t=this.imageManager.getImage(this.imageName);return t?new _(this.position.x-t.width/2,this.position.y-t.height/2,this.position.x+t.width/2,this.position.y):null},t}(),x=(I=function(t,e){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},I(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}I(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),k=[g.TREE,g.TREE_CLUSTER,g.ROCK1,g.ROCK2],C=function(t){function e(e,n,i,o){var r=t.call(this,e,n,i,o)||this,a=E(0,k.length-1);return r.imageName=k[a],r}return x(e,t),e.prototype.die=function(){},e}(N),D=function(){function t(t,e){this.obstacles=[],this.imageManager=t,this.canvas=e}return t.prototype.getObstacles=function(){return this.obstacles},t.prototype.drawObstacles=function(){this.obstacles.forEach((function(t){t.draw()}))},t.prototype.placeInitialObstacles=function(){for(var t=Math.ceil(y/300*(v/300)),e=new _(-y/2,100,y/2,v/2),n=0;n<t;n++)this.placeRandomObstacle(e);this.obstacles.sort((function(t,e){return t.getPosition().y-e.getPosition().y}))},t.prototype.placeNewObstacle=function(t,e){8===E(1,8)&&(t.left<e.left?this.placeObstacleLeft(t):t.left>e.left&&this.placeObstacleRight(t),t.top<e.top?this.placeObstacleTop(t):t.top>e.top&&this.placeObstacleBottom(t))},t.prototype.placeObstacleLeft=function(t){var e=new _(t.left,t.top,t.left,t.bottom);this.placeRandomObstacle(e)},t.prototype.placeObstacleRight=function(t){var e=new _(t.right,t.top,t.right,t.bottom);this.placeRandomObstacle(e)},t.prototype.placeObstacleTop=function(t){var e=new _(t.left,t.top,t.right,t.top);this.placeRandomObstacle(e)},t.prototype.placeObstacleBottom=function(t){var e=new _(t.left,t.bottom,t.right,t.bottom);this.placeRandomObstacle(e)},t.prototype.placeRandomObstacle=function(t){var e;do{e=this.calculateOpenPosition(t)}while(!e);var n=new C(e.x,e.y,this.imageManager,this.canvas);this.obstacles.push(n)},t.prototype.calculateOpenPosition=function(t){var e=E(t.left,t.right),n=E(t.top,t.bottom);return this.obstacles.find((function(t){var i=t.getPosition().x,o=t.getPosition().y;return e>i-50&&e<i+50&&n>o-50&&n<o+50}))?null:new R(e,n)},t}(),H=function(){function t(t,e,n){this.images=t,this.looping=e,this.callback=n}return t.prototype.getImages=function(){return this.images},t.prototype.getLooping=function(){return this.looping},t.prototype.getCallback=function(){return this.callback},t}(),L=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();!function(t){t.STATE_RUNNING="running",t.STATE_EATING="eating",t.STATE_CELEBRATING="celebrating"}(O||(O={}));var M,G,K=[g.RHINO_RUN1,g.RHINO_RUN2],P=[g.RHINO_EAT1,g.RHINO_EAT2,g.RHINO_EAT3,g.RHINO_EAT4],F=[g.RHINO_CELEBRATE1,g.RHINO_CELEBRATE2],W=function(t){function e(e,n,i,o){var r=t.call(this,e,n,i,o)||this;return r.imageName=g.RHINO,r.state=O.STATE_RUNNING,r.speed=10.5,r.animations={},r.curAnimation=null,r.curAnimationFrame=0,r.curAnimationFrameTime=Date.now(),r.setupAnimations(),r.setAnimation(),r}return L(e,t),e.prototype.setupAnimations=function(){this.animations[O.STATE_RUNNING]=new H(K,!0),this.animations[O.STATE_EATING]=new H(P,!1,this.celebrate.bind(this)),this.animations[O.STATE_CELEBRATING]=new H(F,!0)},e.prototype.setState=function(t){this.state=t,this.setAnimation()},e.prototype.isRunning=function(){return this.state===O.STATE_RUNNING},e.prototype.update=function(t,e){this.isRunning()&&(this.move(e),this.checkIfCaughtTarget(e)),this.animate(t)},e.prototype.move=function(t){if(this.isRunning()){var e,n,i,o,r,a=t.getPosition(),s=(e=this.position.x,n=this.position.y,i=a.x-e,o=a.y-n,(r=Math.hypot(i,o))&&(i/=r,o/=r),new R(i,o));this.position.x+=s.x*this.speed,this.position.y+=s.y*this.speed}},e.prototype.animate=function(t){this.curAnimation&&t-this.curAnimationFrameTime>250&&this.nextAnimationFrame(t)},e.prototype.nextAnimationFrame=function(t){if(this.curAnimation){var e=this.curAnimation.getImages();if(this.curAnimationFrameTime=t,this.curAnimationFrame++,this.curAnimationFrame>=e.length){if(!this.curAnimation.getLooping())return void this.finishAnimation();this.curAnimationFrame=0}this.imageName=e[this.curAnimationFrame]}},e.prototype.finishAnimation=function(){if(this.curAnimation){var t=this.curAnimation.getCallback();this.curAnimation=null,t&&t.apply(null)}},e.prototype.checkIfCaughtTarget=function(t){var e=this.getBounds(),n=t.getBounds();e&&n&&T(e,n)&&this.caughtTarget(t)},e.prototype.caughtTarget=function(t){t.die(),this.setState(O.STATE_EATING)},e.prototype.celebrate=function(){this.setState(O.STATE_CELEBRATING)},e.prototype.setAnimation=function(){if(this.curAnimation=this.animations[this.state],this.curAnimation){this.curAnimationFrame=0;var t=this.curAnimation.getImages();this.imageName=t[this.curAnimationFrame]}},e.prototype.die=function(){},e}(N),U=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();!function(t){t.STATE_SKIING="skiing",t.STATE_CRASHED="crashed",t.STATE_DEAD="dead"}(G||(G={}));var B=((M={})[0]=g.SKIER_LEFT,M[1]=g.SKIER_LEFTDOWN,M[2]=g.SKIER_DOWN,M[3]=g.SKIER_RIGHTDOWN,M[4]=g.SKIER_RIGHT,M),j=function(t){function e(e,n,i,o,r){var a=t.call(this,e,n,i,r)||this;return a.imageName=g.SKIER_DOWN,a.state=G.STATE_SKIING,a.direction=2,a.speed=10,a.obstacleManager=o,a}return U(e,t),e.prototype.isCrashed=function(){return this.state===G.STATE_CRASHED},e.prototype.isSkiing=function(){return this.state===G.STATE_SKIING},e.prototype.isDead=function(){return this.state===G.STATE_DEAD},e.prototype.setDirection=function(t){this.direction=t,this.setDirectionalImage()},e.prototype.setDirectionalImage=function(){this.imageName=B[this.direction]},e.prototype.update=function(){this.isSkiing()&&(this.move(),this.checkIfHitObstacle())},e.prototype.draw=function(){this.isDead()||t.prototype.draw.call(this)},e.prototype.move=function(){switch(this.direction){case 1:this.moveSkierLeftDown();break;case 2:this.moveSkierDown();break;case 3:this.moveSkierRightDown()}},e.prototype.moveSkierLeft=function(){this.position.x-=10},e.prototype.moveSkierLeftDown=function(){this.position.x-=this.speed/b,this.position.y+=this.speed/b},e.prototype.moveSkierDown=function(){this.position.y+=this.speed},e.prototype.moveSkierRightDown=function(){this.position.x+=this.speed/b,this.position.y+=this.speed/b},e.prototype.moveSkierRight=function(){this.position.x+=10},e.prototype.moveSkierUp=function(){this.position.y-=10},e.prototype.handleInput=function(t){if(this.isDead())return!1;var e=!0;switch(t){case m.LEFT:this.turnLeft();break;case m.RIGHT:this.turnRight();break;case m.UP:this.turnUp();break;case m.DOWN:this.turnDown();break;default:e=!1}return e},e.prototype.turnLeft=function(){this.isCrashed()&&this.recoverFromCrash(0),0===this.direction?this.moveSkierLeft():this.setDirection(this.direction-1)},e.prototype.turnRight=function(){this.isCrashed()&&this.recoverFromCrash(4),4===this.direction?this.moveSkierRight():this.setDirection(this.direction+1)},e.prototype.turnUp=function(){this.isCrashed()||0!==this.direction&&4!==this.direction||this.moveSkierUp()},e.prototype.turnDown=function(){this.isCrashed()||this.setDirection(2)},e.prototype.getBounds=function(){var t=this.imageManager.getImage(this.imageName);return t?new _(this.position.x-t.width/2,this.position.y-t.height/2,this.position.x+t.width/2,this.position.y-t.height/4):null},e.prototype.checkIfHitObstacle=function(){var t=this.getBounds();t&&this.obstacleManager.getObstacles().find((function(e){var n=e.getBounds();return!!n&&T(t,n)}))&&this.crash()},e.prototype.crash=function(){this.state=G.STATE_CRASHED,this.speed=0,this.imageName=g.SKIER_CRASH},e.prototype.recoverFromCrash=function(t){this.state=G.STATE_SKIING,this.speed=10,this.setDirection(t)},e.prototype.die=function(){this.state=G.STATE_DEAD,this.speed=0},e}(N),Z=function(){function t(){this.gameTime=Date.now(),this.init(),this.setupInputHandling()}return t.prototype.init=function(){this.canvas=new A("skiCanvas",y,v),this.imageManager=new S,this.obstacleManager=new D(this.imageManager,this.canvas),this.skier=new j(0,0,this.imageManager,this.obstacleManager,this.canvas),this.rhino=new W(-500,-2e3,this.imageManager,this.canvas),this.calculateGameWindow(),this.obstacleManager.placeInitialObstacles()},t.prototype.setupInputHandling=function(){document.addEventListener("keydown",this.handleKeyDown.bind(this))},t.prototype.load=function(){return t=this,e=void 0,i=function(){return function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(a=0)),a;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(t){switch(t.label){case 0:return[4,this.imageManager.loadImages(w)];case 1:return t.sent(),[2]}}))},new((n=void 0)||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}));var t,e,n,i},t.prototype.run=function(){this.canvas.clearCanvas(),this.updateGameWindow(),this.drawGameWindow(),requestAnimationFrame(this.run.bind(this))},t.prototype.updateGameWindow=function(){this.gameTime=Date.now();var t=this.gameWindow;this.calculateGameWindow(),this.obstacleManager.placeNewObstacle(this.gameWindow,t),this.skier.update(),this.rhino.update(this.gameTime,this.skier)},t.prototype.drawGameWindow=function(){this.canvas.setDrawOffset(this.gameWindow.left,this.gameWindow.top),this.skier.draw(),this.rhino.draw(),this.obstacleManager.drawObstacles()},t.prototype.calculateGameWindow=function(){var t=this.skier.getPosition(),e=t.x-y/2,n=t.y-v/2;this.gameWindow=new _(e,n,e+y,n+v)},t.prototype.handleKeyDown=function(t){this.skier.handleInput(t.key)&&t.preventDefault()},t}();document.addEventListener("DOMContentLoaded",(function(){return t=void 0,e=void 0,i=function(){var t;return function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(a=0)),a;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(e){switch(e.label){case 0:return[4,(t=new Z).load()];case 1:return e.sent(),t.run(),[2]}}))},new((n=void 0)||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}));var t,e,n,i}))})()})();