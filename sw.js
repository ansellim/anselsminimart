if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let i = Promise.resolve();
      return (
        r[e] ||
          (i = new Promise(async (i) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = i);
            } else importScripts(e), i();
          })),
        i.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    i = (i, r) => {
      Promise.all(i.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(i) };
  self.define = (i, a, s) => {
    r[i] ||
      (r[i] = Promise.resolve().then(() => {
        let r = {};
        const c = { uri: location.origin + i.slice(1) };
        return Promise.all(
          a.map((i) => {
            switch (i) {
              case "exports":
                return r;
              case "module":
                return c;
              default:
                return e(i);
            }
          })
        ).then((e) => {
          const i = s(...e);
          return r.default || (r.default = i), r;
        });
      }));
  };
}
define("./sw.js", ["./workbox-46074162"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "cart.html", revision: "11e5635787d2b0d34d554ee2b828d1a5" },
        {
          url: "css/directions.css",
          revision: "49df6b43a2736f36bbfc46f270e23db7",
        },
        { url: "css/style.css", revision: "db5c9670f5872e533e5332e374f9f4ff" },
        {
          url: "directions.html",
          revision: "becd8e6b643e33f51d3befeb8a048943",
        },
        {
          url: "feedback_form.html",
          revision: "18a436df172e910fb1642992e2a1113c",
        },
        {
          url: "images/abalonenoodle.jpg",
          revision: "465f6b0bee30d17cb31732863f1fb94f",
        },
        {
          url: "images/cheesefries.png",
          revision: "e8ef2b3f3531b66fb5d50db2b8a2a413",
        },
        {
          url: "images/chips.jpg",
          revision: "e65f0cac6aac0722879435c6355cb333",
        },
        {
          url: "images/favicon.ico",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "images/grape.png",
          revision: "4dca32aa5e10fcff52f418ec28efd349",
        },
        {
          url: "images/icon-144x144.png",
          revision: "b9fa8dc7c764c58ab43285fd0b7266c1",
        },
        {
          url: "images/icon-180x180.png",
          revision: "0d9a48cd1ca63612ae92beae61b42599",
        },
        {
          url: "images/icon-192x192.png",
          revision: "0d49f2209420bbeb8de8d594e1385212",
        },
        {
          url: "images/icon-256x256.png",
          revision: "5aa82c9c09af7f6b3f28807a9cf69050",
        },
        {
          url: "images/icon-384x384.png",
          revision: "d6f922ef5b5256344b56bf547b8be17d",
        },
        {
          url: "images/icon-512x512.png",
          revision: "626d799cb40f086b4f46958d99619d91",
        },
        {
          url: "images/kiwi.png",
          revision: "a8c6e9cecbd5569a128cc2b460276d13",
        },
        {
          url: "images/milosnackbar.png",
          revision: "1b963d6e3accec1f6f53eaef024a743c",
        },
        {
          url: "images/oliveoil.jpg",
          revision: "ad83e87941cc7ccb29e7c7952ae2aeb6",
        },
        {
          url: "images/thairice.jpg",
          revision: "13e22f0a488b4571b24d406d9c9f65b8",
        },
        {
          url: "images/tomatoketchup.jpg",
          revision: "f6fc05296d1d3d43e15fe69f981ce682",
        },
        {
          url: "images/trufflechips.png",
          revision: "21f0012f8794d7417af456d79cc6a4fc",
        },
        {
          url: "images/trufflesauce.jpg",
          revision: "da86e262e3e13b83af2d431f2ca51e3e",
        },
        {
          url: "images/vegetableoil.png",
          revision: "75ad49c8407ade0467b7218bb377e407",
        },
        { url: "index.html", revision: "f3cd3eec1130765306c1e90527d32aaf" },
        {
          url: "javascript/add_to_cart.js",
          revision: "005a04a5f43d81dcf0a3b160aad23d7c",
        },
        {
          url: "javascript/cart.js",
          revision: "dd26132ea162895a5bf61678fc15fa05",
        },
        {
          url: "javascript/feedback_form.js",
          revision: "a0b5e445bd252b8eb35a86d149cd2c38",
        },
        {
          url: "javascript/load_in_service_worker.js",
          revision: "cf79be891a54286d2563934589b319c4",
        },
        {
          url: "javascript/maps.js",
          revision: "12e8152a5993820de1703aa6c0b85d3b",
        },
        {
          url: "javascript/products-ajax.js",
          revision: "99afd93c53b710408239c05a7bb0b166",
        },
        {
          url: "javascript/shoppinglist.js",
          revision: "29d62934e54757bdc11a80e23fd81a60",
        },
        {
          url: "JSON/products.json",
          revision: "f0022581b6dcefcbea77d98ded5f6835",
        },
        { url: "manifest.json", revision: "399acae111d6760e1e83cffe3984889b" },
        {
          url: "package-lock.json",
          revision: "0b96bf26c751a8d9a6243813638f445b",
        },
        { url: "products.html", revision: "eea9a2b192df86c0d8f946f080e0d74d" },
        { url: "README.md", revision: "8a339de56e5f0848e82f06ab19a538c1" },
        {
          url: "shoppinglist.html",
          revision: "19d4d218030c513fb1266165592e1b03",
        },
        { url: "thankyou.html", revision: "45a1187b1fd0757bdd8b73acce31f305" },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
