// ==UserScript==
// @name        Pengui Ball Commumoji
// @match       https://beta.ynoproject.net/*
// @match       https://pengui-ball.jackssrt.com/*
// @version     0.1.2
// @description Unofficial community created emojis for Pengui Ball
// @noframes
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @downloadURL https://raw.githubusercontent.com/AcrylonitrileButadieneStyrene/yno-commumoji/master/pengui-commumoji.user.js
// @supportURL  https://github.com/AcrylonitrileButadieneStyrene/pengui-commumoji/issues
// @homepageURL https://github.com/AcrylonitrileButadieneStyrene/yno-commumoji/blob/master/README.md
// ==/UserScript==

const configUrl = "https://raw.githubusercontent.com/goobert/yno-commumoji-data/master/config.csv";
const baseUrl = "https://cdn.jsdelivr.net/gh/goobert/yno-commumoji-data/assets/";
const maxAge = 86400000; // 1 day

async function fetchConfiguration() {
    const cache = await unsafeWindow.caches.open("yno-commumoji");
    const cached = await cache.match(configUrl);
    if (cached) {
        const cachedDate = new Date(cached.headers.get("Date"))
        if (new Date() - cachedDate < maxAge) {
            updateStatus(cache, cachedDate);
            return await cached.text();
        }
    }

    const response = await fetch(configUrl);
    const status = response.status;
    const statusText = response.statusText;
    if (status >= 400) {
        alert(`An issue occurred with loading the ynocommumoji configuration: ${status} (${statusText})`);
        throw statusText;
    }
    const headers = new Headers(response.headers);
    const text = await response.text();

    let date = headers.get("Date");
    if (date) date = new Date(date)
    if (!date || isNaN(date.getTime()))
        date = new Date();

    headers.set("Date", date.toUTCString());
    updateStatus(cache, date);

    await cache.put(configUrl, new Response(text, { status, statusText, headers }));
    return text;
}

function updateStatus(cache, date) {
    GM_unregisterMenuCommand("last-updated");
    GM_registerMenuCommand(
        "Last updated: " + date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', }),
        () => {
            cache.delete(configUrl);
            updateConfiguration();
        },
        { id: "last-updated" }
    );
}

let ready = false;
const api = new Promise(res => {
    const token = setInterval(() => {
        if ("interface" in unsafeWindow) {
            clearInterval(token);
            ready = true;
            res(unsafeWindow.interface)
        }
    });
});

let enqueuedConfiguration;
async function updateConfiguration() {
    const config = (await fetchConfiguration()).split("\n")
        .map(line => line.split(","))
        .filter(pairs => pairs.length >= 2)
        .reduce((accumulator, [key, ...value]) => (accumulator[key] = value, accumulator), {});
    const killswitch = config["#killswitch"];
    if (killswitch) {
        const [psk, message] = killswitch;
        return window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(psk))
            .then(bytes => Array.from(new Uint8Array(bytes)))
            .then(bytes => bytes.map((item) => item.toString(16).padStart(2, "0")).join(""))
            .then(hash => {
                if (hash == "0fe6e84cd9648f8b858c43471d6fb21db94902be24760b4703a26711d8882688")
                    alert(killswitch)
            });
    }

    if (!ready) enqueuedConfiguration = config;
    else applyConfig(await api, config);
};
updateConfiguration();

api.then(interface => {
    if (!enqueuedConfiguration) return;

    applyConfig(interface, enqueuedConfiguration)
    enqueuedConfiguration = undefined;
});

async function applyConfig(interface, config) {
    const emojis = Object.entries(config)
      .sort(([a], [b]) => a > b)
      .map(([key, [url]]) => {
          if (!url) url = ".png" // default to png file if empty
          if (url.startsWith(".")) { // assume file name is emoji name
              let file = key;
              if (file.startsWith("-")) // remove dash prefix
                  file = file.substring(1);
              url = baseUrl + file + url;
          }
          return [key, url];
      })
      .reduce((accumulator, [key, value]) => (accumulator[key] = value, accumulator), {});
    interface.emojis.add_source("commumoji", emojis);
}

