'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2a111ddc8be4fe0b3e91362ec1a45dc7",
"version.json": "2dda721ee13c83394e5972dfb7e709fe",
"splash/img/light-2x.png": "03dae60eecf0ab89069a8faed67d6c96",
"splash/img/dark-4x.png": "6cdf0cba742726fc41d019d74cfb584b",
"splash/img/light-3x.png": "8d4994f5cfe2e0dba36d7a001d48c85b",
"splash/img/dark-3x.png": "8d4994f5cfe2e0dba36d7a001d48c85b",
"splash/img/light-4x.png": "6cdf0cba742726fc41d019d74cfb584b",
"splash/img/dark-2x.png": "03dae60eecf0ab89069a8faed67d6c96",
"splash/img/dark-1x.png": "75f4a829f0781fc72aff46e2c12106bf",
"splash/img/light-1x.png": "75f4a829f0781fc72aff46e2c12106bf",
"index.html": "248f8ef2a5a0cb6d91b7157c0d4954bc",
"/": "248f8ef2a5a0cb6d91b7157c0d4954bc",
"main.dart.js": "2e96586a0c7fae0c8ed55aa00217383d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "13116615bf539f9d5ca4f77be481dac8",
".git/config": "9f80d23f66bece84887e7581d008ffd0",
".git/objects/95/9f66b26374b5496394462ec9f05b75d68919ae": "a30e7035844a7fed7e818923685c4ee7",
".git/objects/50/11b1854cf392a384b35218d56868dd2f4b855b": "57ba572d8e7909c3837f15dfec7791ec",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "c6481266cd43569bbf1fd327de61d518",
".git/objects/9e/40d8949b9ef174f09cd0e82713a9024c27aafb": "f2cd21ea1d1a7b633d12b2231b5f3aa5",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/0e/10f09d1fb89718c7abada508bd7cebc1bbbb59": "4c35616f8037468778e8e6bd7293e199",
".git/objects/05/6cf9f053bfd37635c8d362d97727ab56dbaa95": "ab8690d9bc6ff0469ebb343a56aecb36",
".git/objects/d0/1d16825a1e48805541c68ac85282583a477f6b": "64e05b08d6c0f20e17d25e84a1ad7bd4",
".git/objects/be/02ab8a10aa662cf2bb442b096a0a35c6b15a41": "46e3fd6e4819bc5d8a67d1b8b444fd8e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/da/ffadc77af330d0e794de7b53d9582a71298aca": "91c207dbe0554da3d48c1cb8dbc531c2",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c0/ae7da59c24bffab3f142ca9a4355142738472c": "6aa5f27039e90f1b16b8df3879d1bd65",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e3/6cc1dff9729d02e875dea715ef5b1f25380f40": "d96c5ceb2fc9eaccc3cb43289c282ed1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/e4/22e03c057236ae7e5c6aab1134aedbea5f1c20": "3fe758f7c522ac1bc2be89f7ab95f15f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/27/73c4cdc4fb7fde85ceb9ae1b1258bb3daca63e": "5349c7107e47c2e87889c48bca89386a",
".git/objects/11/3eb2589d39a37407e94805e0ae3407b113ab06": "20a98c0019fd9a2234b2e096606ff4b9",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/73/462cff50bdf3eb095a72b56e9ba1a0c1c62451": "7af1812ea9ebb8b0a55cc2dc8759e7b4",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "aca2a5f0f7653f7daaa2f2f087619491",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/75/6b6676d83b0219f3b708f1633b22481d17edfc": "c17deda0b9453b46df5b09e40489cbbf",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "906b1c9948bd3b9da3101f9806d8c76a",
".git/objects/2f/ecb4876f18f69746407c0c6b5258a71e47823d": "75874f90109149995d41ed9acec37b26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/25a4cece7459818ff627abf288373b3c278cc0": "121197e622c801408d283454835705ce",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "56cfb4ffb173db5bb8bdfdfa21c81603",
".git/objects/9a/ee66d4ea3de1687cca654bb4c82255e1c5e728": "c9bb03ed695322eebe3961cf2805ab88",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/09/4d1d511f4438715ae970011c3956475239f747": "1b14a63cb277e9c9a6d8ae926d299844",
".git/objects/09/1036041da91fc49a6fb808d044017222c02e2a": "7a20510a88fb335071ce8ed57f81e652",
".git/objects/31/80a76973487001bcfdaa616bb872835de26dca": "2118f6f0ec8af5886d51a7b75776b171",
".git/objects/62/9de40af568b2543b51465571fc3421e2fce4cb": "907bf31d60721d36c60265ce26011e8e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "c6bf20636c0343ae6654d1679710c101",
".git/objects/5e/39251c0c5e9abc925b09fbf214d7a8161f249e": "5eba1ba3d29cf778c1fb60282b33dd0b",
".git/objects/08/8226f1894e6af5260fd53e72bde6cd5c3b80d7": "1f61fd1af779db3ed3f679f14861c342",
".git/objects/52/e738c7217467a907cb7ad39c171cab5f130636": "d7fceb3162bd116e4e2339285b43d20e",
".git/objects/0a/e0da18c44a7c5ed973d305e41c9afb44578893": "4e96170a805a51fd6689d897b4b24240",
".git/objects/90/dc6af0812549cba3ccf6d03bc16190d6b97074": "9632540755ed53199685733bb5c62edf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/a9/9545185f6c104497e61b8151876bc385bffd57": "343f0e60d6cb2113344ab3596c30cba1",
".git/objects/af/0b9f51477fe1cbd57e570b66e9fce3c3010c03": "33fba91a62247d5f77a456a4c6e799db",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b0/df6eb4974c94aae2c687dacebe47510a1541ea": "822574725bb620dc09594746865033d8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/bdac1da8285618f64e4dffad850fab6b17a9a0": "30e3b4193b2ea8cf5c4326c51ddbf985",
".git/objects/cd/cd1d754d1d0298b91339e0bca2a5a1736ecfa2": "661259e59b2f4371e8e10452d176a939",
".git/objects/f7/cb065a4c28b5a9c04c4526d81a972a10da8b10": "c005c2fed54efef1865bf65c05cc5818",
".git/objects/f6/2fa78404b4488a6abd415dccf778408f7fda13": "913c9d663036c40e3f3ba37378e8b188",
".git/objects/ce/878f5a47d4bf42d274f7325be5ba60f3e839c7": "4b66537da296640ecb9a6718fce73b97",
".git/objects/1b/80ac72f98e8e3bc1815ba3bc0303c4b216ba9e": "bd67c4a3db8ce14a17f006164eca6062",
".git/objects/77/634e1940545ea71c1efc399c8882cde961c883": "b4a89d1ea667aff5b723b248ff583cdb",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/2e/7719773e2f3b2cc5c178ebda4c294d05af4762": "fd1d7853c01313390dec88fd01b1c71e",
".git/objects/22/8ce12ac4f35bcbfa237d68c669d284fef813a2": "048ded74187cc1c702d86a48ab6176d3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fbbdd5792e3d4cbc310c2c00e615fcb5",
".git/logs/refs/heads/master": "fbbdd5792e3d4cbc310c2c00e615fcb5",
".git/logs/refs/remotes/origin/master": "9c0263b52c8100f8b1465d8d708276c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1064b7cc5aed0965f4ac80803f29a1b3",
".git/refs/remotes/origin/master": "1064b7cc5aed0965f4ac80803f29a1b3",
".git/index": "fe561946b4e0692deebad34bc7adda79",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/FETCH_HEAD": "73c360d1195e9586ec25fceac886df12",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "e7abe341c39ea8ac163b2329edd29bb6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
