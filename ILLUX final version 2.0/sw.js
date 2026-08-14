var CACHE='illux-v1';
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(caches.open(CACHE).then(function(c){
    return c.match(e.request).then(function(r){
      return r||fetch(e.request).then(function(res){
        var copy=res.clone();caches.open(CACHE).then(function(cc){cc.put(e.request,copy);});
        return res;
      });
    });
  }).catch(function(){return caches.match('./');}));
});