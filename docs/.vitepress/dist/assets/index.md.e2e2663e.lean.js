import{e as gt,r as Ye,w as Ct,f as qs,o as Hi,c as Wi,g as An,b as kt,F as Cr,p as Gt,i as ut,h as io,v as ao,j as nt,k as cn,u as et,d as Ar,a as ro}from"./app.a5c35c5d.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qi="148",wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oo=0,na=1,lo=2,Fr=1,co=2,cs=3,sn=0,Lt=1,Xs=2,ys=3,nn=0,Xn=1,sa=2,ia=3,aa=4,po=5,Wn=100,uo=101,ho=102,ra=103,oa=104,fo=200,mo=201,go=202,_o=203,wr=204,Er=205,yo=206,xo=207,vo=208,Mo=209,Do=210,So=0,bo=1,Co=2,Ii=3,Ao=4,Fo=5,wo=6,Eo=7,Tr=0,To=1,Lo=2,Kt=0,Po=1,Ro=2,Io=3,No=4,zo=5,Lr=300,jn=301,$n=302,Ni=303,zi=304,Ys=306,Oi=1e3,Nt=1001,Ui=1002,pt=1003,la=1004,ei=1005,Et=1006,Oo=1007,us=1008,vn=1009,Uo=1010,Bo=1011,Pr=1012,Go=1013,gn=1014,_n=1015,hs=1016,ko=1017,Vo=1018,Yn=1020,Ho=1021,Wo=1022,zt=1023,qo=1024,Xo=1025,yn=1026,Zn=1027,Yo=1028,jo=1029,$o=1030,Zo=1031,Ko=1033,ti=33776,ni=33777,si=33778,ii=33779,ca=35840,pa=35841,ua=35842,ha=35843,Jo=36196,da=37492,fa=37496,ma=37808,ga=37809,_a=37810,ya=37811,xa=37812,va=37813,Ma=37814,Da=37815,Sa=37816,ba=37817,Ca=37818,Aa=37819,Fa=37820,wa=37821,Ea=36492,Mn=3e3,Ue=3001,Qo=3200,el=3201,tl=0,nl=1,Ut="srgb",ds="srgb-linear",ai=7680,sl=519,Ta=35044,La="300 es",Bi=1035;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,o=s.length;i<o;i++)s[i].call(this,e);e.target=null}}}const at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ri=Math.PI/180,Pa=180/Math.PI;function fs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[a&255]+at[a>>8&255]+at[a>>16&255]+at[a>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function ft(a,e,t){return Math.max(e,Math.min(t,a))}function il(a,e){return(a%e+e)%e}function oi(a,e,t){return(1-t)*a+t*e}function Ra(a){return(a&a-1)===0&&a!==0}function Gi(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function xs(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function vt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,o=this.y-e.y;return this.x=i*n-o*s+e.x,this.y=i*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,i,o,r,c,l){const p=this.elements;return p[0]=e,p[1]=s,p[2]=r,p[3]=t,p[4]=i,p[5]=c,p[6]=n,p[7]=o,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],p=n[4],d=n[7],u=n[2],m=n[5],g=n[8],f=s[0],h=s[3],x=s[6],C=s[1],M=s[4],D=s[7],b=s[2],E=s[5],z=s[8];return i[0]=o*f+r*C+c*b,i[3]=o*h+r*M+c*E,i[6]=o*x+r*D+c*z,i[1]=l*f+p*C+d*b,i[4]=l*h+p*M+d*E,i[7]=l*x+p*D+d*z,i[2]=u*f+m*C+g*b,i[5]=u*h+m*M+g*E,i[8]=u*x+m*D+g*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],r=e[5],c=e[6],l=e[7],p=e[8];return t*o*p-t*r*l-n*i*p+n*r*c+s*i*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],r=e[5],c=e[6],l=e[7],p=e[8],d=p*o-r*l,u=r*c-p*i,m=l*i-o*c,g=t*d+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=d*f,e[1]=(s*l-p*n)*f,e[2]=(r*n-s*o)*f,e[3]=u*f,e[4]=(p*t-s*c)*f,e[5]=(s*i-r*t)*f,e[6]=m*f,e[7]=(n*c-l*t)*f,e[8]=(o*t-n*i)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,o,r){const c=Math.cos(i),l=Math.sin(i);return this.set(n*c,n*l,-n*(c*o+l*r)+o+e,-s*l,s*c,-s*(-l*o+c*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(li.makeScale(e,t)),this}rotate(e){return this.premultiply(li.makeRotation(-e)),this}translate(e,t){return this.premultiply(li.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const li=new St;function Rr(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ws(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function xn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Vs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const ci={[Ut]:{[ds]:xn},[ds]:{[Ut]:Vs}},lt={legacyMode:!0,get workingColorSpace(){return ds},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(ci[e]&&ci[e][t]!==void 0){const n=ci[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Ir={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={r:0,g:0,b:0},Pt={h:0,s:0,l:0},vs={h:0,s:0,l:0};function pi(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Ms(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=il(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,o=2*n-i;this.r=pi(o,i,e+1/3),this.g=pi(o,i,e),this.b=pi(o,i,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,lt.toWorkingColorSpace(this,t),n(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,lt.toWorkingColorSpace(this,t),n(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const c=parseFloat(i[1])/360,l=parseFloat(i[2])/100,p=parseFloat(i[3])/100;return n(i[4]),this.setHSL(c,l,p,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],o=i.length;if(o===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,lt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,lt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ut){const n=Ir[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return lt.fromWorkingColorSpace(Ms(this,Xe),e),ft(Xe.r*255,0,255)<<16^ft(Xe.g*255,0,255)<<8^ft(Xe.b*255,0,255)<<0}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Ms(this,Xe),t);const n=Xe.r,s=Xe.g,i=Xe.b,o=Math.max(n,s,i),r=Math.min(n,s,i);let c,l;const p=(r+o)/2;if(r===o)c=0,l=0;else{const d=o-r;switch(l=p<=.5?d/(o+r):d/(2-o-r),o){case n:c=(s-i)/d+(s<i?6:0);break;case s:c=(i-n)/d+2;break;case i:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=p,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Ms(this,Xe),t),e.r=Xe.r,e.g=Xe.g,e.b=Xe.b,e}getStyle(e=Ut){return lt.fromWorkingColorSpace(Ms(this,Xe),e),e!==Ut?`color(${e} ${Xe.r} ${Xe.g} ${Xe.b})`:`rgb(${Xe.r*255|0},${Xe.g*255|0},${Xe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=n,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(vs);const n=oi(Pt.h,vs.h,t),s=oi(Pt.s,vs.s,t),i=oi(Pt.l,vs.l,t);return this.setHSL(n,s,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=Ir;let Tn;class Nr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=Ws("canvas")),Tn.width=e.width,Tn.height=e.height;const n=Tn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let o=0;o<i.length;o++)i[o]=xn(i[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zr{constructor(e=null){this.isSource=!0,this.uuid=fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?i.push(ui(s[o].image)):i.push(ui(s[o]))}else i=ui(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function ui(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Nr.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let al=0;class bt extends Fn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Nt,s=Nt,i=Et,o=us,r=zt,c=vn,l=bt.DEFAULT_ANISOTROPY,p=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=fs(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Ui:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Ui:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Lr;bt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*i,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*i,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*i,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const c=e.elements,l=c[0],p=c[4],d=c[8],u=c[1],m=c[5],g=c[9],f=c[2],h=c[6],x=c[10];if(Math.abs(p-u)<.01&&Math.abs(d-f)<.01&&Math.abs(g-h)<.01){if(Math.abs(p+u)<.1&&Math.abs(d+f)<.1&&Math.abs(g+h)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,D=(m+1)/2,b=(x+1)/2,E=(p+u)/4,z=(d+f)/4,_=(g+h)/4;return M>D&&M>b?M<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(M),s=E/n,i=z/n):D>b?D<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(D),n=E/s,i=_/s):b<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(b),n=z/i,s=_/i),this.set(n,s,i,t),this}let C=Math.sqrt((h-g)*(h-g)+(d-f)*(d-f)+(u-p)*(u-p));return Math.abs(C)<.001&&(C=1),this.x=(h-g)/C,this.y=(d-f)/C,this.z=(u-p)/C,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dn extends Fn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pt,this.minFilter=pt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,o,r){let c=n[s+0],l=n[s+1],p=n[s+2],d=n[s+3];const u=i[o+0],m=i[o+1],g=i[o+2],f=i[o+3];if(r===0){e[t+0]=c,e[t+1]=l,e[t+2]=p,e[t+3]=d;return}if(r===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(d!==f||c!==u||l!==m||p!==g){let h=1-r;const x=c*u+l*m+p*g+d*f,C=x>=0?1:-1,M=1-x*x;if(M>Number.EPSILON){const b=Math.sqrt(M),E=Math.atan2(b,x*C);h=Math.sin(h*E)/b,r=Math.sin(r*E)/b}const D=r*C;if(c=c*h+u*D,l=l*h+m*D,p=p*h+g*D,d=d*h+f*D,h===1-r){const b=1/Math.sqrt(c*c+l*l+p*p+d*d);c*=b,l*=b,p*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=p,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,i,o){const r=n[s],c=n[s+1],l=n[s+2],p=n[s+3],d=i[o],u=i[o+1],m=i[o+2],g=i[o+3];return e[t]=r*g+p*d+c*m-l*u,e[t+1]=c*g+p*u+l*d-r*m,e[t+2]=l*g+p*m+r*u-c*d,e[t+3]=p*g-r*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,i=e._z,o=e._order,r=Math.cos,c=Math.sin,l=r(n/2),p=r(s/2),d=r(i/2),u=c(n/2),m=c(s/2),g=c(i/2);switch(o){case"XYZ":this._x=u*p*d+l*m*g,this._y=l*m*d-u*p*g,this._z=l*p*g+u*m*d,this._w=l*p*d-u*m*g;break;case"YXZ":this._x=u*p*d+l*m*g,this._y=l*m*d-u*p*g,this._z=l*p*g-u*m*d,this._w=l*p*d+u*m*g;break;case"ZXY":this._x=u*p*d-l*m*g,this._y=l*m*d+u*p*g,this._z=l*p*g+u*m*d,this._w=l*p*d-u*m*g;break;case"ZYX":this._x=u*p*d-l*m*g,this._y=l*m*d+u*p*g,this._z=l*p*g-u*m*d,this._w=l*p*d+u*m*g;break;case"YZX":this._x=u*p*d+l*m*g,this._y=l*m*d+u*p*g,this._z=l*p*g-u*m*d,this._w=l*p*d-u*m*g;break;case"XZY":this._x=u*p*d-l*m*g,this._y=l*m*d-u*p*g,this._z=l*p*g+u*m*d,this._w=l*p*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],o=t[1],r=t[5],c=t[9],l=t[2],p=t[6],d=t[10],u=n+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(p-c)*m,this._y=(i-l)*m,this._z=(o-s)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(p-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(i+l)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(i-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-s)/m,this._x=(i+l)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,o=e._w,r=t._x,c=t._y,l=t._z,p=t._w;return this._x=n*p+o*r+s*l-i*c,this._y=s*p+o*c+i*r-n*l,this._z=i*p+o*l+n*c-s*r,this._w=o*p-n*r-s*c-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,o=this._w;let r=o*e._w+n*e._x+s*e._y+i*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=s,this._z=i,this;const c=1-r*r;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),p=Math.atan2(l,r),d=Math.sin((1-t)*p)/l,u=Math.sin(t*p)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=i*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(i),n*Math.cos(i),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,o=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*o,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*o,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,o=e.y,r=e.z,c=e.w,l=c*t+o*s-r*n,p=c*n+r*t-i*s,d=c*s+i*n-o*t,u=-i*t-o*n-r*s;return this.x=l*c+u*-i+p*-r-d*-o,this.y=p*c+u*-o+d*-i-l*-r,this.z=d*c+u*-r+l*-o-p*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,o=t.x,r=t.y,c=t.z;return this.x=s*c-i*r,this.y=i*o-n*c,this.z=n*r-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hi.copy(this).projectOnVector(e),this.sub(hi)}reflect(e){return this.sub(hi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hi=new P,Ia=new Sn;class ms{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,i=-1/0,o=-1/0,r=-1/0;for(let c=0,l=e.length;c<l;c+=3){const p=e[c],d=e[c+1],u=e[c+2];p<t&&(t=p),d<n&&(n=d),u<s&&(s=u),p>i&&(i=p),d>o&&(o=d),u>r&&(r=u)}return this.min.set(t,n,s),this.max.set(i,o,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,i=-1/0,o=-1/0,r=-1/0;for(let c=0,l=e.count;c<l;c++){const p=e.getX(c),d=e.getY(c),u=e.getZ(c);p<t&&(t=p),d<n&&(n=d),u<s&&(s=u),p>i&&(i=p),d>o&&(o=d),u>r&&(r=u)}return this.min.set(t,n,s),this.max.set(i,o,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const i=n.attributes.position;for(let o=0,r=i.count;o<r;o++)pn.fromBufferAttribute(i,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pn)}else n.boundingBox===null&&n.computeBoundingBox(),di.copy(n.boundingBox),di.applyMatrix4(e.matrixWorld),this.union(di);const s=e.children;for(let i=0,o=s.length;i<o;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Ds.subVectors(this.max,ns),Ln.subVectors(e.a,ns),Pn.subVectors(e.b,ns),Rn.subVectors(e.c,ns),Jt.subVectors(Pn,Ln),Qt.subVectors(Rn,Pn),un.subVectors(Ln,Rn);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-un.z,un.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,un.z,0,-un.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-un.y,un.x,0];return!fi(t,Ln,Pn,Rn,Ds)||(t=[1,0,0,0,1,0,0,0,1],!fi(t,Ln,Pn,Rn,Ds))?!1:(Ss.crossVectors(Jt,Qt),t=[Ss.x,Ss.y,Ss.z],fi(t,Ln,Pn,Rn,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,di=new ms,Ln=new P,Pn=new P,Rn=new P,Jt=new P,Qt=new P,un=new P,ns=new P,Ds=new P,Ss=new P,hn=new P;function fi(a,e,t,n,s){for(let i=0,o=a.length-3;i<=o;i+=3){hn.fromArray(a,i);const r=s.x*Math.abs(hn.x)+s.y*Math.abs(hn.y)+s.z*Math.abs(hn.z),c=e.dot(hn),l=t.dot(hn),p=n.dot(hn);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>r)return!1}return!0}const ol=new ms,ss=new P,mi=new P;class gs{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ol.setFromPoints(e).getCenter(n);let s=0;for(let i=0,o=e.length;i<o;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(mi)),this.expandByPoint(ss.copy(e.center).sub(mi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new P,gi=new P,bs=new P,en=new P,_i=new P,Cs=new P,yi=new P;class Xi{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gi.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),en.copy(this.origin).sub(gi);const i=e.distanceTo(t)*.5,o=-this.direction.dot(bs),r=en.dot(this.direction),c=-en.dot(bs),l=en.lengthSq(),p=Math.abs(1-o*o);let d,u,m,g;if(p>0)if(d=o*c-r,u=o*r-c,g=i*p,d>=0)if(u>=-g)if(u<=g){const f=1/p;d*=f,u*=f,m=d*(d+o*u+2*r)+u*(o*d+u+2*c)+l}else u=i,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*c)+l;else u=-i,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*i+r)),u=d>0?-i:Math.min(Math.max(-i,-c),i),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-i,-c),i),m=u*(u+2*c)+l):(d=Math.max(0,-(o*i+r)),u=d>0?i:Math.min(Math.max(-i,-c),i),m=-d*d+u*(u+2*c)+l);else u=o>0?-i:i,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(bs).multiplyScalar(u).add(gi),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),s=qt.dot(qt)-n*n,i=e.radius*e.radius;if(s>i)return null;const o=Math.sqrt(i-s),r=n-o,c=n+o;return r<0&&c<0?null:r<0?this.at(c,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,o,r,c;const l=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),p>=0?(i=(e.min.y-u.y)*p,o=(e.max.y-u.y)*p):(i=(e.max.y-u.y)*p,o=(e.min.y-u.y)*p),n>o||i>s||((i>n||isNaN(n))&&(n=i),(o<s||isNaN(s))&&(s=o),d>=0?(r=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(r=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||r>s)||((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,s,i){_i.subVectors(t,e),Cs.subVectors(n,e),yi.crossVectors(_i,Cs);let o=this.direction.dot(yi),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;en.subVectors(this.origin,e);const c=r*this.direction.dot(Cs.crossVectors(en,Cs));if(c<0)return null;const l=r*this.direction.dot(_i.cross(en));if(l<0||c+l>o)return null;const p=-r*en.dot(yi);return p<0?null:this.at(p/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,i,o,r,c,l,p,d,u,m,g,f,h){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=i,x[5]=o,x[9]=r,x[13]=c,x[2]=l,x[6]=p,x[10]=d,x[14]=u,x[3]=m,x[7]=g,x[11]=f,x[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/In.setFromMatrixColumn(e,0).length(),i=1/In.setFromMatrixColumn(e,1).length(),o=1/In.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(s),l=Math.sin(s),p=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){const u=o*p,m=o*d,g=r*p,f=r*d;t[0]=c*p,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=u-f*l,t[9]=-r*c,t[2]=f-u*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*p,m=c*d,g=l*p,f=l*d;t[0]=u+f*r,t[4]=g*r-m,t[8]=o*l,t[1]=o*d,t[5]=o*p,t[9]=-r,t[2]=m*r-g,t[6]=f+u*r,t[10]=o*c}else if(e.order==="ZXY"){const u=c*p,m=c*d,g=l*p,f=l*d;t[0]=u-f*r,t[4]=-o*d,t[8]=g+m*r,t[1]=m+g*r,t[5]=o*p,t[9]=f-u*r,t[2]=-o*l,t[6]=r,t[10]=o*c}else if(e.order==="ZYX"){const u=o*p,m=o*d,g=r*p,f=r*d;t[0]=c*p,t[4]=g*l-m,t[8]=u*l+f,t[1]=c*d,t[5]=f*l+u,t[9]=m*l-g,t[2]=-l,t[6]=r*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,g=r*c,f=r*l;t[0]=c*p,t[4]=f-u*d,t[8]=g*d+m,t[1]=d,t[5]=o*p,t[9]=-r*p,t[2]=-l*p,t[6]=m*d+g,t[10]=u-f*d}else if(e.order==="XZY"){const u=o*c,m=o*l,g=r*c,f=r*l;t[0]=c*p,t[4]=-d,t[8]=l*p,t[1]=u*d+f,t[5]=o*p,t[9]=m*d-g,t[2]=g*d-m,t[6]=r*p,t[10]=f*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ll,e,cl)}lookAt(e,t,n){const s=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),tn.crossVectors(n,Mt),tn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),tn.crossVectors(n,Mt)),tn.normalize(),As.crossVectors(Mt,tn),s[0]=tn.x,s[4]=As.x,s[8]=Mt.x,s[1]=tn.y,s[5]=As.y,s[9]=Mt.y,s[2]=tn.z,s[6]=As.z,s[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],p=n[1],d=n[5],u=n[9],m=n[13],g=n[2],f=n[6],h=n[10],x=n[14],C=n[3],M=n[7],D=n[11],b=n[15],E=s[0],z=s[4],_=s[8],F=s[12],R=s[1],Y=s[5],J=s[9],O=s[13],I=s[2],q=s[6],$=s[10],Q=s[14],X=s[3],ee=s[7],j=s[11],V=s[15];return i[0]=o*E+r*R+c*I+l*X,i[4]=o*z+r*Y+c*q+l*ee,i[8]=o*_+r*J+c*$+l*j,i[12]=o*F+r*O+c*Q+l*V,i[1]=p*E+d*R+u*I+m*X,i[5]=p*z+d*Y+u*q+m*ee,i[9]=p*_+d*J+u*$+m*j,i[13]=p*F+d*O+u*Q+m*V,i[2]=g*E+f*R+h*I+x*X,i[6]=g*z+f*Y+h*q+x*ee,i[10]=g*_+f*J+h*$+x*j,i[14]=g*F+f*O+h*Q+x*V,i[3]=C*E+M*R+D*I+b*X,i[7]=C*z+M*Y+D*q+b*ee,i[11]=C*_+M*J+D*$+b*j,i[15]=C*F+M*O+D*Q+b*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],o=e[1],r=e[5],c=e[9],l=e[13],p=e[2],d=e[6],u=e[10],m=e[14],g=e[3],f=e[7],h=e[11],x=e[15];return g*(+i*c*d-s*l*d-i*r*u+n*l*u+s*r*m-n*c*m)+f*(+t*c*m-t*l*u+i*o*u-s*o*m+s*l*p-i*c*p)+h*(+t*l*d-t*r*m-i*o*d+n*o*m+i*r*p-n*l*p)+x*(-s*r*p-t*c*d+t*r*u+s*o*d-n*o*u+n*c*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],o=e[4],r=e[5],c=e[6],l=e[7],p=e[8],d=e[9],u=e[10],m=e[11],g=e[12],f=e[13],h=e[14],x=e[15],C=d*h*l-f*u*l+f*c*m-r*h*m-d*c*x+r*u*x,M=g*u*l-p*h*l-g*c*m+o*h*m+p*c*x-o*u*x,D=p*f*l-g*d*l+g*r*m-o*f*m-p*r*x+o*d*x,b=g*d*c-p*f*c-g*r*u+o*f*u+p*r*h-o*d*h,E=t*C+n*M+s*D+i*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/E;return e[0]=C*z,e[1]=(f*u*i-d*h*i-f*s*m+n*h*m+d*s*x-n*u*x)*z,e[2]=(r*h*i-f*c*i+f*s*l-n*h*l-r*s*x+n*c*x)*z,e[3]=(d*c*i-r*u*i-d*s*l+n*u*l+r*s*m-n*c*m)*z,e[4]=M*z,e[5]=(p*h*i-g*u*i+g*s*m-t*h*m-p*s*x+t*u*x)*z,e[6]=(g*c*i-o*h*i-g*s*l+t*h*l+o*s*x-t*c*x)*z,e[7]=(o*u*i-p*c*i+p*s*l-t*u*l-o*s*m+t*c*m)*z,e[8]=D*z,e[9]=(g*d*i-p*f*i-g*n*m+t*f*m+p*n*x-t*d*x)*z,e[10]=(o*f*i-g*r*i+g*n*l-t*f*l-o*n*x+t*r*x)*z,e[11]=(p*r*i-o*d*i-p*n*l+t*d*l+o*n*m-t*r*m)*z,e[12]=b*z,e[13]=(p*f*s-g*d*s+g*n*u-t*f*u-p*n*h+t*d*h)*z,e[14]=(g*r*s-o*f*s-g*n*c+t*f*c+o*n*h-t*r*h)*z,e[15]=(o*d*s-p*r*s+p*n*c-t*d*c-o*n*u+t*r*u)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,o=e.x,r=e.y,c=e.z,l=i*o,p=i*r;return this.set(l*o+n,l*r-s*c,l*c+s*r,0,l*r+s*c,p*r+n,p*c-s*o,0,l*c-s*r,p*c+s*o,i*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,o){return this.set(1,n,i,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,o=t._y,r=t._z,c=t._w,l=i+i,p=o+o,d=r+r,u=i*l,m=i*p,g=i*d,f=o*p,h=o*d,x=r*d,C=c*l,M=c*p,D=c*d,b=n.x,E=n.y,z=n.z;return s[0]=(1-(f+x))*b,s[1]=(m+D)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(m-D)*E,s[5]=(1-(u+x))*E,s[6]=(h+C)*E,s[7]=0,s[8]=(g+M)*z,s[9]=(h-C)*z,s[10]=(1-(u+f))*z,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=In.set(s[0],s[1],s[2]).length();const o=In.set(s[4],s[5],s[6]).length(),r=In.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],Rt.copy(this);const l=1/i,p=1/o,d=1/r;return Rt.elements[0]*=l,Rt.elements[1]*=l,Rt.elements[2]*=l,Rt.elements[4]*=p,Rt.elements[5]*=p,Rt.elements[6]*=p,Rt.elements[8]*=d,Rt.elements[9]*=d,Rt.elements[10]*=d,t.setFromRotationMatrix(Rt),n.x=i,n.y=o,n.z=r,this}makePerspective(e,t,n,s,i,o){const r=this.elements,c=2*i/(t-e),l=2*i/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s),u=-(o+i)/(o-i),m=-2*o*i/(o-i);return r[0]=c,r[4]=0,r[8]=p,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,s,i,o){const r=this.elements,c=1/(t-e),l=1/(n-s),p=1/(o-i),d=(t+e)*c,u=(n+s)*l,m=(o+i)*p;return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*p,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const In=new P,Rt=new je,ll=new P(0,0,0),cl=new P(1,1,1),tn=new P,As=new P,Mt=new P,Na=new je,za=new Sn;class _s{constructor(e=0,t=0,n=0,s=_s.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],o=s[4],r=s[8],c=s[1],l=s[5],p=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,i)):(this._x=Math.atan2(-p,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}_s.DefaultOrder="XYZ";_s.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ur{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pl=0;const Oa=new P,Nn=new Sn,Xt=new je,Fs=new P,is=new P,ul=new P,hl=new Sn,Ua=new P(1,0,0),Ba=new P(0,1,0),Ga=new P(0,0,1),dl={type:"added"},ka={type:"removed"};class ht extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DefaultUp.clone();const e=new P,t=new _s,n=new Sn,s=new P(1,1,1);function i(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new St}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DefaultMatrixWorldAutoUpdate,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(is,Fs,this.up):Xt.lookAt(Fs,is,this.up),this.quaternion.setFromRotationMatrix(Xt),s&&(Xt.extractRotation(s.matrixWorld),Nn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ka)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ka)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,i=this.children.length;s<i;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,ul),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,hl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let i=0,o=s.length;i<o;i++){const r=s[i];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function i(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){const d=c[l];i(e.shapes,d)}else i(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(i(e.materials,this.material[c]));s.material=r}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];s.animations.push(i(e.animations,c))}}if(t){const r=o(e.geometries),c=o(e.materials),l=o(e.textures),p=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const c=[];for(const l in r){const p=r[l];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ht.DefaultUp=new P(0,1,0);ht.DefaultMatrixAutoUpdate=!0;ht.DefaultMatrixWorldAutoUpdate=!0;const It=new P,Yt=new P,xi=new P,jt=new P,zn=new P,On=new P,Va=new P,vi=new P,Mi=new P,Di=new P;class $t{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),It.subVectors(e,t),s.cross(It);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){It.subVectors(s,t),Yt.subVectors(n,t),xi.subVectors(e,t);const o=It.dot(It),r=It.dot(Yt),c=It.dot(xi),l=Yt.dot(Yt),p=Yt.dot(xi),d=o*l-r*r;if(d===0)return i.set(-2,-1,-1);const u=1/d,m=(l*c-r*p)*u,g=(o*p-r*c)*u;return i.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,s,i,o,r,c){return this.getBarycoord(e,t,n,s,jt),c.set(0,0),c.addScaledVector(i,jt.x),c.addScaledVector(o,jt.y),c.addScaledVector(r,jt.z),c}static isFrontFacing(e,t,n,s){return It.subVectors(n,t),Yt.subVectors(e,t),It.cross(Yt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),It.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,i){return $t.getUV(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let o,r;zn.subVectors(s,n),On.subVectors(i,n),vi.subVectors(e,n);const c=zn.dot(vi),l=On.dot(vi);if(c<=0&&l<=0)return t.copy(n);Mi.subVectors(e,s);const p=zn.dot(Mi),d=On.dot(Mi);if(p>=0&&d<=p)return t.copy(s);const u=c*d-p*l;if(u<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);Di.subVectors(e,i);const m=zn.dot(Di),g=On.dot(Di);if(g>=0&&m<=g)return t.copy(i);const f=m*l-c*g;if(f<=0&&l>=0&&g<=0)return r=l/(l-g),t.copy(n).addScaledVector(On,r);const h=p*g-m*d;if(h<=0&&d-p>=0&&m-g>=0)return Va.subVectors(i,s),r=(d-p)/(d-p+(m-g)),t.copy(s).addScaledVector(Va,r);const x=1/(h+f+u);return o=f*x,r=u*x,t.copy(n).addScaledVector(zn,o).addScaledVector(On,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fl=0;class Jn extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Xn,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wr,this.blendDst=Er,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const o=[];for(const r in i){const c=i[r];delete c.metadata,o.push(c)}return o}if(t){const i=s(e.textures),o=s(e.images);i.length>0&&(n.textures=i),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class js extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const He=new P,ws=new Ce;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Br extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gr extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ml=0;const wt=new je,Si=new ht,Un=new P,Dt=new ms,as=new ms,tt=new P;class _t extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ml++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rr(e)?Gr:Br)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new St().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wt.makeRotationFromQuaternion(e),this.applyMatrix4(wt),this}rotateX(e){return wt.makeRotationX(e),this.applyMatrix4(wt),this}rotateY(e){return wt.makeRotationY(e),this.applyMatrix4(wt),this}rotateZ(e){return wt.makeRotationZ(e),this.applyMatrix4(wt),this}translate(e,t,n){return wt.makeTranslation(e,t,n),this.applyMatrix4(wt),this}scale(e,t,n){return wt.makeScale(e,t,n),this.applyMatrix4(wt),this}lookAt(e){return Si.lookAt(e),Si.updateMatrix(),this.applyMatrix4(Si.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];Dt.setFromBufferAttribute(i),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const r=t[i];as.setFromBufferAttribute(r),this.morphTargetsRelative?(tt.addVectors(Dt.min,as.min),Dt.expandByPoint(tt),tt.addVectors(Dt.max,as.max),Dt.expandByPoint(tt)):(Dt.expandByPoint(as.min),Dt.expandByPoint(as.max))}Dt.getCenter(n);let s=0;for(let i=0,o=e.count;i<o;i++)tt.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(tt));if(t)for(let i=0,o=t.length;i<o;i++){const r=t[i],c=this.morphTargetsRelative;for(let l=0,p=r.count;l<p;l++)tt.fromBufferAttribute(r,l),c&&(Un.fromBufferAttribute(e,l),tt.add(Un)),s=Math.max(s,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,i=t.normal.array,o=t.uv.array,r=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],p=[];for(let R=0;R<r;R++)l[R]=new P,p[R]=new P;const d=new P,u=new P,m=new P,g=new Ce,f=new Ce,h=new Ce,x=new P,C=new P;function M(R,Y,J){d.fromArray(s,R*3),u.fromArray(s,Y*3),m.fromArray(s,J*3),g.fromArray(o,R*2),f.fromArray(o,Y*2),h.fromArray(o,J*2),u.sub(d),m.sub(d),f.sub(g),h.sub(g);const O=1/(f.x*h.y-h.x*f.y);isFinite(O)&&(x.copy(u).multiplyScalar(h.y).addScaledVector(m,-f.y).multiplyScalar(O),C.copy(m).multiplyScalar(f.x).addScaledVector(u,-h.x).multiplyScalar(O),l[R].add(x),l[Y].add(x),l[J].add(x),p[R].add(C),p[Y].add(C),p[J].add(C))}let D=this.groups;D.length===0&&(D=[{start:0,count:n.length}]);for(let R=0,Y=D.length;R<Y;++R){const J=D[R],O=J.start,I=J.count;for(let q=O,$=O+I;q<$;q+=3)M(n[q+0],n[q+1],n[q+2])}const b=new P,E=new P,z=new P,_=new P;function F(R){z.fromArray(i,R*3),_.copy(z);const Y=l[R];b.copy(Y),b.sub(z.multiplyScalar(z.dot(Y))).normalize(),E.crossVectors(_,Y);const O=E.dot(p[R])<0?-1:1;c[R*4]=b.x,c[R*4+1]=b.y,c[R*4+2]=b.z,c[R*4+3]=O}for(let R=0,Y=D.length;R<Y;++R){const J=D[R],O=J.start,I=J.count;for(let q=O,$=O+I;q<$;q+=3)F(n[q+0]),F(n[q+1]),F(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new P,i=new P,o=new P,r=new P,c=new P,l=new P,p=new P,d=new P;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),f=e.getX(u+1),h=e.getX(u+2);s.fromBufferAttribute(t,g),i.fromBufferAttribute(t,f),o.fromBufferAttribute(t,h),p.subVectors(o,i),d.subVectors(s,i),p.cross(d),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,h),r.add(p),c.add(p),l.add(p),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),p.subVectors(o,i),d.subVectors(s,i),p.cross(d),n.setXYZ(u+0,p.x,p.y,p.z),n.setXYZ(u+1,p.x,p.y,p.z),n.setXYZ(u+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(r,c){const l=r.array,p=r.itemSize,d=r.normalized,u=new l.constructor(c.length*p);let m=0,g=0;for(let f=0,h=c.length;f<h;f++){r.isInterleavedBufferAttribute?m=c[f]*r.data.stride+r.offset:m=c[f]*p;for(let x=0;x<p;x++)u[g++]=l[m++]}return new Ot(u,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,s=this.attributes;for(const r in s){const c=s[r],l=e(c,n);t.setAttribute(r,l)}const i=this.morphAttributes;for(const r in i){const c=[],l=i[r];for(let p=0,d=l.length;p<d;p++){const u=l[p],m=e(u,n);c.push(m)}t.morphAttributes[r]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let i=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],p=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];p.push(m.toJSON(e.data))}p.length>0&&(s[c]=p,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const p=s[l];this.setAttribute(l,p.clone(t))}const i=e.morphAttributes;for(const l in i){const p=[],d=i[l];for(let u=0,m=d.length;u<m;u++)p.push(d[u].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,p=o.length;l<p;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new je,Bn=new Xi,bi=new gs,rs=new P,os=new P,ls=new P,Ci=new P,Es=new P,Ts=new Ce,Ls=new Ce,Ps=new Ce,Ai=new P,Rs=new P;class Zt extends ht{constructor(e=new _t,t=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=s.length;i<o;i++){const r=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const r=this.morphTargetInfluences;if(i&&r){Es.set(0,0,0);for(let c=0,l=i.length;c<l;c++){const p=r[c],d=i[c];p!==0&&(Ci.fromBufferAttribute(d,e),o?Es.addScaledVector(Ci,p):Es.addScaledVector(Ci.sub(t),p))}t.add(Es)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere),bi.applyMatrix4(i),e.ray.intersectsSphere(bi)===!1)||(Ha.copy(i).invert(),Bn.copy(e.ray).applyMatrix4(Ha),n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,c=n.attributes.position,l=n.attributes.uv,p=n.attributes.uv2,d=n.groups,u=n.drawRange;if(r!==null)if(Array.isArray(s))for(let m=0,g=d.length;m<g;m++){const f=d[m],h=s[f.materialIndex],x=Math.max(f.start,u.start),C=Math.min(r.count,Math.min(f.start+f.count,u.start+u.count));for(let M=x,D=C;M<D;M+=3){const b=r.getX(M),E=r.getX(M+1),z=r.getX(M+2);o=Is(this,h,e,Bn,l,p,b,E,z),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(r.count,u.start+u.count);for(let f=m,h=g;f<h;f+=3){const x=r.getX(f),C=r.getX(f+1),M=r.getX(f+2);o=Is(this,s,e,Bn,l,p,x,C,M),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,g=d.length;m<g;m++){const f=d[m],h=s[f.materialIndex],x=Math.max(f.start,u.start),C=Math.min(c.count,Math.min(f.start+f.count,u.start+u.count));for(let M=x,D=C;M<D;M+=3){const b=M,E=M+1,z=M+2;o=Is(this,h,e,Bn,l,p,b,E,z),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let f=m,h=g;f<h;f+=3){const x=f,C=f+1,M=f+2;o=Is(this,s,e,Bn,l,p,x,C,M),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function gl(a,e,t,n,s,i,o,r){let c;if(e.side===Lt?c=n.intersectTriangle(o,i,s,!0,r):c=n.intersectTriangle(s,i,o,e.side===sn,r),c===null)return null;Rs.copy(r),Rs.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:a}}function Is(a,e,t,n,s,i,o,r,c){a.getVertexPosition(o,rs),a.getVertexPosition(r,os),a.getVertexPosition(c,ls);const l=gl(a,e,t,n,rs,os,ls,Ai);if(l){s&&(Ts.fromBufferAttribute(s,o),Ls.fromBufferAttribute(s,r),Ps.fromBufferAttribute(s,c),l.uv=$t.getUV(Ai,rs,os,ls,Ts,Ls,Ps,new Ce)),i&&(Ts.fromBufferAttribute(i,o),Ls.fromBufferAttribute(i,r),Ps.fromBufferAttribute(i,c),l.uv2=$t.getUV(Ai,rs,os,ls,Ts,Ls,Ps,new Ce));const p={a:o,b:r,c,normal:new P,materialIndex:0};$t.getNormal(rs,os,ls,p.normal),l.face=p}return l}class Qn extends _t{constructor(e=1,t=1,n=1,s=1,i=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:o};const r=this;s=Math.floor(s),i=Math.floor(i),o=Math.floor(o);const c=[],l=[],p=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,i,0),g("z","y","x",1,-1,n,t,-e,o,i,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,i,4),g("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(d,2));function g(f,h,x,C,M,D,b,E,z,_,F){const R=D/z,Y=b/_,J=D/2,O=b/2,I=E/2,q=z+1,$=_+1;let Q=0,X=0;const ee=new P;for(let j=0;j<$;j++){const V=j*Y-O;for(let U=0;U<q;U++){const ie=U*R-J;ee[f]=ie*C,ee[h]=V*M,ee[x]=I,l.push(ee.x,ee.y,ee.z),ee[f]=0,ee[h]=0,ee[x]=E>0?1:-1,p.push(ee.x,ee.y,ee.z),d.push(U/z),d.push(1-j/_),Q+=1}}for(let j=0;j<_;j++)for(let V=0;V<z;V++){const U=u+V+q*j,ie=u+V+q*(j+1),te=u+(V+1)+q*(j+1),ae=u+(V+1)+q*j;c.push(U,ie,ae),c.push(ie,te,ae),X+=6}r.addGroup(m,X,F),m+=X,u+=Q}}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kn(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const s=a[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ct(a){const e={};for(let t=0;t<a.length;t++){const n=Kn(a[t]);for(const s in n)e[s]=n[s]}return e}function _l(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function kr(a){return a.getRenderTarget()===null&&a.outputEncoding===Ue?Ut:ds}const yl={clone:Kn,merge:ct};var xl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xl,this.fragmentShader=vl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kn(e.uniforms),this.uniformsGroups=_l(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vr extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ri*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,i,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ri*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;i+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const r=this.filmOffset;r!==0&&(i+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,kn=1;class Ml extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Tt(Gn,kn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const i=new Tt(Gn,kn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const o=new Tt(Gn,kn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Tt(Gn,kn,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const c=new Tt(Gn,kn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Tt(Gn,kn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,i,o,r,c,l]=this.children,p=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Kt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(p),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Hr extends bt{constructor(e,t,n,s,i,o,r,c,l,p){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,n,s,i,o,r,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dl extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qn(5,5,5),i=new bn({name:"CubemapFromEquirect",uniforms:Kn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:nn});i.uniforms.tEquirect.value=t;const o=new Zt(s,i),r=t.minFilter;return t.minFilter===us&&(t.minFilter=Et),new Ml(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const i=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(i)}}const Fi=new P,Sl=new P,bl=new St;class dn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fi.subVectors(n,t).cross(Sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Fi),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bl.getNormalMatrix(e),s=this.coplanarPoint(Fi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new gs,Ns=new P;class Wr{constructor(e=new dn,t=new dn,n=new dn,s=new dn,i=new dn,o=new dn){this.planes=[e,t,n,s,i,o]}set(e,t,n,s,i,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(s),r[4].copy(i),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],i=n[1],o=n[2],r=n[3],c=n[4],l=n[5],p=n[6],d=n[7],u=n[8],m=n[9],g=n[10],f=n[11],h=n[12],x=n[13],C=n[14],M=n[15];return t[0].setComponents(r-s,d-c,f-u,M-h).normalize(),t[1].setComponents(r+s,d+c,f+u,M+h).normalize(),t[2].setComponents(r+i,d+l,f+m,M+x).normalize(),t[3].setComponents(r-i,d-l,f-m,M-x).normalize(),t[4].setComponents(r-o,d-p,f-g,M-C).normalize(),t[5].setComponents(r+o,d+p,f+g,M+C).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ns.x=s.normal.x>0?e.max.x:e.min.x,Ns.y=s.normal.y>0?e.max.y:e.min.y,Ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qr(){let a=null,e=!1,t=null,n=null;function s(i,o){t(i,o),n=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Cl(a,e){const t=e.isWebGL2,n=new WeakMap;function s(l,p){const d=l.array,u=l.usage,m=a.createBuffer();a.bindBuffer(p,m),a.bufferData(p,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function i(l,p,d){const u=p.array,m=p.updateRange;a.bindBuffer(d,l),m.count===-1?a.bufferSubData(d,0,u):(t?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),p.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const p=n.get(l);p&&(a.deleteBuffer(p.buffer),n.delete(l))}function c(l,p){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,s(l,p)):d.version<l.version&&(i(d.buffer,l,p),d.version=l.version)}return{get:o,remove:r,update:c}}class Yi extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,o=t/2,r=Math.floor(n),c=Math.floor(s),l=r+1,p=c+1,d=e/r,u=t/c,m=[],g=[],f=[],h=[];for(let x=0;x<p;x++){const C=x*u-o;for(let M=0;M<l;M++){const D=M*d-i;g.push(D,-C,0),f.push(0,0,1),h.push(M/r),h.push(1-x/c)}}for(let x=0;x<c;x++)for(let C=0;C<r;C++){const M=C+l*x,D=C+l*(x+1),b=C+1+l*(x+1),E=C+1+l*x;m.push(M,D,E),m.push(D,b,E)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(h,2))}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Al=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Fl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,El=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ll=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pl="vec3 transformed = vec3( position );",Rl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Il=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Nl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ql=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$l=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ql=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ec=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ic=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ac=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_c=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ac=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ec=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ic=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Oc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$c=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Kc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ap=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,gp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_p=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$p=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Al,alphamap_pars_fragment:Fl,alphatest_fragment:wl,alphatest_pars_fragment:El,aomap_fragment:Tl,aomap_pars_fragment:Ll,begin_vertex:Pl,beginnormal_vertex:Rl,bsdfs:Il,iridescence_fragment:Nl,bumpmap_pars_fragment:zl,clipping_planes_fragment:Ol,clipping_planes_pars_fragment:Ul,clipping_planes_pars_vertex:Bl,clipping_planes_vertex:Gl,color_fragment:kl,color_pars_fragment:Vl,color_pars_vertex:Hl,color_vertex:Wl,common:ql,cube_uv_reflection_fragment:Xl,defaultnormal_vertex:Yl,displacementmap_pars_vertex:jl,displacementmap_vertex:$l,emissivemap_fragment:Zl,emissivemap_pars_fragment:Kl,encodings_fragment:Jl,encodings_pars_fragment:Ql,envmap_fragment:ec,envmap_common_pars_fragment:tc,envmap_pars_fragment:nc,envmap_pars_vertex:sc,envmap_physical_pars_fragment:mc,envmap_vertex:ic,fog_vertex:ac,fog_pars_vertex:rc,fog_fragment:oc,fog_pars_fragment:lc,gradientmap_pars_fragment:cc,lightmap_fragment:pc,lightmap_pars_fragment:uc,lights_lambert_fragment:hc,lights_lambert_pars_fragment:dc,lights_pars_begin:fc,lights_toon_fragment:gc,lights_toon_pars_fragment:_c,lights_phong_fragment:yc,lights_phong_pars_fragment:xc,lights_physical_fragment:vc,lights_physical_pars_fragment:Mc,lights_fragment_begin:Dc,lights_fragment_maps:Sc,lights_fragment_end:bc,logdepthbuf_fragment:Cc,logdepthbuf_pars_fragment:Ac,logdepthbuf_pars_vertex:Fc,logdepthbuf_vertex:wc,map_fragment:Ec,map_pars_fragment:Tc,map_particle_fragment:Lc,map_particle_pars_fragment:Pc,metalnessmap_fragment:Rc,metalnessmap_pars_fragment:Ic,morphcolor_vertex:Nc,morphnormal_vertex:zc,morphtarget_pars_vertex:Oc,morphtarget_vertex:Uc,normal_fragment_begin:Bc,normal_fragment_maps:Gc,normal_pars_fragment:kc,normal_pars_vertex:Vc,normal_vertex:Hc,normalmap_pars_fragment:Wc,clearcoat_normal_fragment_begin:qc,clearcoat_normal_fragment_maps:Xc,clearcoat_pars_fragment:Yc,iridescence_pars_fragment:jc,output_fragment:$c,packing:Zc,premultiplied_alpha_fragment:Kc,project_vertex:Jc,dithering_fragment:Qc,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:ip,shadowmap_vertex:ap,shadowmask_pars_fragment:rp,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:pp,specularmap_fragment:up,specularmap_pars_fragment:hp,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:_p,uv_pars_vertex:yp,uv_vertex:xp,uv2_pars_fragment:vp,uv2_pars_vertex:Mp,uv2_vertex:Dp,worldpos_vertex:Sp,background_vert:bp,background_frag:Cp,backgroundCube_vert:Ap,backgroundCube_frag:Fp,cube_vert:wp,cube_frag:Ep,depth_vert:Tp,depth_frag:Lp,distanceRGBA_vert:Pp,distanceRGBA_frag:Rp,equirect_vert:Ip,equirect_frag:Np,linedashed_vert:zp,linedashed_frag:Op,meshbasic_vert:Up,meshbasic_frag:Bp,meshlambert_vert:Gp,meshlambert_frag:kp,meshmatcap_vert:Vp,meshmatcap_frag:Hp,meshnormal_vert:Wp,meshnormal_frag:qp,meshphong_vert:Xp,meshphong_frag:Yp,meshphysical_vert:jp,meshphysical_frag:$p,meshtoon_vert:Zp,meshtoon_frag:Kp,points_vert:Jp,points_frag:Qp,shadow_vert:eu,shadow_frag:tu,sprite_vert:nu,sprite_frag:su},se={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}}},Bt={basic:{uniforms:ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ze(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:ct([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:ct([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:ct([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ze(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:ct([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:ct([se.points,se.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:ct([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:ct([se.common,se.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:ct([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:ct([se.sprite,se.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:ct([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:ct([se.lights,se.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Bt.physical={uniforms:ct([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const zs={r:0,b:0,g:0};function iu(a,e,t,n,s,i,o){const r=new ze(0);let c=i===!0?0:1,l,p,d=null,u=0,m=null;function g(h,x){let C=!1,M=x.isScene===!0?x.background:null;M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M));const D=a.xr,b=D.getSession&&D.getSession();b&&b.environmentBlendMode==="additive"&&(M=null),M===null?f(r,c):M&&M.isColor&&(f(M,1),C=!0),(a.autoClear||C)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Ys)?(p===void 0&&(p=new Zt(new Qn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Kn(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(E,z,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=M,p.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=M.encoding!==Ue,(d!==M||u!==M.version||m!==a.toneMapping)&&(p.material.needsUpdate=!0,d=M,u=M.version,m=a.toneMapping),p.layers.enableAll(),h.unshift(p,p.geometry,p.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Zt(new Yi(2,2),new bn({name:"BackgroundMaterial",uniforms:Kn(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=M.encoding!==Ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,m=a.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function f(h,x){h.getRGB(zs,kr(a)),n.buffers.color.setClear(zs.r,zs.g,zs.b,x,o)}return{getClearColor:function(){return r},setClearColor:function(h,x=1){r.set(h),c=x,f(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,f(r,c)},render:g}}function au(a,e,t,n){const s=a.getParameter(34921),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||i!==null,r={},c=h(null);let l=c,p=!1;function d(I,q,$,Q,X){let ee=!1;if(o){const j=f(Q,$,q);l!==j&&(l=j,m(l.object)),ee=x(I,Q,$,X),ee&&C(I,Q,$,X)}else{const j=q.wireframe===!0;(l.geometry!==Q.id||l.program!==$.id||l.wireframe!==j)&&(l.geometry=Q.id,l.program=$.id,l.wireframe=j,ee=!0)}X!==null&&t.update(X,34963),(ee||p)&&(p=!1,_(I,q,$,Q),X!==null&&a.bindBuffer(34963,t.get(X).buffer))}function u(){return n.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function m(I){return n.isWebGL2?a.bindVertexArray(I):i.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?a.deleteVertexArray(I):i.deleteVertexArrayOES(I)}function f(I,q,$){const Q=$.wireframe===!0;let X=r[I.id];X===void 0&&(X={},r[I.id]=X);let ee=X[q.id];ee===void 0&&(ee={},X[q.id]=ee);let j=ee[Q];return j===void 0&&(j=h(u()),ee[Q]=j),j}function h(I){const q=[],$=[],Q=[];for(let X=0;X<s;X++)q[X]=0,$[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:$,attributeDivisors:Q,object:I,attributes:{},index:null}}function x(I,q,$,Q){const X=l.attributes,ee=q.attributes;let j=0;const V=$.getAttributes();for(const U in V)if(V[U].location>=0){const te=X[U];let ae=ee[U];if(ae===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;j++}return l.attributesNum!==j||l.index!==Q}function C(I,q,$,Q){const X={},ee=q.attributes;let j=0;const V=$.getAttributes();for(const U in V)if(V[U].location>=0){let te=ee[U];te===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),X[U]=ae,j++}l.attributes=X,l.attributesNum=j,l.index=Q}function M(){const I=l.newAttributes;for(let q=0,$=I.length;q<$;q++)I[q]=0}function D(I){b(I,0)}function b(I,q){const $=l.newAttributes,Q=l.enabledAttributes,X=l.attributeDivisors;$[I]=1,Q[I]===0&&(a.enableVertexAttribArray(I),Q[I]=1),X[I]!==q&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),X[I]=q)}function E(){const I=l.newAttributes,q=l.enabledAttributes;for(let $=0,Q=q.length;$<Q;$++)q[$]!==I[$]&&(a.disableVertexAttribArray($),q[$]=0)}function z(I,q,$,Q,X,ee){n.isWebGL2===!0&&($===5124||$===5125)?a.vertexAttribIPointer(I,q,$,X,ee):a.vertexAttribPointer(I,q,$,Q,X,ee)}function _(I,q,$,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const X=Q.attributes,ee=$.getAttributes(),j=q.defaultAttributeValues;for(const V in ee){const U=ee[V];if(U.location>=0){let ie=X[V];if(ie===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){const te=ie.normalized,ae=ie.itemSize,H=t.get(ie);if(H===void 0)continue;const Ae=H.buffer,he=H.type,_e=H.bytesPerElement;if(ie.isInterleavedBufferAttribute){const ue=ie.data,Re=ue.stride,Me=ie.offset;if(ue.isInstancedInterleavedBuffer){for(let ye=0;ye<U.locationSize;ye++)b(U.location+ye,ue.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<U.locationSize;ye++)D(U.location+ye);a.bindBuffer(34962,Ae);for(let ye=0;ye<U.locationSize;ye++)z(U.location+ye,ae/U.locationSize,he,te,Re*_e,(Me+ae/U.locationSize*ye)*_e)}else{if(ie.isInstancedBufferAttribute){for(let ue=0;ue<U.locationSize;ue++)b(U.location+ue,ie.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<U.locationSize;ue++)D(U.location+ue);a.bindBuffer(34962,Ae);for(let ue=0;ue<U.locationSize;ue++)z(U.location+ue,ae/U.locationSize,he,te,ae*_e,ae/U.locationSize*ue*_e)}}else if(j!==void 0){const te=j[V];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(U.location,te);break;case 3:a.vertexAttrib3fv(U.location,te);break;case 4:a.vertexAttrib4fv(U.location,te);break;default:a.vertexAttrib1fv(U.location,te)}}}}E()}function F(){J();for(const I in r){const q=r[I];for(const $ in q){const Q=q[$];for(const X in Q)g(Q[X].object),delete Q[X];delete q[$]}delete r[I]}}function R(I){if(r[I.id]===void 0)return;const q=r[I.id];for(const $ in q){const Q=q[$];for(const X in Q)g(Q[X].object),delete Q[X];delete q[$]}delete r[I.id]}function Y(I){for(const q in r){const $=r[q];if($[I.id]===void 0)continue;const Q=$[I.id];for(const X in Q)g(Q[X].object),delete Q[X];delete $[I.id]}}function J(){O(),p=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:J,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:M,enableAttribute:D,disableUnusedAttributes:E}}function ru(a,e,t,n){const s=n.isWebGL2;let i;function o(l){i=l}function r(l,p){a.drawArrays(i,l,p),t.update(p,i,1)}function c(l,p,d){if(d===0)return;let u,m;if(s)u=a,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](i,l,p,d),t.update(p,i,d)}this.setMode=o,this.render=r,this.renderInstances=c}function ou(a,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(z){if(z==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let r=t.precision!==void 0?t.precision:"highp";const c=i(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),h=a.getParameter(36347),x=a.getParameter(36348),C=a.getParameter(36349),M=u>0,D=o||e.has("OES_texture_float"),b=M&&D,E=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:i,precision:r,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:D,floatVertexTextures:b,maxSamples:E}}function lu(a){const e=this;let t=null,n=0,s=!1,i=!1;const o=new dn,r=new St,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){const g=d.length!==0||u||n!==0||s;return s=u,t=p(d,m,0),n=d.length,g},this.beginShadows=function(){i=!0,p(null)},this.endShadows=function(){i=!1,l()},this.setState=function(d,u,m){const g=d.clippingPlanes,f=d.clipIntersection,h=d.clipShadows,x=a.get(d);if(!s||g===null||g.length===0||i&&!h)i?p(null):l();else{const C=i?0:n,M=C*4;let D=x.clippingState||null;c.value=D,D=p(g,u,M,m);for(let b=0;b!==M;++b)D[b]=t[b];x.clippingState=D,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(d,u,m,g){const f=d!==null?d.length:0;let h=null;if(f!==0){if(h=c.value,g!==!0||h===null){const x=m+f*4,C=u.matrixWorldInverse;r.getNormalMatrix(C),(h===null||h.length<x)&&(h=new Float32Array(x));for(let M=0,D=m;M!==f;++M,D+=4)o.copy(d[M]).applyMatrix4(C,r),o.normal.toArray(h,D),h[D+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,h}}function cu(a){let e=new WeakMap;function t(o,r){return r===Ni?o.mapping=jn:r===zi&&(o.mapping=$n),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Ni||r===zi)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Dl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const c=e.get(r);c!==void 0&&(e.delete(r),c.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class Xr extends Vr{constructor(e=-1,t=1,n=1,s=-1,i=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,o=n+e,r=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,o=i+l*this.view.width,r-=p*this.view.offsetY,c=r-p*this.view.height}this.projectionMatrix.makeOrthographic(i,o,r,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,Wa=[.125,.215,.35,.446,.526,.582],mn=20,wi=new Xr,qa=new ze;let Ei=null;const fn=(1+Math.sqrt(5))/2,Hn=1/fn,Xa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,fn,Hn),new P(0,fn,-Hn),new P(Hn,0,fn),new P(-Hn,0,fn),new P(fn,Hn,0),new P(-fn,Hn,0)];class Ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ei=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ei),e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ei=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:hs,format:zt,encoding:Mn,depthBuffer:!1},s=ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pu(i)),this._blurMaterial=uu(i,e,t)}return s}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,wi)}_sceneToCubeUV(e,t,n,s){const r=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,u=p.toneMapping;p.getClearColor(qa),p.toneMapping=Kt,p.autoClear=!1;const m=new js({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new Zt(new Qn,m);let f=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,f=!0):(m.color.copy(qa),f=!0);for(let x=0;x<6;x++){const C=x%3;C===0?(r.up.set(0,c[x],0),r.lookAt(l[x],0,0)):C===1?(r.up.set(0,0,c[x]),r.lookAt(0,l[x],0)):(r.up.set(0,c[x],0),r.lookAt(0,0,l[x]));const M=this._cubeSize;Os(s,C*M,x>2?M:0,M,M),p.setRenderTarget(s),f&&p.render(g,r),p.render(e,r)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=u,p.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===jn||e.mapping===$n;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const i=s?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],i),r=i.uniforms;r.envMap.value=e;const c=this._cubeSize;Os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const i=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xa[(s-1)%Xa.length];this._blur(e,s-1,s,i,o)}t.autoClear=n}_blur(e,t,n,s,i){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",i),this._halfBlur(o,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new Zt(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*m):2*Math.PI/(2*mn-1),f=i/g,h=isFinite(i)?1+Math.floor(p*f):mn;h>mn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${mn}`);const x=[];let C=0;for(let z=0;z<mn;++z){const _=z/f,F=Math.exp(-_*_/2);x.push(F),z===0?C+=F:z<h&&(C+=2*F)}for(let z=0;z<x.length;z++)x[z]=x[z]/C;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=x,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const D=this._sizeLods[s],b=3*D*(s>M-qn?s-M+qn:0),E=4*(this._cubeSize-D);Os(t,b,E,3*D,2*D),c.setRenderTarget(t),c.render(d,wi)}}function pu(a){const e=[],t=[],n=[];let s=a;const i=a-qn+1+Wa.length;for(let o=0;o<i;o++){const r=Math.pow(2,s);t.push(r);let c=1/r;o>a-qn?c=Wa[o-a+qn-1]:o===0&&(c=0),n.push(c);const l=1/(r-2),p=-l,d=1+l,u=[p,p,d,p,d,d,p,p,d,d,p,d],m=6,g=6,f=3,h=2,x=1,C=new Float32Array(f*g*m),M=new Float32Array(h*g*m),D=new Float32Array(x*g*m);for(let E=0;E<m;E++){const z=E%3*2/3-1,_=E>2?0:-1,F=[z,_,0,z+2/3,_,0,z+2/3,_+1,0,z,_,0,z+2/3,_+1,0,z,_+1,0];C.set(F,f*g*E),M.set(u,h*g*E);const R=[E,E,E,E,E,E];D.set(R,x*g*E)}const b=new _t;b.setAttribute("position",new Ot(C,f)),b.setAttribute("uv",new Ot(M,h)),b.setAttribute("faceIndex",new Ot(D,x)),e.push(b),s>qn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ja(a,e,t){const n=new Dn(a,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(a,e,t,n,s){a.viewport.set(e,t,n,s),a.scissor.set(e,t,n,s)}function uu(a,e,t){const n=new Float32Array(mn),s=new P(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function $a(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Za(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function ji(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hu(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const c=r.mapping,l=c===Ni||c===zi,p=c===jn||c===$n;if(l||p)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new Ya(a)),d=l?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||p&&d&&s(d)){t===null&&(t=new Ya(a));const u=l?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,u),r.addEventListener("dispose",i),u.texture}else return null}}}return r}function s(r){let c=0;const l=6;for(let p=0;p<l;p++)r[p]!==void 0&&c++;return c===l}function i(r){const c=r.target;c.removeEventListener("dispose",i);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function du(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fu(a,e,t,n){const s={},i=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const m=i.get(u);m&&(e.remove(m),i.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let h=0,x=f.length;h<x;h++)e.update(f[h],34962)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const C=m.array;f=m.version;for(let M=0,D=C.length;M<D;M+=3){const b=C[M+0],E=C[M+1],z=C[M+2];u.push(b,E,E,z,z,b)}}else{const C=g.array;f=g.version;for(let M=0,D=C.length/3-1;M<D;M+=3){const b=M+0,E=M+1,z=M+2;u.push(b,E,E,z,z,b)}}const h=new(Rr(u)?Gr:Br)(u,1);h.version=f;const x=i.get(d);x&&e.remove(x),i.set(d,h)}function p(d){const u=i.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return i.get(d)}return{get:r,update:c,getWireframeAttribute:p}}function mu(a,e,t,n){const s=n.isWebGL2;let i;function o(u){i=u}let r,c;function l(u){r=u.type,c=u.bytesPerElement}function p(u,m){a.drawElements(i,m,r,u*c),t.update(m,i,1)}function d(u,m,g){if(g===0)return;let f,h;if(s)f=a,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](i,m,r,u*c,g),t.update(m,i,g)}this.setMode=o,this.setIndex=l,this.render=p,this.renderInstances=d}function gu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(i/3);break;case 1:t.lines+=r*(i/2);break;case 3:t.lines+=r*(i-1);break;case 2:t.lines+=r*i;break;case 0:t.points+=r*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _u(a,e){return a[0]-e[0]}function yu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function xu(a,e,t){const n={},s=new Float32Array(8),i=new WeakMap,o=new st,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,p,d,u){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,f=g!==void 0?g.length:0;let h=i.get(p);if(h===void 0||h.count!==f){let q=function(){O.dispose(),i.delete(p),p.removeEventListener("dispose",q)};h!==void 0&&h.texture.dispose();const M=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,E=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],_=p.morphAttributes.color||[];let F=0;M===!0&&(F=1),D===!0&&(F=2),b===!0&&(F=3);let R=p.attributes.position.count*F,Y=1;R>e.maxTextureSize&&(Y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const J=new Float32Array(R*Y*4*f),O=new Or(J,R,Y,f);O.type=_n,O.needsUpdate=!0;const I=F*4;for(let $=0;$<f;$++){const Q=E[$],X=z[$],ee=_[$],j=R*Y*4*$;for(let V=0;V<Q.count;V++){const U=V*I;M===!0&&(o.fromBufferAttribute(Q,V),J[j+U+0]=o.x,J[j+U+1]=o.y,J[j+U+2]=o.z,J[j+U+3]=0),D===!0&&(o.fromBufferAttribute(X,V),J[j+U+4]=o.x,J[j+U+5]=o.y,J[j+U+6]=o.z,J[j+U+7]=0),b===!0&&(o.fromBufferAttribute(ee,V),J[j+U+8]=o.x,J[j+U+9]=o.y,J[j+U+10]=o.z,J[j+U+11]=ee.itemSize===4?o.w:1)}}h={count:f,texture:O,size:new Ce(R,Y)},i.set(p,h),p.addEventListener("dispose",q)}let x=0;for(let M=0;M<m.length;M++)x+=m[M];const C=p.morphTargetsRelative?1:1-x;u.getUniforms().setValue(a,"morphTargetBaseInfluence",C),u.getUniforms().setValue(a,"morphTargetInfluences",m),u.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}else{const g=m===void 0?0:m.length;let f=n[p.id];if(f===void 0||f.length!==g){f=[];for(let D=0;D<g;D++)f[D]=[D,0];n[p.id]=f}for(let D=0;D<g;D++){const b=f[D];b[0]=D,b[1]=m[D]}f.sort(yu);for(let D=0;D<8;D++)D<g&&f[D][1]?(r[D][0]=f[D][0],r[D][1]=f[D][1]):(r[D][0]=Number.MAX_SAFE_INTEGER,r[D][1]=0);r.sort(_u);const h=p.morphAttributes.position,x=p.morphAttributes.normal;let C=0;for(let D=0;D<8;D++){const b=r[D],E=b[0],z=b[1];E!==Number.MAX_SAFE_INTEGER&&z?(h&&p.getAttribute("morphTarget"+D)!==h[E]&&p.setAttribute("morphTarget"+D,h[E]),x&&p.getAttribute("morphNormal"+D)!==x[E]&&p.setAttribute("morphNormal"+D,x[E]),s[D]=z,C+=z):(h&&p.hasAttribute("morphTarget"+D)===!0&&p.deleteAttribute("morphTarget"+D),x&&p.hasAttribute("morphNormal"+D)===!0&&p.deleteAttribute("morphNormal"+D),s[D]=0)}const M=p.morphTargetsRelative?1:1-C;u.getUniforms().setValue(a,"morphTargetBaseInfluence",M),u.getUniforms().setValue(a,"morphTargetInfluences",s)}}return{update:c}}function vu(a,e,t,n){let s=new WeakMap;function i(c){const l=n.render.frame,p=c.geometry,d=e.get(c,p);return s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){s=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:i,dispose:o}}const Yr=new bt,jr=new Or,$r=new rl,Zr=new Hr,Ka=[],Ja=[],Qa=new Float32Array(16),er=new Float32Array(9),tr=new Float32Array(4);function es(a,e,t){const n=a[0];if(n<=0||n>0)return a;const s=e*t;let i=Ka[s];if(i===void 0&&(i=new Float32Array(s),Ka[s]=i),e!==0){n.toArray(i,0);for(let o=1,r=0;o!==e;++o)r+=t,a[o].toArray(i,r)}return i}function $e(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ze(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function $s(a,e){let t=Ja[e];t===void 0&&(t=new Int32Array(e),Ja[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Mu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Du(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;a.uniform2fv(this.addr,e),Ze(t,e)}}function Su(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;a.uniform3fv(this.addr,e),Ze(t,e)}}function bu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;a.uniform4fv(this.addr,e),Ze(t,e)}}function Cu(a,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ze(t,e)}else{if($e(t,n))return;tr.set(n),a.uniformMatrix2fv(this.addr,!1,tr),Ze(t,n)}}function Au(a,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ze(t,e)}else{if($e(t,n))return;er.set(n),a.uniformMatrix3fv(this.addr,!1,er),Ze(t,n)}}function Fu(a,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ze(t,e)}else{if($e(t,n))return;Qa.set(n),a.uniformMatrix4fv(this.addr,!1,Qa),Ze(t,n)}}function wu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Eu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;a.uniform2iv(this.addr,e),Ze(t,e)}}function Tu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;a.uniform3iv(this.addr,e),Ze(t,e)}}function Lu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;a.uniform4iv(this.addr,e),Ze(t,e)}}function Pu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Ru(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;a.uniform2uiv(this.addr,e),Ze(t,e)}}function Iu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;a.uniform3uiv(this.addr,e),Ze(t,e)}}function Nu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;a.uniform4uiv(this.addr,e),Ze(t,e)}}function zu(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Yr,s)}function Ou(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$r,s)}function Uu(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zr,s)}function Bu(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jr,s)}function Gu(a){switch(a){case 5126:return Mu;case 35664:return Du;case 35665:return Su;case 35666:return bu;case 35674:return Cu;case 35675:return Au;case 35676:return Fu;case 5124:case 35670:return wu;case 35667:case 35671:return Eu;case 35668:case 35672:return Tu;case 35669:case 35673:return Lu;case 5125:return Pu;case 36294:return Ru;case 36295:return Iu;case 36296:return Nu;case 35678:case 36198:case 36298:case 36306:case 35682:return zu;case 35679:case 36299:case 36307:return Ou;case 35680:case 36300:case 36308:case 36293:return Uu;case 36289:case 36303:case 36311:case 36292:return Bu}}function ku(a,e){a.uniform1fv(this.addr,e)}function Vu(a,e){const t=es(e,this.size,2);a.uniform2fv(this.addr,t)}function Hu(a,e){const t=es(e,this.size,3);a.uniform3fv(this.addr,t)}function Wu(a,e){const t=es(e,this.size,4);a.uniform4fv(this.addr,t)}function qu(a,e){const t=es(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Xu(a,e){const t=es(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Yu(a,e){const t=es(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function ju(a,e){a.uniform1iv(this.addr,e)}function $u(a,e){a.uniform2iv(this.addr,e)}function Zu(a,e){a.uniform3iv(this.addr,e)}function Ku(a,e){a.uniform4iv(this.addr,e)}function Ju(a,e){a.uniform1uiv(this.addr,e)}function Qu(a,e){a.uniform2uiv(this.addr,e)}function eh(a,e){a.uniform3uiv(this.addr,e)}function th(a,e){a.uniform4uiv(this.addr,e)}function nh(a,e,t){const n=this.cache,s=e.length,i=$s(t,s);$e(n,i)||(a.uniform1iv(this.addr,i),Ze(n,i));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yr,i[o])}function sh(a,e,t){const n=this.cache,s=e.length,i=$s(t,s);$e(n,i)||(a.uniform1iv(this.addr,i),Ze(n,i));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$r,i[o])}function ih(a,e,t){const n=this.cache,s=e.length,i=$s(t,s);$e(n,i)||(a.uniform1iv(this.addr,i),Ze(n,i));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zr,i[o])}function ah(a,e,t){const n=this.cache,s=e.length,i=$s(t,s);$e(n,i)||(a.uniform1iv(this.addr,i),Ze(n,i));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jr,i[o])}function rh(a){switch(a){case 5126:return ku;case 35664:return Vu;case 35665:return Hu;case 35666:return Wu;case 35674:return qu;case 35675:return Xu;case 35676:return Yu;case 5124:case 35670:return ju;case 35667:case 35671:return $u;case 35668:case 35672:return Zu;case 35669:case 35673:return Ku;case 5125:return Ju;case 36294:return Qu;case 36295:return eh;case 36296:return th;case 35678:case 36198:case 36298:case 36306:case 35682:return nh;case 35679:case 36299:case 36307:return sh;case 35680:case 36300:case 36308:case 36293:return ih;case 36289:case 36303:case 36311:case 36292:return ah}}class oh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gu(t.type)}}class lh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rh(t.type)}}class ch{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,o=s.length;i!==o;++i){const r=s[i];r.setValue(e,t[r.id],n)}}}const Ti=/(\w+)(\])?(\[|\.)?/g;function nr(a,e){a.seq.push(e),a.map[e.id]=e}function ph(a,e,t){const n=a.name,s=n.length;for(Ti.lastIndex=0;;){const i=Ti.exec(n),o=Ti.lastIndex;let r=i[1];const c=i[2]==="]",l=i[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===s){nr(t,l===void 0?new oh(r,a,e):new lh(r,a,e));break}else{let d=t.map[r];d===void 0&&(d=new ch(r),nr(t,d)),t=d}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),o=e.getUniformLocation(t,i.name);ph(i,o,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,o=t.length;i!==o;++i){const r=t[i],c=n[r.id];c.needsUpdate!==!1&&r.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function sr(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let uh=0;function hh(a,e){const t=a.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let o=s;o<i;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function dh(a){switch(a){case Mn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function ir(a,e,t){const n=a.getShaderParameter(e,35713),s=a.getShaderInfoLog(e).trim();if(n&&s==="")return"";const i=/ERROR: 0:(\d+)/.exec(s);if(i){const o=parseInt(i[1]);return t.toUpperCase()+`

`+s+`

`+hh(a.getShaderSource(e),o)}else return s}function fh(a,e){const t=dh(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mh(a,e){let t;switch(e){case Po:t="Linear";break;case Ro:t="Reinhard";break;case Io:t="OptimizedCineon";break;case No:t="ACESFilmic";break;case zo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gh(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function _h(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yh(a,e){const t={},n=a.getProgramParameter(e,35721);for(let s=0;s<n;s++){const i=a.getActiveAttrib(e,s),o=i.name;let r=1;i.type===35674&&(r=2),i.type===35675&&(r=3),i.type===35676&&(r=4),t[o]={type:i.type,location:a.getAttribLocation(e,o),locationSize:r}}return t}function ps(a){return a!==""}function ar(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rr(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xh=/^[ \t]*#include +<([\w\d./]+)>/gm;function ki(a){return a.replace(xh,vh)}function vh(a,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ki(t)}const Mh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function or(a){return a.replace(Mh,Dh)}function Dh(a,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function lr(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sh(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Fr?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===co?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===cs&&(e="SHADOWMAP_TYPE_VSM"),e}function bh(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case jn:case $n:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ch(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function Ah(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Tr:e="ENVMAP_BLENDING_MULTIPLY";break;case To:e="ENVMAP_BLENDING_MIX";break;case Lo:e="ENVMAP_BLENDING_ADD";break}return e}function Fh(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wh(a,e,t,n){const s=a.getContext(),i=t.defines;let o=t.vertexShader,r=t.fragmentShader;const c=Sh(t),l=bh(t),p=Ch(t),d=Ah(t),u=Fh(t),m=t.isWebGL2?"":gh(t),g=_h(i),f=s.createProgram();let h,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(ps).join(`
`),h.length>0&&(h+=`
`),x=[m,g].filter(ps).join(`
`),x.length>0&&(x+=`
`)):(h=[lr(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),x=[m,lr(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kt?"#define TONE_MAPPING":"",t.toneMapping!==Kt?De.tonemapping_pars_fragment:"",t.toneMapping!==Kt?mh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,fh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=ki(o),o=ar(o,t),o=rr(o,t),r=ki(r),r=ar(r,t),r=rr(r,t),o=or(o),r=or(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=C+h+o,D=C+x+r,b=sr(s,35633,M),E=sr(s,35632,D);if(s.attachShader(f,b),s.attachShader(f,E),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f),a.debug.checkShaderErrors){const F=s.getProgramInfoLog(f).trim(),R=s.getShaderInfoLog(b).trim(),Y=s.getShaderInfoLog(E).trim();let J=!0,O=!0;if(s.getProgramParameter(f,35714)===!1){J=!1;const I=ir(s,b,"vertex"),q=ir(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,35715)+`

Program Info Log: `+F+`
`+I+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(R===""||Y==="")&&(O=!1);O&&(this.diagnostics={runnable:J,programLog:F,vertexShader:{log:R,prefix:h},fragmentShader:{log:Y,prefix:x}})}s.deleteShader(b),s.deleteShader(E);let z;this.getUniforms=function(){return z===void 0&&(z=new Hs(s,f)),z};let _;return this.getAttributes=function(){return _===void 0&&(_=yh(s,f)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=uh++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=E,this}let Eh=0;class Th{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lh(e),t.set(e,n)),n}}class Lh{constructor(e){this.id=Eh++,this.code=e,this.usedTimes=0}}function Ph(a,e,t,n,s,i,o){const r=new Ur,c=new Th,l=[],p=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_,F,R,Y,J){const O=Y.fog,I=J.geometry,q=_.isMeshStandardMaterial?Y.environment:null,$=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),Q=$&&$.mapping===Ys?$.image.height:null,X=g[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=ee!==void 0?ee.length:0;let V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let U,ie,te,ae;if(X){const Re=Bt[X];U=Re.vertexShader,ie=Re.fragmentShader}else U=_.vertexShader,ie=_.fragmentShader,c.update(_),te=c.getVertexShaderID(_),ae=c.getFragmentShaderID(_);const H=a.getRenderTarget(),Ae=_.alphaTest>0,he=_.clearcoat>0,_e=_.iridescence>0;return{isWebGL2:p,shaderID:X,shaderName:_.type,vertexShader:U,fragmentShader:ie,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:u,outputEncoding:H===null?a.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Mn,map:!!_.map,matcap:!!_.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:Q,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===nl,tangentSpaceNormalMap:_.normalMapType===tl,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ue,clearcoat:he,clearcoatMap:he&&!!_.clearcoatMap,clearcoatRoughnessMap:he&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!_.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!_.iridescenceMap,iridescenceThicknessMap:_e&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Xn,alphaMap:!!_.alphaMap,alphaTest:Ae,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!I.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:V,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:_.toneMapped?a.toneMapping:Kt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xs,flipSided:_.side===Lt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const F=[];if(_.shaderID?F.push(_.shaderID):(F.push(_.customVertexShaderID),F.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)F.push(R),F.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(x(F,_),C(F,_),F.push(a.outputEncoding)),F.push(_.customProgramCacheKey),F.join()}function x(_,F){_.push(F.precision),_.push(F.outputEncoding),_.push(F.envMapMode),_.push(F.envMapCubeUVHeight),_.push(F.combine),_.push(F.vertexUvs),_.push(F.fogExp2),_.push(F.sizeAttenuation),_.push(F.morphTargetsCount),_.push(F.morphAttributeCount),_.push(F.numDirLights),_.push(F.numPointLights),_.push(F.numSpotLights),_.push(F.numSpotLightMaps),_.push(F.numHemiLights),_.push(F.numRectAreaLights),_.push(F.numDirLightShadows),_.push(F.numPointLightShadows),_.push(F.numSpotLightShadows),_.push(F.numSpotLightShadowsWithMaps),_.push(F.shadowMapType),_.push(F.toneMapping),_.push(F.numClippingPlanes),_.push(F.numClipIntersection),_.push(F.depthPacking)}function C(_,F){r.disableAll(),F.isWebGL2&&r.enable(0),F.supportsVertexTextures&&r.enable(1),F.instancing&&r.enable(2),F.instancingColor&&r.enable(3),F.map&&r.enable(4),F.matcap&&r.enable(5),F.envMap&&r.enable(6),F.lightMap&&r.enable(7),F.aoMap&&r.enable(8),F.emissiveMap&&r.enable(9),F.bumpMap&&r.enable(10),F.normalMap&&r.enable(11),F.objectSpaceNormalMap&&r.enable(12),F.tangentSpaceNormalMap&&r.enable(13),F.clearcoat&&r.enable(14),F.clearcoatMap&&r.enable(15),F.clearcoatRoughnessMap&&r.enable(16),F.clearcoatNormalMap&&r.enable(17),F.iridescence&&r.enable(18),F.iridescenceMap&&r.enable(19),F.iridescenceThicknessMap&&r.enable(20),F.displacementMap&&r.enable(21),F.specularMap&&r.enable(22),F.roughnessMap&&r.enable(23),F.metalnessMap&&r.enable(24),F.gradientMap&&r.enable(25),F.alphaMap&&r.enable(26),F.alphaTest&&r.enable(27),F.vertexColors&&r.enable(28),F.vertexAlphas&&r.enable(29),F.vertexUvs&&r.enable(30),F.vertexTangents&&r.enable(31),F.uvsVertexOnly&&r.enable(32),_.push(r.mask),r.disableAll(),F.fog&&r.enable(0),F.useFog&&r.enable(1),F.flatShading&&r.enable(2),F.logarithmicDepthBuffer&&r.enable(3),F.skinning&&r.enable(4),F.morphTargets&&r.enable(5),F.morphNormals&&r.enable(6),F.morphColors&&r.enable(7),F.premultipliedAlpha&&r.enable(8),F.shadowMapEnabled&&r.enable(9),F.physicallyCorrectLights&&r.enable(10),F.doubleSided&&r.enable(11),F.flipSided&&r.enable(12),F.useDepthPacking&&r.enable(13),F.dithering&&r.enable(14),F.specularIntensityMap&&r.enable(15),F.specularColorMap&&r.enable(16),F.transmission&&r.enable(17),F.transmissionMap&&r.enable(18),F.thicknessMap&&r.enable(19),F.sheen&&r.enable(20),F.sheenColorMap&&r.enable(21),F.sheenRoughnessMap&&r.enable(22),F.decodeVideoTexture&&r.enable(23),F.opaque&&r.enable(24),_.push(r.mask)}function M(_){const F=g[_.type];let R;if(F){const Y=Bt[F];R=yl.clone(Y.uniforms)}else R=_.uniforms;return R}function D(_,F){let R;for(let Y=0,J=l.length;Y<J;Y++){const O=l[Y];if(O.cacheKey===F){R=O,++R.usedTimes;break}}return R===void 0&&(R=new wh(a,F,_,i),l.push(R)),R}function b(_){if(--_.usedTimes===0){const F=l.indexOf(_);l[F]=l[l.length-1],l.pop(),_.destroy()}}function E(_){c.remove(_)}function z(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:M,acquireProgram:D,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:z}}function Rh(){let a=new WeakMap;function e(i){let o=a.get(i);return o===void 0&&(o={},a.set(i,o)),o}function t(i){a.delete(i)}function n(i,o,r){a.get(i)[o]=r}function s(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ih(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function cr(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function pr(){const a=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,m,g,f,h){let x=a[e];return x===void 0?(x={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:h},a[e]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=m,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=f,x.group=h),e++,x}function r(d,u,m,g,f,h){const x=o(d,u,m,g,f,h);m.transmission>0?n.push(x):m.transparent===!0?s.push(x):t.push(x)}function c(d,u,m,g,f,h){const x=o(d,u,m,g,f,h);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function l(d,u){t.length>1&&t.sort(d||Ih),n.length>1&&n.sort(u||cr),s.length>1&&s.sort(u||cr)}function p(){for(let d=e,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:r,unshift:c,finish:p,sort:l}}function Nh(){let a=new WeakMap;function e(n,s){const i=a.get(n);let o;return i===void 0?(o=new pr,a.set(n,[o])):s>=i.length?(o=new pr,i.push(o)):o=i[s],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function zh(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function Oh(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Uh=0;function Bh(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gh(a,e){const t=new zh,n=Oh(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)s.probe.push(new P);const i=new P,o=new je,r=new je;function c(p,d){let u=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let f=0,h=0,x=0,C=0,M=0,D=0,b=0,E=0,z=0,_=0;p.sort(Bh);const F=d!==!0?Math.PI:1;for(let Y=0,J=p.length;Y<J;Y++){const O=p[Y],I=O.color,q=O.intensity,$=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=I.r*q*F,m+=I.g*q*F,g+=I.b*q*F;else if(O.isLightProbe)for(let X=0;X<9;X++)s.probe[X].addScaledVector(O.sh.coefficients[X],q);else if(O.isDirectionalLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*F),O.castShadow){const ee=O.shadow,j=n.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,s.directionalShadow[f]=j,s.directionalShadowMap[f]=Q,s.directionalShadowMatrix[f]=O.shadow.matrix,D++}s.directional[f]=X,f++}else if(O.isSpotLight){const X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(I).multiplyScalar(q*F),X.distance=$,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,s.spot[x]=X;const ee=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,ee.updateMatrices(O),O.castShadow&&_++),s.spotLightMatrix[x]=ee.matrix,O.castShadow){const j=n.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,s.spotShadow[x]=j,s.spotShadowMap[x]=Q,E++}x++}else if(O.isRectAreaLight){const X=t.get(O);X.color.copy(I).multiplyScalar(q),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),s.rectArea[C]=X,C++}else if(O.isPointLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*F),X.distance=O.distance,X.decay=O.decay,O.castShadow){const ee=O.shadow,j=n.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,s.pointShadow[h]=j,s.pointShadowMap[h]=Q,s.pointShadowMatrix[h]=O.shadow.matrix,b++}s.point[h]=X,h++}else if(O.isHemisphereLight){const X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(q*F),X.groundColor.copy(O.groundColor).multiplyScalar(q*F),s.hemi[M]=X,M++}}C>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=m,s.ambient[2]=g;const R=s.hash;(R.directionalLength!==f||R.pointLength!==h||R.spotLength!==x||R.rectAreaLength!==C||R.hemiLength!==M||R.numDirectionalShadows!==D||R.numPointShadows!==b||R.numSpotShadows!==E||R.numSpotMaps!==z)&&(s.directional.length=f,s.spot.length=x,s.rectArea.length=C,s.point.length=h,s.hemi.length=M,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=E+z-_,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=_,R.directionalLength=f,R.pointLength=h,R.spotLength=x,R.rectAreaLength=C,R.hemiLength=M,R.numDirectionalShadows=D,R.numPointShadows=b,R.numSpotShadows=E,R.numSpotMaps=z,s.version=Uh++)}function l(p,d){let u=0,m=0,g=0,f=0,h=0;const x=d.matrixWorldInverse;for(let C=0,M=p.length;C<M;C++){const D=p[C];if(D.isDirectionalLight){const b=s.directional[u];b.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),u++}else if(D.isSpotLight){const b=s.spot[g];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),g++}else if(D.isRectAreaLight){const b=s.rectArea[f];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(x),r.identity(),o.copy(D.matrixWorld),o.premultiply(x),r.extractRotation(o),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),f++}else if(D.isPointLight){const b=s.point[m];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(x),m++}else if(D.isHemisphereLight){const b=s.hemi[h];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(x),h++}}}return{setup:c,setupView:l,state:s}}function ur(a,e){const t=new Gh(a,e),n=[],s=[];function i(){n.length=0,s.length=0}function o(d){n.push(d)}function r(d){s.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:i,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function kh(a,e){let t=new WeakMap;function n(i,o=0){const r=t.get(i);let c;return r===void 0?(c=new ur(a,e),t.set(i,[c])):o>=r.length?(c=new ur(a,e),r.push(c)):c=r[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class Vh extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hh extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xh(a,e,t){let n=new Wr;const s=new Ce,i=new Ce,o=new st,r=new Vh({depthPacking:el}),c=new Hh,l={},p=t.maxTextureSize,d={0:Lt,1:sn,2:Xs},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Wh,fragmentShader:qh}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new _t;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Zt(g,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr,this.render=function(D,b,E){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||D.length===0)return;const z=a.getRenderTarget(),_=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),R=a.state;R.setBlending(nn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Y=0,J=D.length;Y<J;Y++){const O=D[Y],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const q=I.getFrameExtents();if(s.multiply(q),i.copy(I.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(i.x=Math.floor(p/q.x),s.x=i.x*q.x,I.mapSize.x=i.x),s.y>p&&(i.y=Math.floor(p/q.y),s.y=i.y*q.y,I.mapSize.y=i.y)),I.map===null){const Q=this.type!==cs?{minFilter:pt,magFilter:pt}:{};I.map=new Dn(s.x,s.y,Q),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();const $=I.getViewportCount();for(let Q=0;Q<$;Q++){const X=I.getViewport(Q);o.set(i.x*X.x,i.y*X.y,i.x*X.z,i.y*X.w),R.viewport(o),I.updateMatrices(O,Q),n=I.getFrustum(),M(b,E,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===cs&&x(I,E),I.needsUpdate=!1}h.needsUpdate=!1,a.setRenderTarget(z,_,F)};function x(D,b){const E=e.update(f);u.defines.VSM_SAMPLES!==D.blurSamples&&(u.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Dn(s.x,s.y)),u.uniforms.shadow_pass.value=D.map.texture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,a.setRenderTarget(D.mapPass),a.clear(),a.renderBufferDirect(b,null,E,u,f,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,a.setRenderTarget(D.map),a.clear(),a.renderBufferDirect(b,null,E,m,f,null)}function C(D,b,E,z,_,F){let R=null;const Y=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Y!==void 0)R=Y;else if(R=E.isPointLight===!0?c:r,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const J=R.uuid,O=b.uuid;let I=l[J];I===void 0&&(I={},l[J]=I);let q=I[O];q===void 0&&(q=R.clone(),I[O]=q),R=q}return R.visible=b.visible,R.wireframe=b.wireframe,F===cs?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=z,R.farDistance=_),R}function M(D,b,E,z,_){if(D.visible===!1)return;if(D.layers.test(b.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&_===cs)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),J=D.material;if(Array.isArray(J)){const O=Y.groups;for(let I=0,q=O.length;I<q;I++){const $=O[I],Q=J[$.materialIndex];if(Q&&Q.visible){const X=C(D,Q,z,E.near,E.far,_);a.renderBufferDirect(E,null,Y,X,D,$)}}}else if(J.visible){const O=C(D,J,z,E.near,E.far,_);a.renderBufferDirect(E,null,Y,O,D,null)}}const R=D.children;for(let Y=0,J=R.length;Y<J;Y++)M(R[Y],b,E,z,_)}}function Yh(a,e,t){const n=t.isWebGL2;function s(){let w=!1;const G=new st;let Z=null;const ce=new st(0,0,0,0);return{setMask:function(me){Z!==me&&!w&&(a.colorMask(me,me,me,me),Z=me)},setLocked:function(me){w=me},setClear:function(me,Ie,Je,it,an){an===!0&&(me*=it,Ie*=it,Je*=it),G.set(me,Ie,Je,it),ce.equals(G)===!1&&(a.clearColor(me,Ie,Je,it),ce.copy(G))},reset:function(){w=!1,Z=null,ce.set(-1,0,0,0)}}}function i(){let w=!1,G=null,Z=null,ce=null;return{setTest:function(me){me?Ae(2929):he(2929)},setMask:function(me){G!==me&&!w&&(a.depthMask(me),G=me)},setFunc:function(me){if(Z!==me){switch(me){case So:a.depthFunc(512);break;case bo:a.depthFunc(519);break;case Co:a.depthFunc(513);break;case Ii:a.depthFunc(515);break;case Ao:a.depthFunc(514);break;case Fo:a.depthFunc(518);break;case wo:a.depthFunc(516);break;case Eo:a.depthFunc(517);break;default:a.depthFunc(515)}Z=me}},setLocked:function(me){w=me},setClear:function(me){ce!==me&&(a.clearDepth(me),ce=me)},reset:function(){w=!1,G=null,Z=null,ce=null}}}function o(){let w=!1,G=null,Z=null,ce=null,me=null,Ie=null,Je=null,it=null,an=null;return{setTest:function(Be){w||(Be?Ae(2960):he(2960))},setMask:function(Be){G!==Be&&!w&&(a.stencilMask(Be),G=Be)},setFunc:function(Be,Vt,Ft){(Z!==Be||ce!==Vt||me!==Ft)&&(a.stencilFunc(Be,Vt,Ft),Z=Be,ce=Vt,me=Ft)},setOp:function(Be,Vt,Ft){(Ie!==Be||Je!==Vt||it!==Ft)&&(a.stencilOp(Be,Vt,Ft),Ie=Be,Je=Vt,it=Ft)},setLocked:function(Be){w=Be},setClear:function(Be){an!==Be&&(a.clearStencil(Be),an=Be)},reset:function(){w=!1,G=null,Z=null,ce=null,me=null,Ie=null,Je=null,it=null,an=null}}}const r=new s,c=new i,l=new o,p=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,f=[],h=null,x=!1,C=null,M=null,D=null,b=null,E=null,z=null,_=null,F=!1,R=null,Y=null,J=null,O=null,I=null;const q=a.getParameter(35661);let $=!1,Q=0;const X=a.getParameter(7938);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Q>=2);let ee=null,j={};const V=a.getParameter(3088),U=a.getParameter(2978),ie=new st().fromArray(V),te=new st().fromArray(U);function ae(w,G,Z){const ce=new Uint8Array(4),me=a.createTexture();a.bindTexture(w,me),a.texParameteri(w,10241,9728),a.texParameteri(w,10240,9728);for(let Ie=0;Ie<Z;Ie++)a.texImage2D(G+Ie,0,6408,1,1,0,6408,5121,ce);return me}const H={};H[3553]=ae(3553,3553,1),H[34067]=ae(34067,34069,6),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ae(2929),c.setFunc(Ii),qe(!1),rt(na),Ae(2884),Ke(nn);function Ae(w){u[w]!==!0&&(a.enable(w),u[w]=!0)}function he(w){u[w]!==!1&&(a.disable(w),u[w]=!1)}function _e(w,G){return m[w]!==G?(a.bindFramebuffer(w,G),m[w]=G,n&&(w===36009&&(m[36160]=G),w===36160&&(m[36009]=G)),!0):!1}function ue(w,G){let Z=f,ce=!1;if(w)if(Z=g.get(G),Z===void 0&&(Z=[],g.set(G,Z)),w.isWebGLMultipleRenderTargets){const me=w.texture;if(Z.length!==me.length||Z[0]!==36064){for(let Ie=0,Je=me.length;Ie<Je;Ie++)Z[Ie]=36064+Ie;Z.length=me.length,ce=!0}}else Z[0]!==36064&&(Z[0]=36064,ce=!0);else Z[0]!==1029&&(Z[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Re(w){return h!==w?(a.useProgram(w),h=w,!0):!1}const Me={[Wn]:32774,[uo]:32778,[ho]:32779};if(n)Me[ra]=32775,Me[oa]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(Me[ra]=w.MIN_EXT,Me[oa]=w.MAX_EXT)}const ye={[fo]:0,[mo]:1,[go]:768,[wr]:770,[Do]:776,[vo]:774,[yo]:772,[_o]:769,[Er]:771,[Mo]:775,[xo]:773};function Ke(w,G,Z,ce,me,Ie,Je,it){if(w===nn){x===!0&&(he(3042),x=!1);return}if(x===!1&&(Ae(3042),x=!0),w!==po){if(w!==C||it!==F){if((M!==Wn||E!==Wn)&&(a.blendEquation(32774),M=Wn,E=Wn),it)switch(w){case Xn:a.blendFuncSeparate(1,771,1,771);break;case sa:a.blendFunc(1,1);break;case ia:a.blendFuncSeparate(0,769,0,1);break;case aa:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Xn:a.blendFuncSeparate(770,771,1,771);break;case sa:a.blendFunc(770,1);break;case ia:a.blendFuncSeparate(0,769,0,1);break;case aa:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}D=null,b=null,z=null,_=null,C=w,F=it}return}me=me||G,Ie=Ie||Z,Je=Je||ce,(G!==M||me!==E)&&(a.blendEquationSeparate(Me[G],Me[me]),M=G,E=me),(Z!==D||ce!==b||Ie!==z||Je!==_)&&(a.blendFuncSeparate(ye[Z],ye[ce],ye[Ie],ye[Je]),D=Z,b=ce,z=Ie,_=Je),C=w,F=!1}function We(w,G){w.side===Xs?he(2884):Ae(2884);let Z=w.side===Lt;G&&(Z=!Z),qe(Z),w.blending===Xn&&w.transparent===!1?Ke(nn):Ke(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),c.setFunc(w.depthFunc),c.setTest(w.depthTest),c.setMask(w.depthWrite),r.setMask(w.colorWrite);const ce=w.stencilWrite;l.setTest(ce),ce&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Ne(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Ae(32926):he(32926)}function qe(w){R!==w&&(w?a.frontFace(2304):a.frontFace(2305),R=w)}function rt(w){w!==oo?(Ae(2884),w!==Y&&(w===na?a.cullFace(1029):w===lo?a.cullFace(1028):a.cullFace(1032))):he(2884),Y=w}function Ge(w){w!==J&&($&&a.lineWidth(w),J=w)}function Ne(w,G,Z){w?(Ae(32823),(O!==G||I!==Z)&&(a.polygonOffset(G,Z),O=G,I=Z)):he(32823)}function At(w){w?Ae(3089):he(3089)}function dt(w){w===void 0&&(w=33984+q-1),ee!==w&&(a.activeTexture(w),ee=w)}function S(w,G,Z){Z===void 0&&(ee===null?Z=33984+q-1:Z=ee);let ce=j[Z];ce===void 0&&(ce={type:void 0,texture:void 0},j[Z]=ce),(ce.type!==w||ce.texture!==G)&&(ee!==Z&&(a.activeTexture(Z),ee=Z),a.bindTexture(w,G||H[w]),ce.type=w,ce.texture=G)}function y(){const w=j[ee];w!==void 0&&w.type!==void 0&&(a.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function B(){try{a.compressedTexImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{a.compressedTexImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ne(){try{a.texSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{a.texSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function A(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function T(){try{a.texStorage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(){try{a.texStorage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{a.texImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{a.texImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(w){ie.equals(w)===!1&&(a.scissor(w.x,w.y,w.z,w.w),ie.copy(w))}function de(w){te.equals(w)===!1&&(a.viewport(w.x,w.y,w.z,w.w),te.copy(w))}function Fe(w,G){let Z=d.get(G);Z===void 0&&(Z=new WeakMap,d.set(G,Z));let ce=Z.get(w);ce===void 0&&(ce=a.getUniformBlockIndex(G,w.name),Z.set(w,ce))}function we(w,G){const ce=d.get(G).get(w);p.get(G)!==ce&&(a.uniformBlockBinding(G,ce,w.__bindingPointIndex),p.set(G,ce))}function Oe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},ee=null,j={},m={},g=new WeakMap,f=[],h=null,x=!1,C=null,M=null,D=null,b=null,E=null,z=null,_=null,F=!1,R=null,Y=null,J=null,O=null,I=null,ie.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Ae,disable:he,bindFramebuffer:_e,drawBuffers:ue,useProgram:Re,setBlending:Ke,setMaterial:We,setFlipSided:qe,setCullFace:rt,setLineWidth:Ge,setPolygonOffset:Ne,setScissorTest:At,activeTexture:dt,bindTexture:S,unbindTexture:y,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:pe,texImage3D:oe,updateUBOMapping:Fe,uniformBlockBinding:we,texStorage2D:T,texStorage3D:le,texSubImage2D:ne,texSubImage3D:re,compressedTexSubImage2D:xe,compressedTexSubImage3D:A,scissor:fe,viewport:de,reset:Oe}}function jh(a,e,t,n,s,i,o){const r=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,p=s.maxTextureSize,d=s.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(S,y){return x?new OffscreenCanvas(S,y):Ws("canvas")}function M(S,y,B,K){let ne=1;if((S.width>K||S.height>K)&&(ne=K/Math.max(S.width,S.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const re=y?Gi:Math.floor,xe=re(ne*S.width),A=re(ne*S.height);f===void 0&&(f=C(xe,A));const T=B?C(xe,A):f;return T.width=xe,T.height=A,T.getContext("2d").drawImage(S,0,0,xe,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xe+"x"+A+")."),T}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function D(S){return Ra(S.width)&&Ra(S.height)}function b(S){return r?!1:S.wrapS!==Nt||S.wrapT!==Nt||S.minFilter!==pt&&S.minFilter!==Et}function E(S,y){return S.generateMipmaps&&y&&S.minFilter!==pt&&S.minFilter!==Et}function z(S){a.generateMipmap(S)}function _(S,y,B,K,ne=!1){if(r===!1)return y;if(S!==null){if(a[S]!==void 0)return a[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let re=y;return y===6403&&(B===5126&&(re=33326),B===5131&&(re=33325),B===5121&&(re=33321)),y===33319&&(B===5126&&(re=33328),B===5131&&(re=33327),B===5121&&(re=33323)),y===6408&&(B===5126&&(re=34836),B===5131&&(re=34842),B===5121&&(re=K===Ue&&ne===!1?35907:32856),B===32819&&(re=32854),B===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function F(S,y,B){return E(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==pt&&S.minFilter!==Et?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function R(S){return S===pt||S===la||S===ei?9728:9729}function Y(S){const y=S.target;y.removeEventListener("dispose",Y),O(y),y.isVideoTexture&&g.delete(y)}function J(S){const y=S.target;y.removeEventListener("dispose",J),q(y)}function O(S){const y=n.get(S);if(y.__webglInit===void 0)return;const B=S.source,K=h.get(B);if(K){const ne=K[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(S),Object.keys(K).length===0&&h.delete(B)}n.remove(S)}function I(S){const y=n.get(S);a.deleteTexture(y.__webglTexture);const B=S.source,K=h.get(B);delete K[y.__cacheKey],o.memory.textures--}function q(S){const y=S.texture,B=n.get(S),K=n.get(y);if(K.__webglTexture!==void 0&&(a.deleteTexture(K.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)a.deleteFramebuffer(B.__webglFramebuffer[ne]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[ne]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ne=0,re=y.length;ne<re;ne++){const xe=n.get(y[ne]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(y[ne])}n.remove(y),n.remove(S)}let $=0;function Q(){$=0}function X(){const S=$;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),$+=1,S}function ee(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.encoding),y.join()}function j(S,y){const B=n.get(S);if(S.isVideoTexture&&At(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,S,y);return}}t.bindTexture(3553,B.__webglTexture,33984+y)}function V(S,y){const B=n.get(S);if(S.version>0&&B.__version!==S.version){he(B,S,y);return}t.bindTexture(35866,B.__webglTexture,33984+y)}function U(S,y){const B=n.get(S);if(S.version>0&&B.__version!==S.version){he(B,S,y);return}t.bindTexture(32879,B.__webglTexture,33984+y)}function ie(S,y){const B=n.get(S);if(S.version>0&&B.__version!==S.version){_e(B,S,y);return}t.bindTexture(34067,B.__webglTexture,33984+y)}const te={[Oi]:10497,[Nt]:33071,[Ui]:33648},ae={[pt]:9728,[la]:9984,[ei]:9986,[Et]:9729,[Oo]:9985,[us]:9987};function H(S,y,B){if(B?(a.texParameteri(S,10242,te[y.wrapS]),a.texParameteri(S,10243,te[y.wrapT]),(S===32879||S===35866)&&a.texParameteri(S,32882,te[y.wrapR]),a.texParameteri(S,10240,ae[y.magFilter]),a.texParameteri(S,10241,ae[y.minFilter])):(a.texParameteri(S,10242,33071),a.texParameteri(S,10243,33071),(S===32879||S===35866)&&a.texParameteri(S,32882,33071),(y.wrapS!==Nt||y.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(S,10240,R(y.magFilter)),a.texParameteri(S,10241,R(y.minFilter)),y.minFilter!==pt&&y.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===pt||y.minFilter!==ei&&y.minFilter!==us||y.type===_n&&e.has("OES_texture_float_linear")===!1||r===!1&&y.type===hs&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(a.texParameterf(S,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Ae(S,y){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",Y));const K=y.source;let ne=h.get(K);ne===void 0&&(ne={},h.set(K,ne));const re=ee(y);if(re!==S.__cacheKey){ne[re]===void 0&&(ne[re]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[re].usedTimes++;const xe=ne[S.__cacheKey];xe!==void 0&&(ne[S.__cacheKey].usedTimes--,xe.usedTimes===0&&I(y)),S.__cacheKey=re,S.__webglTexture=ne[re].texture}return B}function he(S,y,B){let K=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=35866),y.isData3DTexture&&(K=32879);const ne=Ae(S,y),re=y.source;t.bindTexture(K,S.__webglTexture,33984+B);const xe=n.get(re);if(re.version!==xe.__version||ne===!0){t.activeTexture(33984+B),a.pixelStorei(37440,y.flipY),a.pixelStorei(37441,y.premultiplyAlpha),a.pixelStorei(3317,y.unpackAlignment),a.pixelStorei(37443,0);const A=b(y)&&D(y.image)===!1;let T=M(y.image,A,!1,p);T=dt(y,T);const le=D(T)||r,pe=i.convert(y.format,y.encoding);let oe=i.convert(y.type),fe=_(y.internalFormat,pe,oe,y.encoding,y.isVideoTexture);H(K,y,le);let de;const Fe=y.mipmaps,we=r&&y.isVideoTexture!==!0,Oe=xe.__version===void 0||ne===!0,w=F(y,T,le);if(y.isDepthTexture)fe=6402,r?y.type===_n?fe=36012:y.type===gn?fe=33190:y.type===Yn?fe=35056:fe=33189:y.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===yn&&fe===6402&&y.type!==Pr&&y.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=gn,oe=i.convert(y.type)),y.format===Zn&&fe===6402&&(fe=34041,y.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Yn,oe=i.convert(y.type))),Oe&&(we?t.texStorage2D(3553,1,fe,T.width,T.height):t.texImage2D(3553,0,fe,T.width,T.height,0,pe,oe,null));else if(y.isDataTexture)if(Fe.length>0&&le){we&&Oe&&t.texStorage2D(3553,w,fe,Fe[0].width,Fe[0].height);for(let G=0,Z=Fe.length;G<Z;G++)de=Fe[G],we?t.texSubImage2D(3553,G,0,0,de.width,de.height,pe,oe,de.data):t.texImage2D(3553,G,fe,de.width,de.height,0,pe,oe,de.data);y.generateMipmaps=!1}else we?(Oe&&t.texStorage2D(3553,w,fe,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,pe,oe,T.data)):t.texImage2D(3553,0,fe,T.width,T.height,0,pe,oe,T.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){we&&Oe&&t.texStorage3D(35866,w,fe,Fe[0].width,Fe[0].height,T.depth);for(let G=0,Z=Fe.length;G<Z;G++)de=Fe[G],y.format!==zt?pe!==null?we?t.compressedTexSubImage3D(35866,G,0,0,0,de.width,de.height,T.depth,pe,de.data,0,0):t.compressedTexImage3D(35866,G,fe,de.width,de.height,T.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage3D(35866,G,0,0,0,de.width,de.height,T.depth,pe,oe,de.data):t.texImage3D(35866,G,fe,de.width,de.height,T.depth,0,pe,oe,de.data)}else{we&&Oe&&t.texStorage2D(3553,w,fe,Fe[0].width,Fe[0].height);for(let G=0,Z=Fe.length;G<Z;G++)de=Fe[G],y.format!==zt?pe!==null?we?t.compressedTexSubImage2D(3553,G,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(3553,G,fe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage2D(3553,G,0,0,de.width,de.height,pe,oe,de.data):t.texImage2D(3553,G,fe,de.width,de.height,0,pe,oe,de.data)}else if(y.isDataArrayTexture)we?(Oe&&t.texStorage3D(35866,w,fe,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,pe,oe,T.data)):t.texImage3D(35866,0,fe,T.width,T.height,T.depth,0,pe,oe,T.data);else if(y.isData3DTexture)we?(Oe&&t.texStorage3D(32879,w,fe,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,pe,oe,T.data)):t.texImage3D(32879,0,fe,T.width,T.height,T.depth,0,pe,oe,T.data);else if(y.isFramebufferTexture){if(Oe)if(we)t.texStorage2D(3553,w,fe,T.width,T.height);else{let G=T.width,Z=T.height;for(let ce=0;ce<w;ce++)t.texImage2D(3553,ce,fe,G,Z,0,pe,oe,null),G>>=1,Z>>=1}}else if(Fe.length>0&&le){we&&Oe&&t.texStorage2D(3553,w,fe,Fe[0].width,Fe[0].height);for(let G=0,Z=Fe.length;G<Z;G++)de=Fe[G],we?t.texSubImage2D(3553,G,0,0,pe,oe,de):t.texImage2D(3553,G,fe,pe,oe,de);y.generateMipmaps=!1}else we?(Oe&&t.texStorage2D(3553,w,fe,T.width,T.height),t.texSubImage2D(3553,0,0,0,pe,oe,T)):t.texImage2D(3553,0,fe,pe,oe,T);E(y,le)&&z(K),xe.__version=re.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function _e(S,y,B){if(y.image.length!==6)return;const K=Ae(S,y),ne=y.source;t.bindTexture(34067,S.__webglTexture,33984+B);const re=n.get(ne);if(ne.version!==re.__version||K===!0){t.activeTexture(33984+B),a.pixelStorei(37440,y.flipY),a.pixelStorei(37441,y.premultiplyAlpha),a.pixelStorei(3317,y.unpackAlignment),a.pixelStorei(37443,0);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,A=y.image[0]&&y.image[0].isDataTexture,T=[];for(let G=0;G<6;G++)!xe&&!A?T[G]=M(y.image[G],!1,!0,l):T[G]=A?y.image[G].image:y.image[G],T[G]=dt(y,T[G]);const le=T[0],pe=D(le)||r,oe=i.convert(y.format,y.encoding),fe=i.convert(y.type),de=_(y.internalFormat,oe,fe,y.encoding),Fe=r&&y.isVideoTexture!==!0,we=re.__version===void 0||K===!0;let Oe=F(y,le,pe);H(34067,y,pe);let w;if(xe){Fe&&we&&t.texStorage2D(34067,Oe,de,le.width,le.height);for(let G=0;G<6;G++){w=T[G].mipmaps;for(let Z=0;Z<w.length;Z++){const ce=w[Z];y.format!==zt?oe!==null?Fe?t.compressedTexSubImage2D(34069+G,Z,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+G,Z,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+G,Z,0,0,ce.width,ce.height,oe,fe,ce.data):t.texImage2D(34069+G,Z,de,ce.width,ce.height,0,oe,fe,ce.data)}}}else{w=y.mipmaps,Fe&&we&&(w.length>0&&Oe++,t.texStorage2D(34067,Oe,de,T[0].width,T[0].height));for(let G=0;G<6;G++)if(A){Fe?t.texSubImage2D(34069+G,0,0,0,T[G].width,T[G].height,oe,fe,T[G].data):t.texImage2D(34069+G,0,de,T[G].width,T[G].height,0,oe,fe,T[G].data);for(let Z=0;Z<w.length;Z++){const me=w[Z].image[G].image;Fe?t.texSubImage2D(34069+G,Z+1,0,0,me.width,me.height,oe,fe,me.data):t.texImage2D(34069+G,Z+1,de,me.width,me.height,0,oe,fe,me.data)}}else{Fe?t.texSubImage2D(34069+G,0,0,0,oe,fe,T[G]):t.texImage2D(34069+G,0,de,oe,fe,T[G]);for(let Z=0;Z<w.length;Z++){const ce=w[Z];Fe?t.texSubImage2D(34069+G,Z+1,0,0,oe,fe,ce.image[G]):t.texImage2D(34069+G,Z+1,de,oe,fe,ce.image[G])}}}E(y,pe)&&z(34067),re.__version=ne.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function ue(S,y,B,K,ne){const re=i.convert(B.format,B.encoding),xe=i.convert(B.type),A=_(B.internalFormat,re,xe,B.encoding);n.get(y).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,A,y.width,y.height,y.depth,0,re,xe,null):t.texImage2D(ne,0,A,y.width,y.height,0,re,xe,null)),t.bindFramebuffer(36160,S),Ne(y)?u.framebufferTexture2DMultisampleEXT(36160,K,ne,n.get(B).__webglTexture,0,Ge(y)):(ne===3553||ne>=34069&&ne<=34074)&&a.framebufferTexture2D(36160,K,ne,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(S,y,B){if(a.bindRenderbuffer(36161,S),y.depthBuffer&&!y.stencilBuffer){let K=33189;if(B||Ne(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===_n?K=36012:ne.type===gn&&(K=33190));const re=Ge(y);Ne(y)?u.renderbufferStorageMultisampleEXT(36161,re,K,y.width,y.height):a.renderbufferStorageMultisample(36161,re,K,y.width,y.height)}else a.renderbufferStorage(36161,K,y.width,y.height);a.framebufferRenderbuffer(36160,36096,36161,S)}else if(y.depthBuffer&&y.stencilBuffer){const K=Ge(y);B&&Ne(y)===!1?a.renderbufferStorageMultisample(36161,K,35056,y.width,y.height):Ne(y)?u.renderbufferStorageMultisampleEXT(36161,K,35056,y.width,y.height):a.renderbufferStorage(36161,34041,y.width,y.height),a.framebufferRenderbuffer(36160,33306,36161,S)}else{const K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<K.length;ne++){const re=K[ne],xe=i.convert(re.format,re.encoding),A=i.convert(re.type),T=_(re.internalFormat,xe,A,re.encoding),le=Ge(y);B&&Ne(y)===!1?a.renderbufferStorageMultisample(36161,le,T,y.width,y.height):Ne(y)?u.renderbufferStorageMultisampleEXT(36161,le,T,y.width,y.height):a.renderbufferStorage(36161,T,y.width,y.height)}}a.bindRenderbuffer(36161,null)}function Me(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,ne=Ge(y);if(y.depthTexture.format===yn)Ne(y)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ne):a.framebufferTexture2D(36160,36096,3553,K,0);else if(y.depthTexture.format===Zn)Ne(y)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ne):a.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function ye(S){const y=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Me(y.__webglFramebuffer,S)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=a.createRenderbuffer(),Re(y.__webglDepthbuffer[K],S,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=a.createRenderbuffer(),Re(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ke(S,y,B){const K=n.get(S);y!==void 0&&ue(K.__webglFramebuffer,S,S.texture,36064,3553),B!==void 0&&ye(S)}function We(S){const y=S.texture,B=n.get(S),K=n.get(y);S.addEventListener("dispose",J),S.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=y.version,o.memory.textures++);const ne=S.isWebGLCubeRenderTarget===!0,re=S.isWebGLMultipleRenderTargets===!0,xe=D(S)||r;if(ne){B.__webglFramebuffer=[];for(let A=0;A<6;A++)B.__webglFramebuffer[A]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),re)if(s.drawBuffers){const A=S.texture;for(let T=0,le=A.length;T<le;T++){const pe=n.get(A[T]);pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&S.samples>0&&Ne(S)===!1){const A=re?y:[y];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let T=0;T<A.length;T++){const le=A[T];B.__webglColorRenderbuffer[T]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[T]);const pe=i.convert(le.format,le.encoding),oe=i.convert(le.type),fe=_(le.internalFormat,pe,oe,le.encoding,S.isXRRenderTarget===!0),de=Ge(S);a.renderbufferStorageMultisample(36161,de,fe,S.width,S.height),a.framebufferRenderbuffer(36160,36064+T,36161,B.__webglColorRenderbuffer[T])}a.bindRenderbuffer(36161,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Re(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,K.__webglTexture),H(34067,y,xe);for(let A=0;A<6;A++)ue(B.__webglFramebuffer[A],S,y,36064,34069+A);E(y,xe)&&z(34067),t.unbindTexture()}else if(re){const A=S.texture;for(let T=0,le=A.length;T<le;T++){const pe=A[T],oe=n.get(pe);t.bindTexture(3553,oe.__webglTexture),H(3553,pe,xe),ue(B.__webglFramebuffer,S,pe,36064+T,3553),E(pe,xe)&&z(3553)}t.unbindTexture()}else{let A=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(r?A=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,K.__webglTexture),H(A,y,xe),ue(B.__webglFramebuffer,S,y,36064,A),E(y,xe)&&z(A),t.unbindTexture()}S.depthBuffer&&ye(S)}function qe(S){const y=D(S)||r,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0,ne=B.length;K<ne;K++){const re=B[K];if(E(re,y)){const xe=S.isWebGLCubeRenderTarget?34067:3553,A=n.get(re).__webglTexture;t.bindTexture(xe,A),z(xe),t.unbindTexture()}}}function rt(S){if(r&&S.samples>0&&Ne(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,K=S.height;let ne=16384;const re=[],xe=S.stencilBuffer?33306:36096,A=n.get(S),T=S.isWebGLMultipleRenderTargets===!0;if(T)for(let le=0;le<y.length;le++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),a.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let le=0;le<y.length;le++){re.push(36064+le),S.depthBuffer&&re.push(xe);const pe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(pe===!1&&(S.depthBuffer&&(ne|=256),S.stencilBuffer&&(ne|=1024)),T&&a.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[le]),pe===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),T){const oe=n.get(y[le]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,oe,0)}a.blitFramebuffer(0,0,B,K,0,0,B,K,ne,9728),m&&a.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),T)for(let le=0;le<y.length;le++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+le,36161,A.__webglColorRenderbuffer[le]);const pe=n.get(y[le]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),a.framebufferTexture2D(36009,36064+le,3553,pe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ge(S){return Math.min(d,S.samples)}function Ne(S){const y=n.get(S);return r&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(S){const y=o.render.frame;g.get(S)!==y&&(g.set(S,y),S.update())}function dt(S,y){const B=S.encoding,K=S.format,ne=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Bi||B!==Mn&&(B===Ue?r===!1?e.has("EXT_sRGB")===!0&&K===zt?(S.format=Bi,S.minFilter=Et,S.generateMipmaps=!1):y=Nr.sRGBToLinear(y):(K!==zt||ne!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),y}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=ie,this.rebindTextures=Ke,this.setupRenderTarget=We,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ne}function $h(a,e,t){const n=t.isWebGL2;function s(i,o=null){let r;if(i===vn)return 5121;if(i===ko)return 32819;if(i===Vo)return 32820;if(i===Uo)return 5120;if(i===Bo)return 5122;if(i===Pr)return 5123;if(i===Go)return 5124;if(i===gn)return 5125;if(i===_n)return 5126;if(i===hs)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(i===Ho)return 6406;if(i===zt)return 6408;if(i===qo)return 6409;if(i===Xo)return 6410;if(i===yn)return 6402;if(i===Zn)return 34041;if(i===Wo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===Bi)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(i===Yo)return 6403;if(i===jo)return 36244;if(i===$o)return 33319;if(i===Zo)return 33320;if(i===Ko)return 36249;if(i===ti||i===ni||i===si||i===ii)if(o===Ue)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ti)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ni)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===si)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ii)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ti)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ni)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===si)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ii)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===pa||i===ua||i===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jo)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===da||i===fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===da)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ma||i===ga||i===_a||i===ya||i===xa||i===va||i===Ma||i===Da||i===Sa||i===ba||i===Ca||i===Aa||i===Fa||i===wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ma)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ga)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_a)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===va)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ma)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Da)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ba)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wa)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ea)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return i===Yn?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:s}}class Zh extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kh={type:"move"};class Li{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const f of e.hand.values()){const h=t.getJointPose(f,n),x=this._getHandJoint(l,f);h!==null&&(x.matrix.fromArray(h.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=h.radius),x.visible=h!==null}const p=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=p.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Kh)))}return r!==null&&(r.visible=s!==null),c!==null&&(c.visible=i!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jh extends bt{constructor(e,t,n,s,i,o,r,c,l,p){if(p=p!==void 0?p:yn,p!==yn&&p!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===yn&&(n=gn),n===void 0&&p===Zn&&(n=Yn),super(null,s,i,o,r,c,p,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:pt,this.minFilter=c!==void 0?c:pt,this.flipY=!1,this.generateMipmaps=!1}}class Qh extends Fn{constructor(e,t){super();const n=this;let s=null,i=1,o=null,r="local-floor",c=null,l=null,p=null,d=null,u=null,m=null;const g=t.getContextAttributes();let f=null,h=null;const x=[],C=[],M=new Set,D=new Map,b=new Tt;b.layers.enable(1),b.viewport=new st;const E=new Tt;E.layers.enable(2),E.viewport=new st;const z=[b,E],_=new Zh;_.layers.enable(1),_.layers.enable(2);let F=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let U=x[V];return U===void 0&&(U=new Li,x[V]=U),U.getTargetRaySpace()},this.getControllerGrip=function(V){let U=x[V];return U===void 0&&(U=new Li,x[V]=U),U.getGripSpace()},this.getHand=function(V){let U=x[V];return U===void 0&&(U=new Li,x[V]=U),U.getHandSpace()};function Y(V){const U=C.indexOf(V.inputSource);if(U===-1)return;const ie=x[U];ie!==void 0&&ie.dispatchEvent({type:V.type,data:V.inputSource})}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",O);for(let V=0;V<x.length;V++){const U=C[V];U!==null&&(C[V]=null,x[V].disconnect(U))}F=null,R=null,e.setRenderTarget(f),u=null,d=null,p=null,s=null,h=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){i=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};u=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:u}),h=new Dn(u.framebufferWidth,u.framebufferHeight,{format:zt,type:vn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,ie=null,te=null;g.depth&&(te=g.stencil?35056:33190,U=g.stencil?Zn:yn,ie=g.stencil?Yn:gn);const ae={colorFormat:32856,depthFormat:te,scaleFactor:i};p=new XRWebGLBinding(s,t),d=p.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),h=new Dn(d.textureWidth,d.textureHeight,{format:zt,type:vn,depthTexture:new Jh(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(h);H.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await s.requestReferenceSpace(r),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let U=0;U<V.removed.length;U++){const ie=V.removed[U],te=C.indexOf(ie);te>=0&&(C[te]=null,x[te].disconnect(ie))}for(let U=0;U<V.added.length;U++){const ie=V.added[U];let te=C.indexOf(ie);if(te===-1){for(let H=0;H<x.length;H++)if(H>=C.length){C.push(ie),te=H;break}else if(C[H]===null){C[H]=ie,te=H;break}if(te===-1)break}const ae=x[te];ae&&ae.connect(ie)}}const I=new P,q=new P;function $(V,U,ie){I.setFromMatrixPosition(U.matrixWorld),q.setFromMatrixPosition(ie.matrixWorld);const te=I.distanceTo(q),ae=U.projectionMatrix.elements,H=ie.projectionMatrix.elements,Ae=ae[14]/(ae[10]-1),he=ae[14]/(ae[10]+1),_e=(ae[9]+1)/ae[5],ue=(ae[9]-1)/ae[5],Re=(ae[8]-1)/ae[0],Me=(H[8]+1)/H[0],ye=Ae*Re,Ke=Ae*Me,We=te/(-Re+Me),qe=We*-Re;U.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(qe),V.translateZ(We),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const rt=Ae+We,Ge=he+We,Ne=ye-qe,At=Ke+(te-qe),dt=_e*he/Ge*rt,S=ue*he/Ge*rt;V.projectionMatrix.makePerspective(Ne,At,dt,S,rt,Ge)}function Q(V,U){U===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(U.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.near=E.near=b.near=V.near,_.far=E.far=b.far=V.far,(F!==_.near||R!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),F=_.near,R=_.far);const U=V.parent,ie=_.cameras;Q(_,U);for(let ae=0;ae<ie.length;ae++)Q(ie[ae],U);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),V.matrix.copy(_.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const te=V.children;for(let ae=0,H=te.length;ae<H;ae++)te[ae].updateMatrixWorld(!0);ie.length===2?$(_,b,E):_.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(V){d!==null&&(d.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)},this.getPlanes=function(){return M};let X=null;function ee(V,U){if(l=U.getViewerPose(c||o),m=U,l!==null){const ie=l.views;u!==null&&(e.setRenderTargetFramebuffer(h,u.framebuffer),e.setRenderTarget(h));let te=!1;ie.length!==_.cameras.length&&(_.cameras.length=0,te=!0);for(let ae=0;ae<ie.length;ae++){const H=ie[ae];let Ae=null;if(u!==null)Ae=u.getViewport(H);else{const _e=p.getViewSubImage(d,H);Ae=_e.viewport,ae===0&&(e.setRenderTargetTextures(h,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(h))}let he=z[ae];he===void 0&&(he=new Tt,he.layers.enable(ae),he.viewport=new st,z[ae]=he),he.matrix.fromArray(H.transform.matrix),he.projectionMatrix.fromArray(H.projectionMatrix),he.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ae===0&&_.matrix.copy(he.matrix),te===!0&&_.cameras.push(he)}}for(let ie=0;ie<x.length;ie++){const te=C[ie],ae=x[ie];te!==null&&ae!==void 0&&ae.update(te,U,c||o)}if(X&&X(V,U),U.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let ie=null;for(const te of M)U.detectedPlanes.has(te)||(ie===null&&(ie=[]),ie.push(te));if(ie!==null)for(const te of ie)M.delete(te),D.delete(te),n.dispatchEvent({type:"planeremoved",data:te});for(const te of U.detectedPlanes)if(!M.has(te))M.add(te),D.set(te,U.lastChangedTime),n.dispatchEvent({type:"planeadded",data:te});else{const ae=D.get(te);te.lastChangedTime>ae&&(D.set(te,te.lastChangedTime),n.dispatchEvent({type:"planechanged",data:te}))}}m=null}const j=new qr;j.setAnimationLoop(ee),this.setAnimationLoop=function(V){X=V},this.dispose=function(){}}}function ed(a,e){function t(f,h){h.color.getRGB(f.fogColor.value,kr(a)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function n(f,h,x,C,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),p(f,h)):h.isMeshPhongMaterial?(s(f,h),l(f,h)):h.isMeshStandardMaterial?(s(f,h),d(f,h),h.isMeshPhysicalMaterial&&u(f,h,M)):h.isMeshMatcapMaterial?(s(f,h),m(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),g(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(i(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?r(f,h,x,C):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map),h.alphaMap&&(f.alphaMap.value=h.alphaMap),h.bumpMap&&(f.bumpMap.value=h.bumpMap,f.bumpScale.value=h.bumpScale,h.side===Lt&&(f.bumpScale.value*=-1)),h.displacementMap&&(f.displacementMap.value=h.displacementMap,f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap),h.normalMap&&(f.normalMap.value=h.normalMap,f.normalScale.value.copy(h.normalScale),h.side===Lt&&f.normalScale.value.negate()),h.specularMap&&(f.specularMap.value=h.specularMap),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const D=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*D}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity);let C;h.map?C=h.map:h.specularMap?C=h.specularMap:h.displacementMap?C=h.displacementMap:h.normalMap?C=h.normalMap:h.bumpMap?C=h.bumpMap:h.roughnessMap?C=h.roughnessMap:h.metalnessMap?C=h.metalnessMap:h.alphaMap?C=h.alphaMap:h.emissiveMap?C=h.emissiveMap:h.clearcoatMap?C=h.clearcoatMap:h.clearcoatNormalMap?C=h.clearcoatNormalMap:h.clearcoatRoughnessMap?C=h.clearcoatRoughnessMap:h.iridescenceMap?C=h.iridescenceMap:h.iridescenceThicknessMap?C=h.iridescenceThicknessMap:h.specularIntensityMap?C=h.specularIntensityMap:h.specularColorMap?C=h.specularColorMap:h.transmissionMap?C=h.transmissionMap:h.thicknessMap?C=h.thicknessMap:h.sheenColorMap?C=h.sheenColorMap:h.sheenRoughnessMap&&(C=h.sheenRoughnessMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),f.uvTransform.value.copy(C.matrix));let M;h.aoMap?M=h.aoMap:h.lightMap&&(M=h.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uv2Transform.value.copy(M.matrix))}function i(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function r(f,h,x,C){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*x,f.scale.value=C*.5,h.map&&(f.map.value=h.map),h.alphaMap&&(f.alphaMap.value=h.alphaMap),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let M;h.map?M=h.map:h.alphaMap&&(M=h.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix))}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map),h.alphaMap&&(f.alphaMap.value=h.alphaMap),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.roughness.value=h.roughness,f.metalness.value=h.metalness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function u(f,h,x){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),f.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Lt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap)}function m(f,h){h.matcap&&(f.matcap.value=h.matcap)}function g(f,h){f.referencePosition.value.copy(h.referencePosition),f.nearDistance.value=h.nearDistance,f.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function td(a,e,t,n){let s={},i={},o=[];const r=t.isWebGL2?a.getParameter(35375):0;function c(C,M){const D=M.program;n.uniformBlockBinding(C,D)}function l(C,M){let D=s[C.id];D===void 0&&(g(C),D=p(C),s[C.id]=D,C.addEventListener("dispose",h));const b=M.program;n.updateUBOMapping(C,b);const E=e.render.frame;i[C.id]!==E&&(u(C),i[C.id]=E)}function p(C){const M=d();C.__bindingPointIndex=M;const D=a.createBuffer(),b=C.__size,E=C.usage;return a.bindBuffer(35345,D),a.bufferData(35345,b,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,M,D),D}function d(){for(let C=0;C<r;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(C){const M=s[C.id],D=C.uniforms,b=C.__cache;a.bindBuffer(35345,M);for(let E=0,z=D.length;E<z;E++){const _=D[E];if(m(_,E,b)===!0){const F=_.__offset,R=Array.isArray(_.value)?_.value:[_.value];let Y=0;for(let J=0;J<R.length;J++){const O=R[J],I=f(O);typeof O=="number"?(_.__data[0]=O,a.bufferSubData(35345,F+Y,_.__data)):O.isMatrix3?(_.__data[0]=O.elements[0],_.__data[1]=O.elements[1],_.__data[2]=O.elements[2],_.__data[3]=O.elements[0],_.__data[4]=O.elements[3],_.__data[5]=O.elements[4],_.__data[6]=O.elements[5],_.__data[7]=O.elements[0],_.__data[8]=O.elements[6],_.__data[9]=O.elements[7],_.__data[10]=O.elements[8],_.__data[11]=O.elements[0]):(O.toArray(_.__data,Y),Y+=I.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,F,_.__data)}}a.bindBuffer(35345,null)}function m(C,M,D){const b=C.value;if(D[M]===void 0){if(typeof b=="number")D[M]=b;else{const E=Array.isArray(b)?b:[b],z=[];for(let _=0;_<E.length;_++)z.push(E[_].clone());D[M]=z}return!0}else if(typeof b=="number"){if(D[M]!==b)return D[M]=b,!0}else{const E=Array.isArray(D[M])?D[M]:[D[M]],z=Array.isArray(b)?b:[b];for(let _=0;_<E.length;_++){const F=E[_];if(F.equals(z[_])===!1)return F.copy(z[_]),!0}}return!1}function g(C){const M=C.uniforms;let D=0;const b=16;let E=0;for(let z=0,_=M.length;z<_;z++){const F=M[z],R={boundary:0,storage:0},Y=Array.isArray(F.value)?F.value:[F.value];for(let J=0,O=Y.length;J<O;J++){const I=Y[J],q=f(I);R.boundary+=q.boundary,R.storage+=q.storage}if(F.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=D,z>0){E=D%b;const J=b-E;E!==0&&J-R.boundary<0&&(D+=b-E,F.__offset=D)}D+=R.storage}return E=D%b,E>0&&(D+=b-E),C.__size=D,C.__cache={},this}function f(C){const M={boundary:0,storage:0};return typeof C=="number"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function h(C){const M=C.target;M.removeEventListener("dispose",h);const D=o.indexOf(M.__bindingPointIndex);o.splice(D,1),a.deleteBuffer(s[M.id]),delete s[M.id],delete i[M.id]}function x(){for(const C in s)a.deleteBuffer(s[C]);o=[],s={},i={}}return{bind:c,update:l,dispose:x}}function nd(){const a=Ws("canvas");return a.style.display="block",a}function Kr(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:nd(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,s=a.stencil!==void 0?a.stencil:!0,i=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=Kt,this.toneMappingExposure=1;const f=this;let h=!1,x=0,C=0,M=null,D=-1,b=null;const E=new st,z=new st;let _=null,F=e.width,R=e.height,Y=1,J=null,O=null;const I=new st(0,0,F,R),q=new st(0,0,F,R);let $=!1;const Q=new Wr;let X=!1,ee=!1,j=null;const V=new je,U=new Ce,ie=new P,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?Y:1}let H=t;function Ae(v,N){for(let k=0;k<v.length;k++){const L=v[k],W=e.getContext(L,N);if(W!==null)return W}return null}try{const v={alpha:!0,depth:n,stencil:s,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qi}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),H===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),H=Ae(N,v),H===null)throw Ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let he,_e,ue,Re,Me,ye,Ke,We,qe,rt,Ge,Ne,At,dt,S,y,B,K,ne,re,xe,A,T,le;function pe(){he=new du(H),_e=new ou(H,he,a),he.init(_e),A=new $h(H,he,_e),ue=new Yh(H,he,_e),Re=new gu,Me=new Rh,ye=new jh(H,he,ue,Me,_e,A,Re),Ke=new cu(f),We=new hu(f),qe=new Cl(H,_e),T=new au(H,he,qe,_e),rt=new fu(H,qe,Re,T),Ge=new vu(H,rt,qe,Re),ne=new xu(H,_e,ye),y=new lu(Me),Ne=new Ph(f,Ke,We,he,_e,T,y),At=new ed(f,Me),dt=new Nh,S=new kh(he,_e),K=new iu(f,Ke,We,ue,Ge,p,o),B=new Xh(f,Ge,_e),le=new td(H,Re,_e,ue),re=new ru(H,he,Re,_e),xe=new mu(H,he,Re,_e),Re.programs=Ne.programs,f.capabilities=_e,f.extensions=he,f.properties=Me,f.renderLists=dt,f.shadowMap=B,f.state=ue,f.info=Re}pe();const oe=new Qh(f,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const v=he.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=he.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(F,R,!1))},this.getSize=function(v){return v.set(F,R)},this.setSize=function(v,N,k){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=v,R=N,e.width=Math.floor(v*Y),e.height=Math.floor(N*Y),k!==!1&&(e.style.width=v+"px",e.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(F*Y,R*Y).floor()},this.setDrawingBufferSize=function(v,N,k){F=v,R=N,Y=k,e.width=Math.floor(v*k),e.height=Math.floor(N*k),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(I)},this.setViewport=function(v,N,k,L){v.isVector4?I.set(v.x,v.y,v.z,v.w):I.set(v,N,k,L),ue.viewport(E.copy(I).multiplyScalar(Y).floor())},this.getScissor=function(v){return v.copy(q)},this.setScissor=function(v,N,k,L){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,N,k,L),ue.scissor(z.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(v){ue.setScissorTest($=v)},this.setOpaqueSort=function(v){J=v},this.setTransparentSort=function(v){O=v},this.getClearColor=function(v){return v.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(v=!0,N=!0,k=!0){let L=0;v&&(L|=16384),N&&(L|=256),k&&(L|=1024),H.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),dt.dispose(),S.dispose(),Me.dispose(),Ke.dispose(),We.dispose(),Ge.dispose(),T.dispose(),le.dispose(),Ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",me),j&&(j.dispose(),j=null),Ie.stop()};function fe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const v=Re.autoReset,N=B.enabled,k=B.autoUpdate,L=B.needsUpdate,W=B.type;pe(),Re.autoReset=v,B.enabled=N,B.autoUpdate=k,B.needsUpdate=L,B.type=W}function Fe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function we(v){const N=v.target;N.removeEventListener("dispose",we),Oe(N)}function Oe(v){w(v),Me.remove(v)}function w(v){const N=Me.get(v).programs;N!==void 0&&(N.forEach(function(k){Ne.releaseProgram(k)}),v.isShaderMaterial&&Ne.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,k,L,W,ge){N===null&&(N=te);const ve=W.isMesh&&W.matrixWorld.determinant()<0,Se=eo(v,N,k,L,W);ue.setMaterial(L,ve);let be=k.index,Pe=1;L.wireframe===!0&&(be=rt.getWireframeAttribute(k),Pe=2);const Ee=k.drawRange,Te=k.attributes.position;let ke=Ee.start*Pe,yt=(Ee.start+Ee.count)*Pe;ge!==null&&(ke=Math.max(ke,ge.start*Pe),yt=Math.min(yt,(ge.start+ge.count)*Pe)),be!==null?(ke=Math.max(ke,0),yt=Math.min(yt,be.count)):Te!=null&&(ke=Math.max(ke,0),yt=Math.min(yt,Te.count));const Ht=yt-ke;if(Ht<0||Ht===1/0)return;T.setup(W,L,Se,k,be);let rn,Ve=re;if(be!==null&&(rn=qe.get(be),Ve=xe,Ve.setIndex(rn)),W.isMesh)L.wireframe===!0?(ue.setLineWidth(L.wireframeLinewidth*ae()),Ve.setMode(1)):Ve.setMode(4);else if(W.isLine){let Le=L.linewidth;Le===void 0&&(Le=1),ue.setLineWidth(Le*ae()),W.isLineSegments?Ve.setMode(1):W.isLineLoop?Ve.setMode(2):Ve.setMode(3)}else W.isPoints?Ve.setMode(0):W.isSprite&&Ve.setMode(4);if(W.isInstancedMesh)Ve.renderInstances(ke,Ht,W.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Zs=Math.min(k.instanceCount,Le);Ve.renderInstances(ke,Ht,Zs)}else Ve.render(ke,Ht)},this.compile=function(v,N){function k(L,W,ge){L.transparent===!0&&L.side===ys?(L.side=Lt,L.needsUpdate=!0,Ft(L,W,ge),L.side=sn,L.needsUpdate=!0,Ft(L,W,ge),L.side=ys):Ft(L,W,ge)}u=S.get(v),u.init(),g.push(u),v.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights(f.physicallyCorrectLights),v.traverse(function(L){const W=L.material;if(W)if(Array.isArray(W))for(let ge=0;ge<W.length;ge++){const ve=W[ge];k(ve,v,L)}else k(W,v,L)}),g.pop(),u=null};let G=null;function Z(v){G&&G(v)}function ce(){Ie.stop()}function me(){Ie.start()}const Ie=new qr;Ie.setAnimationLoop(Z),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(v){G=v,oe.setAnimationLoop(v),v===null?Ie.stop():Ie.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",me),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(f,v,N,M),u=S.get(v,g.length),u.init(),g.push(u),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(V),ee=this.localClippingEnabled,X=y.init(this.clippingPlanes,ee,N),d=dt.get(v,m.length),d.init(),m.push(d),Je(v,N,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(J,O),X===!0&&y.beginShadows();const k=u.state.shadowsArray;if(B.render(k,v,N),X===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(d,v),u.setupLights(f.physicallyCorrectLights),N.isArrayCamera){const L=N.cameras;for(let W=0,ge=L.length;W<ge;W++){const ve=L[W];it(d,v,ve,ve.viewport)}}else it(d,v,N);M!==null&&(ye.updateMultisampleRenderTarget(M),ye.updateRenderTargetMipmap(M)),v.isScene===!0&&v.onAfterRender(f,v,N),T.resetDefaultState(),D=-1,b=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Je(v,N,k,L){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Q.intersectsSprite(v)){L&&ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(V);const ve=Ge.update(v),Se=v.material;Se.visible&&d.push(v,ve,Se,k,ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Re.render.frame&&(v.skeleton.update(),v.skeleton.frame=Re.render.frame),!v.frustumCulled||Q.intersectsObject(v))){L&&ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(V);const ve=Ge.update(v),Se=v.material;if(Array.isArray(Se)){const be=ve.groups;for(let Pe=0,Ee=be.length;Pe<Ee;Pe++){const Te=be[Pe],ke=Se[Te.materialIndex];ke&&ke.visible&&d.push(v,ve,ke,k,ie.z,Te)}}else Se.visible&&d.push(v,ve,Se,k,ie.z,null)}}const ge=v.children;for(let ve=0,Se=ge.length;ve<Se;ve++)Je(ge[ve],N,k,L)}function it(v,N,k,L){const W=v.opaque,ge=v.transmissive,ve=v.transparent;u.setupLightsView(k),ge.length>0&&an(W,N,k),L&&ue.viewport(E.copy(L)),W.length>0&&Be(W,N,k),ge.length>0&&Be(ge,N,k),ve.length>0&&Be(ve,N,k),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function an(v,N,k){const L=_e.isWebGL2;j===null&&(j=new Dn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?hs:vn,minFilter:us,samples:L&&i===!0?4:0})),f.getDrawingBufferSize(U),L?j.setSize(U.x,U.y):j.setSize(Gi(U.x),Gi(U.y));const W=f.getRenderTarget();f.setRenderTarget(j),f.clear();const ge=f.toneMapping;f.toneMapping=Kt,Be(v,N,k),f.toneMapping=ge,ye.updateMultisampleRenderTarget(j),ye.updateRenderTargetMipmap(j),f.setRenderTarget(W)}function Be(v,N,k){const L=N.isScene===!0?N.overrideMaterial:null;for(let W=0,ge=v.length;W<ge;W++){const ve=v[W],Se=ve.object,be=ve.geometry,Pe=L===null?ve.material:L,Ee=ve.group;Se.layers.test(k.layers)&&Vt(Se,N,k,be,Pe,Ee)}}function Vt(v,N,k,L,W,ge){v.onBeforeRender(f,N,k,L,W,ge),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(f,N,k,L,v,ge),W.transparent===!0&&W.side===ys?(W.side=Lt,W.needsUpdate=!0,f.renderBufferDirect(k,N,L,W,v,ge),W.side=sn,W.needsUpdate=!0,f.renderBufferDirect(k,N,L,W,v,ge),W.side=ys):f.renderBufferDirect(k,N,L,W,v,ge),v.onAfterRender(f,N,k,L,W,ge)}function Ft(v,N,k){N.isScene!==!0&&(N=te);const L=Me.get(v),W=u.state.lights,ge=u.state.shadowsArray,ve=W.state.version,Se=Ne.getParameters(v,W.state,ge,N,k),be=Ne.getProgramCacheKey(Se);let Pe=L.programs;L.environment=v.isMeshStandardMaterial?N.environment:null,L.fog=N.fog,L.envMap=(v.isMeshStandardMaterial?We:Ke).get(v.envMap||L.environment),Pe===void 0&&(v.addEventListener("dispose",we),Pe=new Map,L.programs=Pe);let Ee=Pe.get(be);if(Ee!==void 0){if(L.currentProgram===Ee&&L.lightsStateVersion===ve)return Qi(v,Se),Ee}else Se.uniforms=Ne.getUniforms(v),v.onBuild(k,Se,f),v.onBeforeCompile(Se,f),Ee=Ne.acquireProgram(Se,be),Pe.set(be,Ee),L.uniforms=Se.uniforms;const Te=L.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=y.uniform),Qi(v,Se),L.needsLights=no(v),L.lightsStateVersion=ve,L.needsLights&&(Te.ambientLightColor.value=W.state.ambient,Te.lightProbe.value=W.state.probe,Te.directionalLights.value=W.state.directional,Te.directionalLightShadows.value=W.state.directionalShadow,Te.spotLights.value=W.state.spot,Te.spotLightShadows.value=W.state.spotShadow,Te.rectAreaLights.value=W.state.rectArea,Te.ltc_1.value=W.state.rectAreaLTC1,Te.ltc_2.value=W.state.rectAreaLTC2,Te.pointLights.value=W.state.point,Te.pointLightShadows.value=W.state.pointShadow,Te.hemisphereLights.value=W.state.hemi,Te.directionalShadowMap.value=W.state.directionalShadowMap,Te.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Te.spotShadowMap.value=W.state.spotShadowMap,Te.spotLightMatrix.value=W.state.spotLightMatrix,Te.spotLightMap.value=W.state.spotLightMap,Te.pointShadowMap.value=W.state.pointShadowMap,Te.pointShadowMatrix.value=W.state.pointShadowMatrix);const ke=Ee.getUniforms(),yt=Hs.seqWithValue(ke.seq,Te);return L.currentProgram=Ee,L.uniformsList=yt,Ee}function Qi(v,N){const k=Me.get(v);k.outputEncoding=N.outputEncoding,k.instancing=N.instancing,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function eo(v,N,k,L,W){N.isScene!==!0&&(N=te),ye.resetTextureUnits();const ge=N.fog,ve=L.isMeshStandardMaterial?N.environment:null,Se=M===null?f.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Mn,be=(L.isMeshStandardMaterial?We:Ke).get(L.envMap||ve),Pe=L.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ee=!!L.normalMap&&!!k.attributes.tangent,Te=!!k.morphAttributes.position,ke=!!k.morphAttributes.normal,yt=!!k.morphAttributes.color,Ht=L.toneMapped?f.toneMapping:Kt,rn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ve=rn!==void 0?rn.length:0,Le=Me.get(L),Zs=u.state.lights;if(X===!0&&(ee===!0||v!==b)){const xt=v===b&&L.id===D;y.setState(L,v,xt)}let Qe=!1;L.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Zs.state.version||Le.outputEncoding!==Se||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==be||L.fog===!0&&Le.fog!==ge||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==y.numPlanes||Le.numIntersection!==y.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==Ee||Le.morphTargets!==Te||Le.morphNormals!==ke||Le.morphColors!==yt||Le.toneMapping!==Ht||_e.isWebGL2===!0&&Le.morphTargetsCount!==Ve)&&(Qe=!0):(Qe=!0,Le.__version=L.version);let on=Le.currentProgram;Qe===!0&&(on=Ft(L,N,W));let ea=!1,ts=!1,Ks=!1;const ot=on.getUniforms(),ln=Le.uniforms;if(ue.useProgram(on.program)&&(ea=!0,ts=!0,Ks=!0),L.id!==D&&(D=L.id,ts=!0),ea||b!==v){if(ot.setValue(H,"projectionMatrix",v.projectionMatrix),_e.logarithmicDepthBuffer&&ot.setValue(H,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),b!==v&&(b=v,ts=!0,Ks=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const xt=ot.map.cameraPosition;xt!==void 0&&xt.setValue(H,ie.setFromMatrixPosition(v.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ot.setValue(H,"isOrthographic",v.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||W.isSkinnedMesh)&&ot.setValue(H,"viewMatrix",v.matrixWorldInverse)}if(W.isSkinnedMesh){ot.setOptional(H,W,"bindMatrix"),ot.setOptional(H,W,"bindMatrixInverse");const xt=W.skeleton;xt&&(_e.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),ot.setValue(H,"boneTexture",xt.boneTexture,ye),ot.setValue(H,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Js=k.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&_e.isWebGL2===!0)&&ne.update(W,k,L,on),(ts||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,ot.setValue(H,"receiveShadow",W.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(ln.envMap.value=be,ln.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ts&&(ot.setValue(H,"toneMappingExposure",f.toneMappingExposure),Le.needsLights&&to(ln,Ks),ge&&L.fog===!0&&At.refreshFogUniforms(ln,ge),At.refreshMaterialUniforms(ln,L,Y,R,j),Hs.upload(H,Le.uniformsList,ln,ye)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Hs.upload(H,Le.uniformsList,ln,ye),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ot.setValue(H,"center",W.center),ot.setValue(H,"modelViewMatrix",W.modelViewMatrix),ot.setValue(H,"normalMatrix",W.normalMatrix),ot.setValue(H,"modelMatrix",W.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const xt=L.uniformsGroups;for(let Qs=0,so=xt.length;Qs<so;Qs++)if(_e.isWebGL2){const ta=xt[Qs];le.update(ta,on),le.bind(ta,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function to(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function no(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(v,N,k){Me.get(v.texture).__webglTexture=N,Me.get(v.depthTexture).__webglTexture=k;const L=Me.get(v);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=k===void 0,L.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,N){const k=Me.get(v);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,k=0){M=v,x=N,C=k;let L=!0,W=null,ge=!1,ve=!1;if(v){const be=Me.get(v);be.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),L=!1):be.__webglFramebuffer===void 0?ye.setupRenderTarget(v):be.__hasExternalTextures&&ye.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ve=!0);const Ee=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(W=Ee[N],ge=!0):_e.isWebGL2&&v.samples>0&&ye.useMultisampledRTT(v)===!1?W=Me.get(v).__webglMultisampledFramebuffer:W=Ee,E.copy(v.viewport),z.copy(v.scissor),_=v.scissorTest}else E.copy(I).multiplyScalar(Y).floor(),z.copy(q).multiplyScalar(Y).floor(),_=$;if(ue.bindFramebuffer(36160,W)&&_e.drawBuffers&&L&&ue.drawBuffers(v,W),ue.viewport(E),ue.scissor(z),ue.setScissorTest(_),ge){const be=Me.get(v.texture);H.framebufferTexture2D(36160,36064,34069+N,be.__webglTexture,k)}else if(ve){const be=Me.get(v.texture),Pe=N||0;H.framebufferTextureLayer(36160,36064,be.__webglTexture,k||0,Pe)}D=-1},this.readRenderTargetPixels=function(v,N,k,L,W,ge,ve){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){ue.bindFramebuffer(36160,Se);try{const be=v.texture,Pe=be.format,Ee=be.type;if(Pe!==zt&&A.convert(Pe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=Ee===hs&&(he.has("EXT_color_buffer_half_float")||_e.isWebGL2&&he.has("EXT_color_buffer_float"));if(Ee!==vn&&A.convert(Ee)!==H.getParameter(35738)&&!(Ee===_n&&(_e.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-L&&k>=0&&k<=v.height-W&&H.readPixels(N,k,L,W,A.convert(Pe),A.convert(Ee),ge)}finally{const be=M!==null?Me.get(M).__webglFramebuffer:null;ue.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(v,N,k=0){const L=Math.pow(2,-k),W=Math.floor(N.image.width*L),ge=Math.floor(N.image.height*L);ye.setTexture2D(N,0),H.copyTexSubImage2D(3553,k,0,0,v.x,v.y,W,ge),ue.unbindTexture()},this.copyTextureToTexture=function(v,N,k,L=0){const W=N.image.width,ge=N.image.height,ve=A.convert(k.format),Se=A.convert(k.type);ye.setTexture2D(k,0),H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment),N.isDataTexture?H.texSubImage2D(3553,L,v.x,v.y,W,ge,ve,Se,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(3553,L,v.x,v.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):H.texSubImage2D(3553,L,v.x,v.y,ve,Se,N.image),L===0&&k.generateMipmaps&&H.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(v,N,k,L,W=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=v.max.x-v.min.x+1,ve=v.max.y-v.min.y+1,Se=v.max.z-v.min.z+1,be=A.convert(L.format),Pe=A.convert(L.type);let Ee;if(L.isData3DTexture)ye.setTexture3D(L,0),Ee=32879;else if(L.isDataArrayTexture)ye.setTexture2DArray(L,0),Ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,L.flipY),H.pixelStorei(37441,L.premultiplyAlpha),H.pixelStorei(3317,L.unpackAlignment);const Te=H.getParameter(3314),ke=H.getParameter(32878),yt=H.getParameter(3316),Ht=H.getParameter(3315),rn=H.getParameter(32877),Ve=k.isCompressedTexture?k.mipmaps[0]:k.image;H.pixelStorei(3314,Ve.width),H.pixelStorei(32878,Ve.height),H.pixelStorei(3316,v.min.x),H.pixelStorei(3315,v.min.y),H.pixelStorei(32877,v.min.z),k.isDataTexture||k.isData3DTexture?H.texSubImage3D(Ee,W,N.x,N.y,N.z,ge,ve,Se,be,Pe,Ve.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ee,W,N.x,N.y,N.z,ge,ve,Se,be,Ve.data)):H.texSubImage3D(Ee,W,N.x,N.y,N.z,ge,ve,Se,be,Pe,Ve),H.pixelStorei(3314,Te),H.pixelStorei(32878,ke),H.pixelStorei(3316,yt),H.pixelStorei(3315,Ht),H.pixelStorei(32877,rn),W===0&&L.generateMipmaps&&H.generateMipmap(Ee),ue.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?ye.setTextureCube(v,0):v.isData3DTexture?ye.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ye.setTexture2DArray(v,0):ye.setTexture2D(v,0),ue.unbindTexture()},this.resetState=function(){x=0,C=0,M=null,ue.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class sd extends Kr{}sd.prototype.isWebGL1Renderer=!0;class id extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Jr extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hr=new P,dr=new P,fr=new je,Pi=new Xi,Bs=new gs;class ad extends ht{constructor(e=new _t,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,i=t.count;s<i;s++)hr.fromBufferAttribute(t,s-1),dr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=hr.distanceTo(dr);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=i,e.ray.intersectsSphere(Bs)===!1)return;fr.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(fr);const r=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new P,p=new P,d=new P,u=new P,m=this.isLineSegments?2:1,g=n.index,h=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),C=Math.min(g.count,o.start+o.count);for(let M=x,D=C-1;M<D;M+=m){const b=g.getX(M),E=g.getX(M+1);if(l.fromBufferAttribute(h,b),p.fromBufferAttribute(h,E),Pi.distanceSqToSegment(l,p,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),C=Math.min(h.count,o.start+o.count);for(let M=x,D=C-1;M<D;M+=m){if(l.fromBufferAttribute(h,M),p.fromBufferAttribute(h,M+1),Pi.distanceSqToSegment(l,p,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=s.length;i<o;i++){const r=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}}const mr=new P,gr=new P;class rd extends ad{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,i=t.count;s<i;s+=2)mr.fromBufferAttribute(t,s),gr.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mr.distanceTo(gr);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $i extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _r=new je,Vi=new Xi,Gs=new gs,ks=new P;class od extends ht{constructor(e=new _t,t=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=i,e.ray.intersectsSphere(Gs)===!1)return;_r.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(_r);const r=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=u,f=m;g<f;g++){const h=l.getX(g);ks.fromBufferAttribute(d,h),yr(ks,h,c,s,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=u,f=m;g<f;g++)ks.fromBufferAttribute(d,g),yr(ks,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=s.length;i<o;i++){const r=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}}function yr(a,e,t,n,s,i,o){const r=Vi.distanceSqToPoint(a);if(r<t){const c=new P;Vi.closestPointToPoint(a,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;i.push({distance:l,distanceToRay:Math.sqrt(r),point:c,index:e,face:null,object:o})}}class Zi extends _t{constructor(e=1,t=32,n=16,s=0,i=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:i,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+r,Math.PI);let l=0;const p=[],d=new P,u=new P,m=[],g=[],f=[],h=[];for(let x=0;x<=n;x++){const C=[],M=x/n;let D=0;x==0&&o==0?D=.5/t:x==n&&c==Math.PI&&(D=-.5/t);for(let b=0;b<=t;b++){const E=b/t;d.x=-e*Math.cos(s+E*i)*Math.sin(o+M*r),d.y=e*Math.cos(o+M*r),d.z=e*Math.sin(s+E*i)*Math.sin(o+M*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),f.push(u.x,u.y,u.z),h.push(E+D,1-M),C.push(l++)}p.push(C)}for(let x=0;x<n;x++)for(let C=0;C<t;C++){const M=p[x][C+1],D=p[x][C],b=p[x+1][C],E=p[x+1][C+1];(x!==0||o>0)&&m.push(M,D,E),(x!==n-1||c<Math.PI)&&m.push(D,b,E)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(h,2))}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xr{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ld extends rd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new _t;s.setAttribute("position",new mt(t,3)),s.setAttribute("color",new mt(n,3));const i=new Jr({vertexColors:!0,toneMapped:!1});super(s,i),this.type="AxesHelper"}setColors(e,t,n){const s=new ze,i=this.geometry.attributes.color.array;return s.set(e),s.toArray(i,0),s.toArray(i,3),s.set(t),s.toArray(i,6),s.toArray(i,9),s.set(n),s.toArray(i,12),s.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qi);const cd=gt({__name:"Renderer",props:{camera:null,autoResize:{type:Boolean,default:!0},onBeforeRender:{type:Function,default:()=>{}},antialias:{type:Boolean,default:!1}},setup(a,{expose:e}){const t=a;let n=null;const s=[];let i=null;const o=Ye([]),r=Ye([]),c=Ye();let l=Date.now();const p=1e3/30;Ct(()=>t.camera,g=>d(g));const d=g=>{if(g){const f=o.value.find(h=>h.name===g);f===void 0&&(i=null),i=f}else i=o.value[0]};qs(()=>{var f;n=new Kr({canvas:c.value,antialias:t.antialias}),n.setSize(1,1),d(t.camera),new ResizeObserver(h=>{h.forEach(x=>{n&&t.autoResize&&n.setSize(x.contentRect.width,x.contentRect.height)})}).observe((f=c.value)==null?void 0:f.parentElement),u()});function u(){requestAnimationFrame(u);const g=Date.now(),f=g-l;if(!(f<p)){if(l=g-f%p,t.onBeforeRender&&t.onBeforeRender(),r.value.length>0&&i)for(const h of r.value)h.value!==null&&(h.value.object.uuid===i.uuid?(h.value.enabled=!0,h.value.update()):h.value.enabled=!1);if(i&&n)for(const h of s)n.render(h,i)}}function m(g){}return Ct(t,()=>void 0),Gt("canvas",c),Gt("addCamera",g=>o.value.push(g)),Gt("addScene",g=>s.push(g)),Gt("addControls",g=>r.value.push(g)),e({three:n}),(g,f)=>(Hi(),Wi(Cr,null,[An(g.$slots,"default"),kt("canvas",{ref_key:"canvas",ref:c},null,512)],64))}}),pd=gt({__name:"Scene",props:{background:null},setup(a,{expose:e}){const t=a,n=new id;Gt("scene",n),ut("addScene")(n);function s(i){i.background&&(n.background=new ze(i.background))}return s(t),Ct(t,()=>s(t)),e({three:n}),(i,o)=>An(i.$slots,"default")}}),Cn=a=>a===void 0?new P(0,0,0):"x"in a?new P(a.x,a.y,a.z):new P(a[0],a[1],a[2]),ud=a=>a===void 0?[0,0,0]:"x"in a?[a.x,a.y,a.z]:a,Ki=(a,e)=>{if(a.position){const t=Cn(a.position);e.position.set(t.x,t.y,t.z)}Ct(()=>a.position,()=>{if(a.position){const t=Cn(a.position);e.position.set(t.x,t.y,t.z)}})},Ji=(a,e)=>{if(a.rotation){const t=Cn(a.rotation);e.rotation.setFromVector3(t)}Ct(()=>a.rotation,()=>{if(a.rotation){const t=Cn(a.rotation);e.rotation.setFromVector3(t),e.updateMatrixWorld()}})},Qr=(a,e)=>{if(a.scale){const t=Cn(a.scale);e.scale.set(t.x,t.y,t.z)}Ct(()=>a.scale,()=>{if(a.scale){const t=Cn(a.scale);e.scale.set(t.x,t.y,t.z)}})},hd={name:"PerspectiveCamera"},dd=gt({...hd,props:{name:{default:""},up:{default:()=>[0,1,0]}},setup(a,{expose:e}){const t=a,n=new Tt(75,window.innerWidth/window.innerHeight*1e3,.1,1e3);n.position.set(10,10,10),n.lookAt(0,0,0),n.updateProjectionMatrix(),ut("addCamera")(n);const s=ut("canvas");qs(()=>{t.name&&(n.name=t.name),new ResizeObserver(r=>{r.forEach(c=>{n.aspect=c.contentRect.width/c.contentRect.height,n.updateProjectionMatrix()})}).observe(s.value)});function i(o){const r=Cn(o.up);n.up.set(r.x,r.y,r.z)}return i(t),Ct(t,()=>i(t)),Gt("parentCamera",n),e({three:n}),(o,r)=>An(o.$slots,"default")}}),fd={name:"OrthographicCamera"},md=gt({...fd,props:{name:null},setup(a,{expose:e}){const t=a,n=new Xr(-30,30,30,-30,.1,1e3);return n.position.set(10,10,10),n.lookAt(0,0,0),n.updateProjectionMatrix(),ut("addCamera")(n),qs(()=>{t.name&&(n.name=t.name)}),Gt("parentCamera",n),e({three:n}),(s,i)=>An(s.$slots,"default")}}),vr={type:"change"},Ri={type:"start"},Mr={type:"end"};class gd extends Fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",dt),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vr),n.update(),i=s.NONE},this.update=function(){const A=new P,T=new Sn().setFromUnitVectors(e.up,new P(0,1,0)),le=T.clone().invert(),pe=new P,oe=new Sn,fe=2*Math.PI;return function(){const Fe=n.object.position;A.copy(Fe).sub(n.target),A.applyQuaternion(T),r.setFromVector3(A),n.autoRotate&&i===s.NONE&&F(z()),n.enableDamping?(r.theta+=c.theta*n.dampingFactor,r.phi+=c.phi*n.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let we=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(we)&&isFinite(Oe)&&(we<-Math.PI?we+=fe:we>Math.PI&&(we-=fe),Oe<-Math.PI?Oe+=fe:Oe>Math.PI&&(Oe-=fe),we<=Oe?r.theta=Math.max(we,Math.min(Oe,r.theta)):r.theta=r.theta>(we+Oe)/2?Math.max(we,r.theta):Math.min(Oe,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=l,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),A.setFromSpherical(r),A.applyQuaternion(le),Fe.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),p.set(0,0,0)),l=1,d||pe.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(vr),pe.copy(n.object.position),oe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",rt),n.domElement.removeEventListener("wheel",At),n.domElement.removeEventListener("pointermove",We),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",dt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=s.NONE;const o=1e-6,r=new xr,c=new xr;let l=1;const p=new P;let d=!1;const u=new Ce,m=new Ce,g=new Ce,f=new Ce,h=new Ce,x=new Ce,C=new Ce,M=new Ce,D=new Ce,b=[],E={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function F(A){c.theta-=A}function R(A){c.phi-=A}const Y=function(){const A=new P;return function(le,pe){A.setFromMatrixColumn(pe,0),A.multiplyScalar(-le),p.add(A)}}(),J=function(){const A=new P;return function(le,pe){n.screenSpacePanning===!0?A.setFromMatrixColumn(pe,1):(A.setFromMatrixColumn(pe,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(le),p.add(A)}}(),O=function(){const A=new P;return function(le,pe){const oe=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;A.copy(fe).sub(n.target);let de=A.length();de*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*le*de/oe.clientHeight,n.object.matrix),J(2*pe*de/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),J(pe*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(A){u.set(A.clientX,A.clientY)}function Q(A){C.set(A.clientX,A.clientY)}function X(A){f.set(A.clientX,A.clientY)}function ee(A){m.set(A.clientX,A.clientY),g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const T=n.domElement;F(2*Math.PI*g.x/T.clientHeight),R(2*Math.PI*g.y/T.clientHeight),u.copy(m),n.update()}function j(A){M.set(A.clientX,A.clientY),D.subVectors(M,C),D.y>0?I(_()):D.y<0&&q(_()),C.copy(M),n.update()}function V(A){h.set(A.clientX,A.clientY),x.subVectors(h,f).multiplyScalar(n.panSpeed),O(x.x,x.y),f.copy(h),n.update()}function U(A){A.deltaY<0?q(_()):A.deltaY>0&&I(_()),n.update()}function ie(A){let T=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),T=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),T=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),T=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),T=!0;break}T&&(A.preventDefault(),n.update())}function te(){if(b.length===1)u.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),T=.5*(b[0].pageY+b[1].pageY);u.set(A,T)}}function ae(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),T=.5*(b[0].pageY+b[1].pageY);f.set(A,T)}}function H(){const A=b[0].pageX-b[1].pageX,T=b[0].pageY-b[1].pageY,le=Math.sqrt(A*A+T*T);C.set(0,le)}function Ae(){n.enableZoom&&H(),n.enablePan&&ae()}function he(){n.enableZoom&&H(),n.enableRotate&&te()}function _e(A){if(b.length==1)m.set(A.pageX,A.pageY);else{const le=xe(A),pe=.5*(A.pageX+le.x),oe=.5*(A.pageY+le.y);m.set(pe,oe)}g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const T=n.domElement;F(2*Math.PI*g.x/T.clientHeight),R(2*Math.PI*g.y/T.clientHeight),u.copy(m)}function ue(A){if(b.length===1)h.set(A.pageX,A.pageY);else{const T=xe(A),le=.5*(A.pageX+T.x),pe=.5*(A.pageY+T.y);h.set(le,pe)}x.subVectors(h,f).multiplyScalar(n.panSpeed),O(x.x,x.y),f.copy(h)}function Re(A){const T=xe(A),le=A.pageX-T.x,pe=A.pageY-T.y,oe=Math.sqrt(le*le+pe*pe);M.set(0,oe),D.set(0,Math.pow(M.y/C.y,n.zoomSpeed)),I(D.y),C.copy(M)}function Me(A){n.enableZoom&&Re(A),n.enablePan&&ue(A)}function ye(A){n.enableZoom&&Re(A),n.enableRotate&&_e(A)}function Ke(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",We),n.domElement.addEventListener("pointerup",qe)),K(A),A.pointerType==="touch"?S(A):Ge(A))}function We(A){n.enabled!==!1&&(A.pointerType==="touch"?y(A):Ne(A))}function qe(A){ne(A),b.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",We),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(Mr),i=s.NONE}function rt(A){ne(A)}function Ge(A){let T;switch(A.button){case 0:T=n.mouseButtons.LEFT;break;case 1:T=n.mouseButtons.MIDDLE;break;case 2:T=n.mouseButtons.RIGHT;break;default:T=-1}switch(T){case wn.DOLLY:if(n.enableZoom===!1)return;Q(A),i=s.DOLLY;break;case wn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;X(A),i=s.PAN}else{if(n.enableRotate===!1)return;$(A),i=s.ROTATE}break;case wn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;$(A),i=s.ROTATE}else{if(n.enablePan===!1)return;X(A),i=s.PAN}break;default:i=s.NONE}i!==s.NONE&&n.dispatchEvent(Ri)}function Ne(A){switch(i){case s.ROTATE:if(n.enableRotate===!1)return;ee(A);break;case s.DOLLY:if(n.enableZoom===!1)return;j(A);break;case s.PAN:if(n.enablePan===!1)return;V(A);break}}function At(A){n.enabled===!1||n.enableZoom===!1||i!==s.NONE||(A.preventDefault(),n.dispatchEvent(Ri),U(A),n.dispatchEvent(Mr))}function dt(A){n.enabled===!1||n.enablePan===!1||ie(A)}function S(A){switch(re(A),b.length){case 1:switch(n.touches.ONE){case En.ROTATE:if(n.enableRotate===!1)return;te(),i=s.TOUCH_ROTATE;break;case En.PAN:if(n.enablePan===!1)return;ae(),i=s.TOUCH_PAN;break;default:i=s.NONE}break;case 2:switch(n.touches.TWO){case En.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),i=s.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(),i=s.TOUCH_DOLLY_ROTATE;break;default:i=s.NONE}break;default:i=s.NONE}i!==s.NONE&&n.dispatchEvent(Ri)}function y(A){switch(re(A),i){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(A),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ue(A),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(A),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(A),n.update();break;default:i=s.NONE}}function B(A){n.enabled!==!1&&A.preventDefault()}function K(A){b.push(A)}function ne(A){delete E[A.pointerId];for(let T=0;T<b.length;T++)if(b[T].pointerId==A.pointerId){b.splice(T,1);return}}function re(A){let T=E[A.pointerId];T===void 0&&(T=new Ce,E[A.pointerId]=T),T.set(A.pageX,A.pageY)}function xe(A){const T=A.pointerId===b[0].pointerId?b[1]:b[0];return E[T.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",rt),n.domElement.addEventListener("wheel",At,{passive:!1}),this.update()}}const _d={name:"OrbitControls",render:()=>null},Dr=gt({..._d,props:{name:null},setup(a,{expose:e}){const t=a,n=Ye(null);ut("addControls")(n);const s=ut("parentCamera"),i=ut("canvas");return Ct(i,()=>{n.value=new gd(s,i.value)}),e({three:n.value}),{props:t,three:n,camera:s,canvas:i}}}),Sr=gt({__name:"Mesh",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(a,{expose:e}){const t=a,n=ut("scene"),s=new _t,i=new js,o=new Zt(s,i);return n.add(o),Ki(t,o),Ji(t,o),Qr(t,o),Gt("mesh",o),e({three:o}),(r,c)=>An(r.$slots,"default")}}),yd=gt({__name:"Points",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(a,{expose:e}){const t=a,n=ut("scene"),s=new _t,i=new $i({color:"red",sizeAttenuation:!1,size:2}),o=new od(s,i);return n.add(o),Ki(t,o),Ji(t,o),Qr(t,o),Gt("mesh",o),e({three:o}),(r,c)=>An(r.$slots,"default")}}),xd=gt({__name:"AxesHelper",props:{size:{default:1},position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(a,{expose:e}){const t=a,n=ut("scene"),s=new ld(t.size);return n.add(s),Ki(t,s),Ji(t,s),Gt("mesh",s),e({three:s}),(i,o)=>An(i.$slots,"default")}}),vd={name:"BoxGeometry",render:()=>null},Md=gt({...vd,props:{width:{default:1},height:{default:1},depth:{default:1},widthSegments:{default:1},heightSegments:{default:1},depthSegments:{default:1}},setup(a,{expose:e}){const t=a,n=ut("mesh");function s(o,r,c,l,p,d){return new Qn(o,r,c,l,p,d)}const i=Ye(s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments));return n.geometry=i.value,Ct(t,()=>{n.geometry=s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments),i.value=n.geometry}),e({three:i}),{props:t,mesh:n,makeBox:s,three:i}}}),Dd={name:"BufferGeometry",render:()=>null},Sd=gt({...Dd,props:{vertices:{default:()=>[]},faces:{default:()=>[]}},setup(a,{expose:e}){const t=a,n=ut("mesh");function s(o,r){const c=new _t,l=new Float32Array(o.length*3);for(let p=0;p<o.length;p++){const d=ud(o[p]);l[p*3]=d[0],l[p*3+1]=d[1],l[p*3+2]=d[2]}return c.setAttribute("position",new Ot(l,3)),c}const i=Ye(s(t.vertices,t.faces));return n.geometry=i.value,Ct(t,()=>{n.geometry=s(t.vertices),i.value=n.geometry}),e({three:i}),{props:t,mesh:n,makeGeometry:s,three:i}}}),bd={name:"SphereGeometry",render:()=>null},Cd=gt({...bd,props:{radius:{default:1},widthSegments:{default:8},heightSegments:{default:6},phiStart:{default:0},phiLength:{default:2*Math.PI},thetaStart:{default:0},thetaLength:{default:Math.PI}},setup(a,{expose:e}){const t=a,n=ut("mesh");function s(o,r,c,l,p,d,u){return new Zi(o,r,c,l,p,d,u)}const i=Ye(s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength));return n.geometry=i.value,Ct(t,()=>{n.geometry=s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength),i.value=n.geometry}),e({three:i}),{props:t,mesh:n,makeSphere:s,three:i}}}),Ad={name:"MeshBasicMaterial",render:()=>null},br=gt({...Ad,props:{color:{default:16777215},side:{default:sn}},setup(a,{expose:e}){const t=a,n=ut("mesh"),s=Ye(new js);n.material=s.value;function i(o){o.color&&(s.value.color=new ze(o.color)),o.side&&(s.value.side=o.side)}return i(t),Ct(t,()=>i(t)),e({three:s}),{props:t,mesh:n,three:s,applyProps:i}}}),Fd={name:"PointsMaterial",render:()=>null},wd=gt({...Fd,props:{color:{default:16777215},sizeAttenuation:{type:Boolean,default:!0},size:{default:1}},setup(a,{expose:e}){const t=a,n=ut("mesh"),s=Ye(new $i({color:t.color,sizeAttenuation:t.sizeAttenuation,size:t.size}));n.material=s.value;function i(o){o.color&&(s.value.color=new ze(o.color)),o.size&&(s.value.size=o.size),o.sizeAttenuation!==void 0&&(s.value.sizeAttenuation=o.sizeAttenuation)}return i(t),Ct(t,()=>i(t)),e({three:s}),{props:t,mesh:n,three:s,applyProps:i}}}),Ed=kt("option",{value:"cam1"},"PerspectiveCamera",-1),Td=kt("option",{value:"cam2"},"OrthographicCamera",-1),Ld=[Ed,Td],Pd={class:"rendererParent"},Rd=gt({__name:"Test",setup(a){const e=Ye([0,0,0]),t=Ye([0,0,0]),n=Ye([]),s=Ye(1),i=Ye(1),o=Ye(1),r=new P(5,-1,0),c=Ye("rgb(255,0,0)"),l=Ye("rgb(255,0,0)");qs(()=>{let u=24,m=2,g=1;for(let f=0;f<u;f++){const h=m*Math.cos(2*Math.PI/u*f),x=g*Math.sin(2*Math.PI/u*f),C=m*Math.cos(2*Math.PI/u*(f+1)),M=g*Math.sin(2*Math.PI/u*(f+1));n.value.push([h,x,0]),n.value.push([C,M,0]),n.value.push([0,0,0])}}),window.setInterval(()=>{const u=Date.now()/1e3;c.value=`rgb(${Math.round(Math.cos(u)*50+100)}, ${Math.round((Math.sin(u)+1)/2*200+50)}, 100)`,l.value=`rgb(${Math.round(Math.cos(u)*50+200)}, ${Math.round(Math.sin(u)*50+100)}, 50)`,o.value=Math.cos(u)+2,i.value=Math.sin(u*5)*.5+1,s.value=Math.sin(u)+1,e.value=[Math.cos(u),Math.sin(u),Math.sin(u)],t.value=[Math.cos(u)*Math.PI,0,0]},10);const p=Ye("cam1"),d=Ye({});return(u,m)=>(Hi(),Wi(Cr,null,[io(kt("select",{"onUpdate:modelValue":m[0]||(m[0]=g=>p.value=g),class:"my-5"},Ld,512),[[ao,p.value]]),kt("div",Pd,[nt(et(cd),{ref_key:"renderer",ref:d,camera:p.value,antialias:!0},{default:cn(()=>[nt(et(dd),{name:"cam1",up:[0,0,1]},{default:cn(()=>[nt(et(Dr))]),_:1}),nt(et(md),{name:"cam2"},{default:cn(()=>[nt(et(Dr))]),_:1}),nt(et(pd),{background:"#eeeeee"},{default:cn(()=>[nt(et(yd),{position:et(r)},{default:cn(()=>[nt(et(wd),{color:c.value,"size-attenuation":!1,size:4},null,8,["color"]),nt(et(Cd),{radius:o.value,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),nt(et(Sr),{position:e.value,rotation:t.value},{default:cn(()=>[nt(et(br),{color:"blue"}),nt(et(Md),{width:s.value+1,height:s.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation"]),nt(et(Sr),{position:[-5,0,0],scale:[i.value,1,1]},{default:cn(()=>[nt(et(br),{color:l.value,side:et(Xs)},null,8,["color","side"]),nt(et(Sd),{vertices:n.value},null,8,["vertices"])]),_:1},8,["scale"]),nt(et(xd),{size:3})]),_:1})]),_:1},8,["camera"])])],64))}});const Id=kt("h1",{id:"drie",tabindex:"-1"},[Ar("Drie "),kt("a",{class:"header-anchor",href:"#drie","aria-hidden":"true"},"#")],-1),Nd=kt("p",null,"Drie is a Vue 3 component library for THREE.js made with TypeScript and Composition API.",-1),zd=kt("h2",{id:"example",tabindex:"-1"},[Ar("Example "),kt("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#")],-1),Od=ro("",2),Gd=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]}],"relativePath":"index.md"}'),Ud={name:"index.md"},kd=Object.assign(Ud,{setup(a){return(e,t)=>(Hi(),Wi("div",null,[Id,Nd,zd,nt(Rd),Od]))}});export{Gd as __pageData,kd as default};
