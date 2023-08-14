"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","fa79800318b4b9ec180cc0b962a29ba3"],["static/css/main.1221214b.css","00c49fce36ca9a678675d597d180583c"],["static/js/main.2d39d571.js","b1cae7c67e133ffd79c73e0bd1a6188a"],["https://amisdex.github.io/amis-exchange-www/static/media/create-order-example.28bba4c8.png","28bba4c8ef344907e81df865451b6d53"],["https://amisdex.github.io/amis-exchange-www/static/media/demo-logo.fce5e158.svg","fce5e1586993a13b406af15096b52392"],["https://amisdex.github.io/amis-exchange-www/static/media/ethereum_icon.c2cefd0b.svg","c2cefd0b3bbdf99250c5c6ccaa10a563"],["https://amisdex.github.io/amis-exchange-www/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["https://amisdex.github.io/amis-exchange-www/exchange/static/media/amis-logo-3df69858.png","3df6985810e6e9be631e6bbb0c454029"],["https://amisdex.github.io/amis-exchange-www/static/media/metamask.79bd7c91.png","79bd7c910a765f7dde63fb6b9a27ca18"],["static/media/notification.0b4ac1dc.ttf","0b4ac1dc75df35e169b70d7719afe4cc"],["static/media/notification.5bee74ca.svg","5bee74caefdf9d0a834915f6c8eeb259"],["static/media/notification.651771e1.woff","651771e1df95c807c99608188d0a4287"],["static/media/notification.c0d3c94c.eot","c0d3c94cd6112550c51d7d1ed13b9da1"],["https://amisdex.github.io/amis-exchange-www/static/media/test-logo.50e54a8d.svg","50e54a8d42dd9f19ab7c11d1724c402c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/exchange/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
