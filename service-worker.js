/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fbad532ec5a83b5de92dc8d5612bf18d"
  },
  {
    "url": "accumulate/index.html",
    "revision": "c442555b04f7ed6cdcf7c05d3a137973"
  },
  {
    "url": "algorithm/index.html",
    "revision": "99e2e45454bdbdc15a06576d259f0595"
  },
  {
    "url": "assets/css/0.styles.c9120bc4.css",
    "revision": "7140dfb84c8b6d8186cfe9d28409ec75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/3.89fcf22a.js",
    "revision": "557d3371f2625809a6382c3a9e72d3bb"
  },
  {
    "url": "assets/js/4.8cafdc3f.js",
    "revision": "d5d04af15d7165426268725e7578db7b"
  },
  {
    "url": "assets/js/5.4d542eb4.js",
    "revision": "4dbd31d074104aee19c7c28a0b27eace"
  },
  {
    "url": "assets/js/6.7f238636.js",
    "revision": "90366a2cea5b45368e691699eafa6363"
  },
  {
    "url": "assets/js/7.50fa8059.js",
    "revision": "1d916ff3bcfcfdac2a1aab38bd443d24"
  },
  {
    "url": "assets/js/8.9826a9ea.js",
    "revision": "61568b6432785bce582f2999c3107f33"
  },
  {
    "url": "assets/js/app.18ac5100.js",
    "revision": "a23ed202e2cbd8090c597c095f7291a8"
  },
  {
    "url": "guide.html",
    "revision": "de338dd268d3b8d3f87179f9378e481b"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "64e406d60557012027d682d20530b571"
  },
  {
    "url": "others/index.html",
    "revision": "45a48069dd6772fe635ca9da3a245915"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
