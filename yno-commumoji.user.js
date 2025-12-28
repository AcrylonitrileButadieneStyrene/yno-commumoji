// ==UserScript==
// @name        YNO Commumoji
// @match       *://ynoproject.net/*
// @version     0.1.3
// @description Unofficial community created emojis for YNO
// @noframes
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @downloadURL https://raw.githubusercontent.com/AcrylonitrileButadieneStyrene/yno-commumoji/master/yno-commumoji.user.js
// @supportURL  https://github.com/AcrylonitrileButadieneStyrene/yno-commumoji/issues
// @homepageURL https://github.com/AcrylonitrileButadieneStyrene/yno-commumoji/blob/master/README.md
// ==/UserScript==

const configUrl = "https://raw.githubusercontent.com/AcrylonitrileButadieneStyrene/yno-commumoji/master/config.csv";
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
const ynomojis = new Promise(res => {
    const original = Object.keys;
    Object.keys = function (object) {
        const keys = original.apply(this, arguments);
        if (object[keys[0]] == keys[0] + ".png") {
            Object.keys = original;
            ready = true;
            res(ynomojiConfig);
        }
        return keys;
    }
});

let enqueuedConfiguration;
async function updateConfiguration() {
    const config = (await fetchConfiguration()).split("\n")
        .map(line => line.split(","))
        .filter(pairs => pairs.length == 2)
        .reduce((accumulator, [key, value]) => (accumulator[key] = value, accumulator), {});
    const killswitch = config["#killswitch"];
    if (killswitch) return alert(killswitch);

    if (!ready) enqueuedConfiguration = config;
    else applyConfig(await ynomojis, config);
};
updateConfiguration();

ynomojis.then(ynomojiConfig => {
    if (enqueuedConfiguration) {
        applyConfig(ynomojiConfig, enqueuedConfiguration)
        enqueuedConfiguration = undefined;
    }

    // fix rendering in chat
    patchWrapper();
});

async function applyConfig(ynomojis, config) {
    const container = document.getElementById('ynomojiContainer');
    for (const [key, url] of Object.entries(config)) {
        if (ynomojis[key] == url) continue;

        // add the custom emoji
        ynomojis[key] = url;

        // add to the emoji picker
        addEmoji(container, key, url);
    }
}

function addEmoji(container, key, url) {
    // from play.js:2822 with slight changes
    const ynomoji = document.createElement('img');
    ynomoji.src = url;
    addTooltip(ynomoji, `:${key}:`, true);
    ynomoji.classList.add('ynomoji');
    ynomoji.onclick = () => insertYnomoji(key);

    const ynomojiButton = document.createElement('a');
    ynomojiButton.href = 'javascript:void(0)';
    ynomojiButton.dataset.ynomojiId = key;
    ynomojiButton.classList.add('ynomojiButton');
    ynomojiButton.appendChild(ynomoji);

    container.appendChild(ynomojiButton);
}

function patchWrapper() {
    const original = unsafeWindow.wrapMessageEmojis;
    unsafeWindow.wrapMessageEmojis = function (node) {
        original.apply(this, arguments);

        const images = node.querySelectorAll(".ynomojiWrapper img");
        for (const image of images)
            image.src = image.src.substring(image.src.lastIndexOf("https://"))
    }
}
