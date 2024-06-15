'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "94eab47ac8386ae953092f400395d25f",
"version.json": "2dda721ee13c83394e5972dfb7e709fe",
"splash/img/light-2x.png": "03dae60eecf0ab89069a8faed67d6c96",
"splash/img/dark-4x.png": "6cdf0cba742726fc41d019d74cfb584b",
"splash/img/light-3x.png": "8d4994f5cfe2e0dba36d7a001d48c85b",
"splash/img/dark-3x.png": "8d4994f5cfe2e0dba36d7a001d48c85b",
"splash/img/light-4x.png": "6cdf0cba742726fc41d019d74cfb584b",
"splash/img/dark-2x.png": "03dae60eecf0ab89069a8faed67d6c96",
"splash/img/dark-1x.png": "75f4a829f0781fc72aff46e2c12106bf",
"splash/img/light-1x.png": "75f4a829f0781fc72aff46e2c12106bf",
"index.html": "f894ad36205fce3ea2e9a0172b5f0ace",
"/": "f894ad36205fce3ea2e9a0172b5f0ace",
"main.dart.js": "ce22912195306c869a66be47a22737de",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "13116615bf539f9d5ca4f77be481dac8",
".git/config": "9f80d23f66bece84887e7581d008ffd0",
".git/objects/95/9f66b26374b5496394462ec9f05b75d68919ae": "a30e7035844a7fed7e818923685c4ee7",
".git/objects/59/6558c763a338793ef97b142cd46c381bf0c009": "c220fe468d229023f992f73b21300686",
".git/objects/3e/edcdb17ccb45315b7ce9265727d48ebaafe288": "7e6aa4643bc5ceb1c4a9ff27f309095c",
".git/objects/50/11b1854cf392a384b35218d56868dd2f4b855b": "57ba572d8e7909c3837f15dfec7791ec",
".git/objects/68/91c221b1b2a8bf1a02a6592d3b1c8587bfa5f4": "04af8551ea170bf011603c82ffb62cb9",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "c6481266cd43569bbf1fd327de61d518",
".git/objects/9e/40d8949b9ef174f09cd0e82713a9024c27aafb": "f2cd21ea1d1a7b633d12b2231b5f3aa5",
".git/objects/35/f66a38bbc1698923bf42fa6ec33f5a6b3bd728": "e52dce8b0b4c9eb47d9af13f9aca3ef5",
".git/objects/3d/58d0001282cf9d834ab7e98cb0893461a3e530": "1090249c1aa5bcf6e5afee04ed75972c",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/0e/15a70433841d0c9c6fb7cabacce8e709417c47": "c5e2eaaa7c16b3345c65cf8cf6f40904",
".git/objects/0e/10f09d1fb89718c7abada508bd7cebc1bbbb59": "4c35616f8037468778e8e6bd7293e199",
".git/objects/60/b996b3cfe0c33558764ff19bd85d6a2c85681a": "deb6b3ebce14d535df27adbe8632e382",
".git/objects/60/7c1e21357916ab5bab262ad5a7615cebcd8eaa": "d5d54788ff08bb4da0b3be3709eba5af",
".git/objects/05/6cf9f053bfd37635c8d362d97727ab56dbaa95": "ab8690d9bc6ff0469ebb343a56aecb36",
".git/objects/05/14bf980c8c37495fcf4456217d7d56c6841f0a": "a9a97db140f7a5da9cfc2e2b0540cb27",
".git/objects/d7/9cbfd8efc82a4cbcb014e18730421d03b4936e": "f57ebc662d548c42d2144064c2ebd806",
".git/objects/d0/1d16825a1e48805541c68ac85282583a477f6b": "64e05b08d6c0f20e17d25e84a1ad7bd4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/da/ffadc77af330d0e794de7b53d9582a71298aca": "91c207dbe0554da3d48c1cb8dbc531c2",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/a2/127781601e640950a2c6fa67f9910b25f91190": "38894a07c0d68a0e1ae366b0a908adc4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/96c169a1a413da35a03d35a44125e9d82224a1": "b1dd13871f49e58f35fab2449cb15a5f",
".git/objects/d8/b5ae89a9549eee277e5c08129102faf0761935": "5325e34283a75a12f2f9077e36bd55e4",
".git/objects/e2/a78189953727584ec635fb22d298583deef511": "937fe24e8ac79adb5a1894076174bb2b",
".git/objects/f4/abbbbbd0762f27e4f257b54850602570dbade4": "dd6b6216efc1bc8a7ec8d9caa2016af4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c0/ae7da59c24bffab3f142ca9a4355142738472c": "6aa5f27039e90f1b16b8df3879d1bd65",
".git/objects/ee/232f73b5d7d46f3480a344bfa030525dac1fdd": "581dc3bae97d1681b31be752278cfa07",
".git/objects/ee/d9661361df3382b9c299a1ea7d5f2e26b2daad": "7cb8029ed33a1524ec8007ae156e7e9b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/c9/f31330d2d80c08b415728fb2a21b353deb7ca2": "60f95f08c89fd030e6729e054f5b99e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e3/6cc1dff9729d02e875dea715ef5b1f25380f40": "d96c5ceb2fc9eaccc3cb43289c282ed1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/e4/22e03c057236ae7e5c6aab1134aedbea5f1c20": "3fe758f7c522ac1bc2be89f7ab95f15f",
".git/objects/fe/cfe27077550901d8c8d4f18300c0dda1380eaa": "c8f36f217de0faaaf9949b60f9b33bdf",
".git/objects/ec/a079ac6322f4644fcc8ec383676ad9d1fb82a2": "bd3f67cf8069159da490e0ff59b7be7c",
".git/objects/ec/44f39ffe906a0a5adbe32aadbe3d68af38f2c6": "d4947608c6d88f50b7d311ced57dcfbc",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/27/73c4cdc4fb7fde85ceb9ae1b1258bb3daca63e": "5349c7107e47c2e87889c48bca89386a",
".git/objects/27/14fd95f80771ba7010f47f2f8ca4f89803bc18": "6a41fdb1020bc4b9e39d45c0e060abc3",
".git/objects/pack/pack-063f687d5ecefb84b2ddd434e40ee74942af9b8b.pack": "695079d865b02aad3e83307d151b051b",
".git/objects/pack/pack-063f687d5ecefb84b2ddd434e40ee74942af9b8b.rev": "3a50665027db200a89f7e9b938b1148b",
".git/objects/pack/pack-063f687d5ecefb84b2ddd434e40ee74942af9b8b.idx": "3a2b60bbaba3f11dcddadbae8106ba2c",
".git/objects/11/3eb2589d39a37407e94805e0ae3407b113ab06": "20a98c0019fd9a2234b2e096606ff4b9",
".git/objects/7d/697db1cb143a2367579d4f2bcb8d7486b481b0": "50e0b42d0b11ae182d1e0330715e07ba",
".git/objects/7c/908e3d81d54458b921aeabf7b3a4fd48b3e583": "ab3f8345f6ea759a7f4aa93c094fd661",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/89/0061e1c447c20842a678b4a6eaef5a58de0f01": "1a50e1bb5e10ab75670f87f21031107e",
".git/objects/87/53751ddd97ffcf4b2773a8822172277d3c2fea": "6d020f4aa9e68b2172480611d029b900",
".git/objects/7b/243de92407926cb731c258ce34cb27bc0fd4bb": "faed3435e299aef4e8ecd93cc29c31b4",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "aca2a5f0f7653f7daaa2f2f087619491",
".git/objects/8a/462433b8ab869f20df771f089f87b0ac40037b": "00138f8fcc1572fcc5ee504453647da3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/4473231b6951825570d6652b7f08080ac077b1": "263eab619248516302bcc7c3b6d8f499",
".git/objects/75/6b6676d83b0219f3b708f1633b22481d17edfc": "c17deda0b9453b46df5b09e40489cbbf",
".git/objects/81/6196ba0be08fe3915ac50375a9796e46c56f3b": "d61e236e52512bff1cbf68086a723790",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "906b1c9948bd3b9da3101f9806d8c76a",
".git/objects/2a/a6b1448ad386dc4eabc04d2b8e77ca28af746f": "0d17e197c361ccf362b5276b7a6476f4",
".git/objects/2f/ecb4876f18f69746407c0c6b5258a71e47823d": "75874f90109149995d41ed9acec37b26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/00/54474245a6f8c375884eac65d3021e5b6a8f15": "41f7d53698debe4f8904de6d0170d531",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "56cfb4ffb173db5bb8bdfdfa21c81603",
".git/objects/9a/d0c5d18e24ec8177b9f4843fbe3a00ec94fbce": "1c5cae601942308eeea502dbf40aa805",
".git/objects/9a/ee66d4ea3de1687cca654bb4c82255e1c5e728": "c9bb03ed695322eebe3961cf2805ab88",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/09/4d1d511f4438715ae970011c3956475239f747": "1b14a63cb277e9c9a6d8ae926d299844",
".git/objects/31/80a76973487001bcfdaa616bb872835de26dca": "2118f6f0ec8af5886d51a7b75776b171",
".git/objects/65/2bee9dc08ecc98a894b0b1996b9d03d342f2d9": "04cfb2738e6185da2741761644556224",
".git/objects/62/5a1082d45bcda211b66770d5539bb99cf52fbd": "b218247db27a54e8a64d68e5dc46f42d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "c6bf20636c0343ae6654d1679710c101",
".git/objects/98/e02ec6920bbfa9e372882d26b5cf152467094c": "91d18c517fdec67a7d14b0cfa1f30dba",
".git/objects/3f/d65cc7e3c477b79d54933a33e283b82cf1b777": "bffbc4d5832f76c780e966e590ab4143",
".git/objects/30/db1df12238f3188501200247718f907e79ac40": "ab549a65ab87eb88880ac9036aa1b450",
".git/objects/5e/39251c0c5e9abc925b09fbf214d7a8161f249e": "5eba1ba3d29cf778c1fb60282b33dd0b",
".git/objects/37/696a9e9c5bbfe3daab192e09f0d68e766d8971": "e8ecd1ec4aade99e444ad1c91fbbc694",
".git/objects/37/6eba0a5a2f31bbff4694c190948f6bcdac5b2e": "862bb4664965a6245901962c779571e8",
".git/objects/08/8226f1894e6af5260fd53e72bde6cd5c3b80d7": "1f61fd1af779db3ed3f679f14861c342",
".git/objects/6d/8995424544d53c5d64dd5f54cb99001e5950a6": "08afce4d4402e0950ae475a874bb2302",
".git/objects/39/ae3caa2947fca2038098cef059a2c1715ab345": "3dd6638ea79067659548a78a8431a13a",
".git/objects/52/e738c7217467a907cb7ad39c171cab5f130636": "d7fceb3162bd116e4e2339285b43d20e",
".git/objects/97/2fa023aa4f1fff41c8738719e0ebb340fcbced": "330611fe23e2d135cbab6a26e0f12df6",
".git/objects/0a/13db0ae16600b7390f74c9491afa4061a79236": "2adc2362f71cc212236f8e0d85d901f0",
".git/objects/90/dc6af0812549cba3ccf6d03bc16190d6b97074": "9632540755ed53199685733bb5c62edf",
".git/objects/d3/329c02fe62af1f53015c5f501d28bd96a0367c": "8e91f645ce9bec4ca4e1e4c234fcc092",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/dceba265a5df235b59d06c73089d7c9e029583": "892baece0bab1f69d8e8b422404fbf20",
".git/objects/d4/bb386d1621900e6b51401f495bdb72728229e1": "520b9f7cbeb54aa66e1812a54dbf8b2a",
".git/objects/a0/a855aaff70dec16e01e8db60568ed71d574e22": "0b33fe6587c0dfdfd3e6a42f06ef2735",
".git/objects/a7/f48213248c27f84b0a3991dc6c447c46f5bffa": "5d59d8b11a1c3e5e4435b4d0c898e65f",
".git/objects/b6/350d1712c2d7019e22661d70a80c9730ce48f5": "8e8f0faf0f9e7150bb295f4dafa56d4e",
".git/objects/a9/ad6a6f2fac6ba3910f320b3f932fa00e041665": "099f75888e94072864c30546e9e8ef7c",
".git/objects/aa/8ae3afe377d968abb2d0f4002ab9cdbdf094a3": "c3f2052883efc578c6d84ff9d58889af",
".git/objects/af/e3059230842dbbab6b9dac282d63fa15f85f5f": "d250daf1ccc0bfd6902a2fcc58b13375",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/5e834407cb10ddaeb88015be8c8c99e4112c0c": "d101b86a9bde7e1f09ce2de749b227e5",
".git/objects/a8/039dd2bf4de04a502f0d92634b335ac10f3498": "621a14ca1ef67b5734f65b9f9ffd6382",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/a1/bdac1da8285618f64e4dffad850fab6b17a9a0": "30e3b4193b2ea8cf5c4326c51ddbf985",
".git/objects/cd/cd1d754d1d0298b91339e0bca2a5a1736ecfa2": "661259e59b2f4371e8e10452d176a939",
".git/objects/cc/015dca6349756528a36844e5107f8b02b399b9": "3595b143b0379268c7548d9ec472b688",
".git/objects/e6/8d104619ab2b0ed764156c156edfa45a23bf94": "9a8509145d2fe515d3d4f5c0d8c972fc",
".git/objects/e6/9945cc445acf879b70bd3c7b59d07adea42ed3": "28ad35498b64b207a69a28ed6c1ee8f3",
".git/objects/f9/34df2b423c48b5b86d11b7fb449654346e1cf3": "c09c5ed2a54ab2541ffd5757a67907cf",
".git/objects/f0/6cbc9c34419b1eb5a9f3bca65c2e80e72d7b60": "c1b813994efedb12feb01285cfac1a08",
".git/objects/e8/5f8b0fb79cbda8b28a31965219133b7b66b17f": "0c1f512903279379ee70bd3f1388ff60",
".git/objects/f6/2fa78404b4488a6abd415dccf778408f7fda13": "913c9d663036c40e3f3ba37378e8b188",
".git/objects/f6/6428d2972d992545a4ac4a72b4583b52cf5879": "6255590c4296c0cd75c8e7af7d9ab9e5",
".git/objects/e9/378bc9fa42d73afc91444afa8d31e0c88d4c88": "689d266725b3249d054e0b480b3da294",
".git/objects/e9/2bdec190c9dadcdbeda6361bdb8584ba78b0ab": "a8d825ff09bd0fe60939b05af5f9e0f9",
".git/objects/f1/642da08d18d4aac6a492666fd1998857a9292f": "6eb54656addb992772a34e907c101783",
".git/objects/cb/5ac22ee8113455d22431d669769e5c9b7931e5": "bd3ee65bc0fd5a74c4b9f56db87e3233",
".git/objects/f8/56b698221f621f4ca26e06b949747259e6ccda": "5c2a149a7a5692a3fc9eb05bb3340e80",
".git/objects/ce/878f5a47d4bf42d274f7325be5ba60f3e839c7": "4b66537da296640ecb9a6718fce73b97",
".git/objects/ce/0e80e319b9ff1b54fcaa0013ce37067a97c392": "12fffc4d0d10f4aa31dc4a968a340c8a",
".git/objects/2d/33ae8dffbb2ae212a881797d05e8719d3fe75b": "8c18bba7bdd13df8d5e19db221170fc4",
".git/objects/1b/80ac72f98e8e3bc1815ba3bc0303c4b216ba9e": "bd67c4a3db8ce14a17f006164eca6062",
".git/objects/77/634e1940545ea71c1efc399c8882cde961c883": "b4a89d1ea667aff5b723b248ff583cdb",
".git/objects/48/18e763aa849cff3389870d762f1d85aec00d7d": "a91bb3c4d06c22293d4c391709b1d4fd",
".git/objects/48/f8ad83d34d2030ffafd6e91b6caa2a5a9a884d": "9a8c00fb4ac81ea86fccef645203853b",
".git/objects/8d/6c103f9531d4ec2f263e411fc60d93b32c6019": "5cb9c9a252a8955f8b0f4e204eb0770b",
".git/objects/71/7f6f363e29ff3b058c1dbe98053b49a8359956": "8d94837a8df3bd0b719adc6770e96fdb",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/76/b732ef9f2b02b1f4e0f2013acf70cf41ec2e88": "a1ced292d724e1ef7fd4446d137312a2",
".git/objects/1c/4241641288f2aa93b4fd5581b32b13b19a8496": "71f52d7845058420d1ce4f250626f311",
".git/objects/82/1b745079b5bf9caa2750c6c2f441b45e0fee52": "f40058b0aeaf683952ce5df2bd42cbad",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/2e/78877f3265caae6f9ad7536f53a2a36e78b382": "85e2220d6d629e7ab8881a4bcb27ca19",
".git/objects/2e/ed9241dbd863eb02681a12e082f2482d35109e": "4ab46f317570d193ea10371efb569091",
".git/objects/47/ee6aa8832d76e8b34f8739be294149a894881c": "873daf60dcd8c5b4721d66a95a4308b7",
".git/objects/8b/e2100e84b40ffda7483c3e7850bd5c9545a753": "1e454fdb2d401a18a0e02bfa587edb67",
".git/objects/8b/921f35b5a31ff14caea791ee1238550098e3cf": "db3a15bceeb5508c507ab9f97414b337",
".git/objects/8e/a323814fe9ee226574922df9ab1f7900e6dbf5": "351eab6ccf97150cc57f4585ec121add",
".git/objects/22/8ce12ac4f35bcbfa237d68c669d284fef813a2": "048ded74187cc1c702d86a48ab6176d3",
".git/objects/25/e3a72e9f36022b6d7d2ef098ce10100aa87833": "45db65a04663bbfd61462ee0ee29f92f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e71c7deb2cd494c56cadf2102f77b8c",
".git/logs/refs/heads/master": "6e71c7deb2cd494c56cadf2102f77b8c",
".git/logs/refs/remotes/origin/HEAD": "fdc69e948431db2a81718b8d33df2a6a",
".git/logs/refs/remotes/origin/master": "def7a7444fbb50d9adf791665aeb9297",
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
".git/refs/heads/master": "aa91d218ac59ac93c3c9d5030b68ff28",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "aa91d218ac59ac93c3c9d5030b68ff28",
".git/index": "376a8a6fc01738f6ef292a6a961d4711",
".git/packed-refs": "873bbbcee5fb2a59b042bb206cb54988",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/FETCH_HEAD": "6ad624855499b50c38e00d8b32995c27",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "584050a9764486787120f9d27b3b765f",
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
