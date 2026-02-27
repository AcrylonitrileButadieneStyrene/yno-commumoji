# YNO Commumojis
Unofficial community created emojis for [YNO](ynoproject.net)

## Installation
1. Add a userscript manager extension:
- [ViolentMonkey](https://violentmonkey.github.io/):
  [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey)
  / [Edge](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao)
- [TamperMonkey](https://www.tampermonkey.net/):
  [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Install [the script](https://raw.githubusercontent.com/AcrylonitrileButadieneStyrene/yno-commumoji/master/yno-commumoji.user.js)
    - Opening the link should open an installation dialog.
      
      If it does not then manually create a new script and paste the contents into it.
3. Reload YNO if it is already opened

## Usage
- Commumojis start with a `-` in their names (e.g. `:-emoji:`)
  to not cause collisions in the future and to indicate them as 3rd party
- The list of Commumojis tries to update daily.
- The last update time can be seen inside of the userscript manager's extension UI.
  - Clicking on it will force a refresh.
    Do not do this too often or you will be rate-limited.
- **Only you and other players with the script installed will be able to see the Commumojis!**

![ezgif-8cf4db1d99522a90](https://github.com/user-attachments/assets/a4e59762-adb8-4de3-8822-5dfe683725bb)

## Contribution Guide

### Option 1: Pull Request
1. Fork the repository by clicking the fork button
2. Navigate into the `assets` folder and upload the emoji's image file.
    - Once your submission is accepted, it will be accessible at `https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/FILE.EXT`.
3. Edit the `config.csv` file to have a new entry.
    - The format for entries in the config is `name,url`, where `name` is what will be used in chat and `url` is where the image will be loaded from.
      - The name should follow this format: :-[character][Action][VersionNumber]:. If the version number is 1, it can be omitted. For example, `-madoGrill2` and `:-penguiBall`.
      - The url should be the `jsdelivr` link from above. Other services will not be accepted due to concerns of security and availability.
4. Create a pull request by clicking the button that shows up at the top of your fork after you have made changes.

### Option 2: Asking [@goobert](https://github.com/goobert)
- If you do not know how to or do not want to make a pull request, you can send a message to `goobertgum` on discord with the name and image and it will be added for you.
  - <sub>(If you are in the `<3` server (YNO group), you can ping them in the `#suggestions` channel.)<sub>

## Image Guidelines
- Explicit permission must be granted by the original artist for a commumoji to be created. Submitting as a ynomoji does not implicitly grant permission for it to become a commumoji.
- Submissions must follow [YNO's](https://ynoproject.net) rules (No NSFW, No politics, etc.) and be appropriate for its audience.
- Submissions must be related to Yume Nikki or its fangames. Content relating to games not on [YNO's](https://ynoproject.net) may be rejected.
- Submissions should ideally:
  - Have a square aspect ratio (e.g. `128x128`, `256x256`).
  - Have a transparent background.
  - Be a `.png` or a `.gif`
    - The file type does not really matter as long as the browser can load it.
    - Avoid using `.jpg` files due to them being compressed and low quality.
  - Be recognizable when small.
    - In chat, ynomojis have a resolution of `32x32` or `16x16` depending on if there is any other text in the message.
    - The images will be downsized using the browser's `auto` setting, which differs between browsers.

# Commumoji List
<!-- 
  NOTE: when editing this list, constrain the image by the GREATER axis to 128 pixels.
  Using both axises is more effort than necessary and may make the image become squished/stretched.
  For square images, pick at random. I chose height. It does not matter.
-->
| Name | Author | Preview |
| :---: | :---: | :---: | 
| **aBaby2** | starbits | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/aBaby2.png"> |
| **ahogeko** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/ahogeko.png"> |
| **aiSmonk** | MichiSan | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/aiSmonk.png"> |
| **aruFrozen** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/aruFrozen.png"> |
| **dogboa** | starlitehi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/dogboa.png"> |
| **daveCry** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/daveCry.png"> |
| **fluoSad2** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/fluoSad.png"> |
| **fluoSmonk2** | thatdolphin | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/fluoSmonk2.png"> |
| **irvTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/irvTiny.png"> |
| **ladyTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/ladyTiny.png"> |
| **madoGrill2** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/madoGrill2.gif"> |
| **madoTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/acrylonitrilebutadienestyrene/yno-commumoji/assets/madoTiny.png"> |
| **midoriko** | starlitehi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/midoriko.png"> |
| **minnaMoth** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/minnaMoth.png"> |
| **minnaTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/minnaTiny.png"> |
| **monoeNom** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/monoeNom.png"> |
| **monoeWAAAH** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/monoeWAAAH.png"> |
| **mumaBall** | starlitehi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/mumaBall.png"> |
| **mumaTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/mumaTiny.png"> |
| **nasu** | starlitehi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/nasu.png"> |
| **nasuFreakout** | starlitehi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/nasuFreakout.png"> |
| **nikoTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/nikoTiny.png"> |
| **noeTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/noeTiny.png"> |
| **penguiBall** | nitran | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/penguiBall.png"> |
| **penguiBall2** | tophat | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/penguiBall2.png"> |
| **penguiBall3** | jackssrt | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/penguiBall3.png"> |
| **penguiNom** | goobert | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/penguiNom.png"> |
| **penguiRoll** | nitran | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/penguiRoll.gif"> |
| **provost** | starbits | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/provost.png"> |
| **provostTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/provostTiny.png"> |
| **sabiTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/sabiTiny.png"> |
| **sheepie** | Tanjunebi | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/sheepie.png"> |
| **shimakoYeehaw** | tophat | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/shimakoYeehaw.png"> |
| **shimiTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/shimiTiny.png"> |
| **someTiny** | Tanjunebi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/someTiny.png"> |
| **someTomato** | Tanjunebi | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/someTomato.png"> |
| **souAddict** | starbits | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/souAddict.png"> |
| **souAshBaby** | starbits | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/souAshBaby.png"> |
| **souBaby2** | starbits | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/souBaby2.webp"> |
| **souCigarette** | starbits | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/souCigarette.webp"> |
| **surimuki** | tophat | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/surimuki.png"> |
| **tsuba** | tophat | <img height="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/tsuba.png"> |
| **uroShocked2** | tophat | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/uroShocked2.png"> |
| **wormCube** | starlitehi | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/wormCube.png"> |
| **yukata** | starbits | <img width="128" alt="" src="https://cdn.jsdelivr.net/gh/AcrylonitrileButadieneStyrene/yno-commumoji/assets/yukata.png"> |

