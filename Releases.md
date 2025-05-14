# Releases

## UFT 2025.2.0 (Oct. 21, 2024 - FF: Feb. 24, 2025 - CF: Mar. 31, 2025 - GA: Apr. 21, 2025)

* Web & AI
>
>* [Enhancement] [AIOD OCR] support to recognize text using technology (Sagi Zhang, Kai Zhou)
>
* AI - General
>
>* [Enhancement] [Typing] As a user, I want to set intervals for AI type/settext/typesecure/settextsecure/search (Sagi Zhang)
>* [Enhancement] [Model] Support to download the AI model from opentext marketplace (Sagi Zhang)
>
* Web & Digital Lab - General
>
>* [Enhancement] Upgrade cef component to latest (132.3.11)  (Sagi Zhang)
>

---

## UFT 2024.4.0 (Apr. 8, 2024 - FF: Aug. 26, 2024 - CF: Sep. 23, 2024 - GA: Oct. 28, 2024)

* Web
>
>* [Enhancement] [WebDriver] Upgrade webdriver to 4.x (Sagi Zhang)
>* [Enhancement] Make the web script execution more stable (Sagi Zhang)
>* [Enhancement] Migrate the Safari App extension from MicroFocus Account to OpenText Account (Kai Zhou)
>
* Digital Lab - Cloud Browser
>
>* [Enhancement] Support AI steps on Cloud Browser (Sagi Zhang, Kai Zhou)
>
* Digital Lab - General
>
>* [Enhancement] establish ws connection to Digital Lab with full cookie  (Sagi Zhang)
>

---

## UFT 2024.2.0 (Oct. 16, 2023 - FF: Feb. 19, 2024 - CF: Mar. 18, 2024 - GA: Apr. 15, 2024)

* Web
>
>* [Enhancement] [Edge] Rename the Chromium Edge to Edge and deprecate the legacy Edge (Kai Zhou)
>* [Enhancement] [Chrome] [Edge] As a User, I want to launch Chrome/Edge with the unpacked extension (Kai Zhou)
>
* Digital Lab - Cloud Browser
>
>* [Internal] Create UFT Automation Engine (Sagi Zhang, Kai Zhou)
>* [Internal] Create UFT Automation Engine Connector (Sagi Zhang)
>* [Internal] Create UFT Web Driver (Sagi Zhang, Kai Zhou)
>* [Internal] Create UFT Web Browser Nativemessaging Host (Sagi Zhang, Kai Zhou)
>* [Internal] Create UFT Desktop Driver (Kai Zhou)
>
* ValueEdge FT - MBT/FTE
>
>* [Enhancement] [ValueEdge] [Digital Lab] [HPToolsLauncher] [FTE for mobile] add parameters for Suite name and Test name and maybe Schedule name. (Sagi Zhang)
>

---

## UFT 2023.4.0 (Mar. 13, 2023 - FF: Aug. 21, 2023 - CF: Sep. 28, 2023 - GA: Oct. 30, 2023)

* Web
>
>* [WebUtil] [Chrome_Emulator] As a user, I want to launch the Chrome Emulator browser using WebUtil.LaunchBrowser command in scripts (Sagi Zhang)
>* [Extension] [CDP] Support to simulate the Keyboard Event with CDP (Sagi Zhang)
>* [Extension] [CDP] Support to simulate the Mouse Click with CDP (Sagi Zhang)
>
* Digital Lab - Cloud Browser
>
>* [Integration] [BrowserTypes] Support Chromium Edge & Firefox (Kai Zhou)
>* [Integration] [mv3] Native message host for support mv3 extension (Kai Zhou)
>* [Integration] [VNC] Support to display VNC for cloud browser replay (Sagi Zhang)
>* [Internal] Upgrade the APIs (templates & launchApplication) (Kai Zhou)
>* [Enhancement] Add browser context info in Report (Kai Zhou)
>* [Enhancement] As a user, I want the UFT ui not freeze when start replay or start record, so that we could get the good user experience (Kai Zhou)
>* [Enhancement] Dispaly a snowball with cancel button when creating job (Kai Zhou)
>* [Enhancement] Add warning info in report that AI is not supported for AIUtil step (Kai Zhou)
>* [Enhancement] Support to change the Web RNR with DL settings using AOM (Zhishuai Max)
>* [Enhancement] [AOM] [DLConnection] As a user, I want to change the lab connection settings in UFTOne options using AOM (Zhishuai Max)
>* [Enhancement] [AOM] [WebLauncher] As a user, I want to change the Web RNR with DL settings using AOM (Zhishuai Max)
>* [Enhancement] [RnR] Add tooltip for browser version in RnR (Sagi Zhang)
>* [Enhancement] [RnR] Sort the browser version and show version number for Latest items in RnR (Sagi Zhang)
>* [Enhancement] [RnR] Update the warning icon and message in RnR (Sagi Zhang)
>* [Refactor] Move browser job session mgr logic into backend (Sagi Zhang)
>* [DevOps] Create drop build for validated web agents (Naren)
>
* Digital Lab - Mobile
>
>* [Integration] Update the url for Mobile RnR Wizard , VNC and the Device & App Wizard for Standalone VNC (Sagi Zhang)
>* [Enhancement] Support Device.Pan (Sagi Zhang)
>* [Refactor]Move device job session mgr logic into backend (Sagi Zhang)
>
* Security
>
>* [Security] Upgrade the cefsharp to 117.2.20 (Sagi Zhang)
>
* Rebrand
>
>* [Rebrand] rebrand Micro Focus to OpenText (Sagi Zhang)

---

## UFT 2023.0.0 (Aug. 22, 2022 - FF: Jan. 16, 2023 - CF: Feb. 27, 2023 - GA: Mar. 20, 2023)

* Web
>
>* [ChromiumEdge] [mv3] Browser Extension mv3 (Sagi Zhang)
>* [ChromiumEdge] [Chrome] [mv3] [minimum_chrome_version] As a User, I can only install the MV3 extension on chrome/edge v95+ (Sagi Zhang)
>* [Extension] [mv3] Support web spy/highlight/record/replay when system desktop scale is not 100% (Sagi Zhang)
>* [Aggrid] [React] Support React based Aggrid (Zhishuai Max)
>* [Firefox] [mv3] [POC] Create and validate the mv3 web extension (Kai Zhou)
>
* Digital Lab - Cloud Browser
>
>* [DevInternal] Move the shared libs into backend integration for better maintenance (Sagi Zhang)
>* [DevInternal] Prepare the RESTful api for cloud browser environment (Kai Zhou)
>* [Options] As a user, I want to setup the lab connection settings in UFTOne options (Zhishuai Max, Sagi Zhang)
>* [RNR] As a user, I want to select the OS and browser in UFT Web RnR (Zhishuai Max, Sagi Zhang)
>* [Replay] As a user, I want to run the existing web scripts with the cloud browser (Kai Zhou, Sagi Zhang)
>* [Report] As a user, I want to see the report after the test run end with the cloud browser (Kai Zhou, Sagi Zhang)
>* [Build] Create a build for cloud browser usage, upload the extension to artifictory, set the default ws url to ws://127.0.0.1:8080/hp4m-connector/browser/ (Sagi Zhang)
>
* Digital Lab - Mobile
>
>* [Rebrand] Rebrand the UFT Mobile to UFT Digital Lab (Zhishuai Max)
>
* FT Designer - Web
>
>* [FT Designer] [Extension] As lwe/uftone, I want to know the extension ID and extension versions, so that I can tell user that the extension is the matched one or not (Sagi Zhang)

---

## UFT 2022.0.0 (Feb. 10, 2022 - FF: Jul. 4, 2022 - CF: Aug. 1, 2022 - GA: Aug. 24, 2022)

* Web
>
>* [Chrome] [mv3] Chrome Extension Manifest v3 (Sagi Zhang)
>* [IEMode] Improve the UX when spy/highlight/record/replay with IE Mode in Edge (Kai Zhou)
>* [Safari]Support Safari with Universal App (Kai Zhou)
>* [Web improvements] Remove legacy browser support (Chrome, Firefox, Edge) (Sagi Zhang, Kai Zhou)
>* [WebTabStrip] [Record] record #index if the selected text is empty (Kai Zhou)
>
* Mobile
>
>* [UFTM]  Support for Micro Focus Public Devices (Sagi Zhang)
>* [UFTM]  Support for new labs (WeTest, Genymotion) (Sagi Zhang)
>* [UFTM] When creating a job, adding parameter which indicates the name of the tool creating the job. (Sagi Zhang)
>* [UFTM] [WS] Create WS based on job endPoint (Sagi Zhang)
>
* LeanFT
>
>* [LeanFT] Update the Extension information for linux environment (Kai Zhou)

---

## UFT 2021.1.0 (Jul. 12, 2021 - FF: Dec. 8, 2021 - CF: Jan. 24, 2022 - GA: Feb. 24, 2022)

* Web
>
>* [IEMode]Support record & spy with IE mode in Edge Chromium  (Kai Zhou)
>* [Web Performance] Support to display the smart identification result in the html report (Junjun Jiao)
>* [Web Performance] Improve UFT WebDriver solution performance (Sagi Zhang)
>* [DevInternal] Support Safari on Apple silicon based Mac computers (Kai Zhou)
>* [Chrome Emulator] Update the device list of Chrome Emulator in RnR settings (Junjun Jiao)
>* [Frames] [Refactor] Refactor the buildLayoutTree with chrome.webNavigation API (Sagi Zhang)
>* [Frame] [Refactor] Use CustomEvent for contentScriptContext & htmlContext communication and only use postMessage for cross origin communication (Sagi Zhang)
>* Support to recognize the web controls if scale of PC's display settings is not 100% (chrome, chromium edge, firefox) (Sagi, Zhang)
>* [PWA] Support app window in Chrome/Edge (Sagi Zhang)
>* [Web] [Guider] Prepare a doc for general web automation guider (chrome, chromium edge, firefox, webdriver solutions)  (Yigao, Fan)

---

## UFT 2021.0.0 (Oct. 19, 2020 - FF: May. 31, 2021 - CF: Jun. 28, 2021 - GA: Aug. 12, 2021)

* Web
>
>* [Web Performance] Web Fast Run Mode (Kai Zhou, Sagi Zhang)
>* Support IE mode in Edge Chromium (Kai Zhou)
>* Support Microsoft WebView2 (Huaming Zhai)
>* Add Browser Policy on Chrome, Firefox, Edge (Sagi Zhang)
>* Refactor Safari Extension (Sagi Zhang)
>
* Mobile
>
>* [UFTM] replace EO browser to CEF (Junjun Jiao)
>
* LeanFT
>
>* Support chromdriver custom path & mode for LeanFT (Junjun Jiao)
>* Provide the firefox web extension file and extension id to LeanFT for linux32_release, Linux, mac (Sagi Zhang)
>* Support Safari for LeanFT (Sagi Zhang)

---

## UFT 15.0.2 (Mar. 23, 2020 - FF: Sep. 7, 2020 - CF: Oct. 14, 2020 - GA: Nov. 16, 2020)

* Web
>
>* [Web Performance] Web Fast Run Mode  (Kai Zhou, Sagi Zhang)
>* Support Spy and Highlight with zoomed web page  (Sagi Zhang)
>* Support the low-level recording for Firefox (Scott)
>
* Mobile
>
>* Add support for Flutter ( Junjun Jiao)
>* Support additional Device Metrics ( Junjun Jiao)
>* Support to confgure Target Lab and FleetType in UFT R&R ( Junjun Jiao)
>* Add Device Time to steps in the report ( Junjun Jiao)
>* Mask execution token ( Junjun Jiao)
>* Support real time JS injection (Sagi Zhang)

---

## UFT 15.0.1 (Nov. 04, 2019 - FF: Mar. 2, 2020 - CF: Mar. 30, 2022 - GA: Apr. 29, 2020)

* Web
>
>* Chromium Edge  (Frank)
>* Web Performance (Kern)
>* command line utility for "SettingNewBrowserControlApplication.exe" (Sagi)
>* Web Canvas blog (Tamar)
>
* Mobile
>
>* ADF Enhancement (Lance)
>* IOS OOA without js injection (Lance)
>* Support to capture gif for mobile steps (Lance)
>* Support MobileLink (Lance)
>
* Others
>
>* Support "TextObject" for OCR Capabilities (Sagi)
>

---

## UFT 15.0.0 (May. 27, 2019 - FF: Oct. 10, 2019 - CF: Nov. 4, 2019 - GA: Nov. 25, 2019)

* Web
>
>* Safari App Extension (Aaron, Kern)
>* Rebranding: "Micro Focus Function Testing Agent" to "Micro Focus UFT Agent" (Sagi)
>* Expose the AgGrid and UIGrid as sub addin (Sagi)
>* Support Browser.FullScreen(FULL_SCREEN_TOGGLE | FULL_SCREEN_ON | FULL_SCREEN_OFF) (Scott)
>* Support Header parameter in Browser.Navigate (Sagi)
>* Support the webview on Electron (Frank)
>
* Mobile
>
>* MC Execution Token (Sagi)
>* Parse the .ipa and .apk files with MC new API (Sagi)
>* Support MobileNumberPicker (Lance)
>* Support to capture Mobile Device screenshot in BPM (Jack)
>* Rebranding: "Mobile Center" to "UFT Mobile" (Leo)
>
* Parallel Execution
>
>* Parallel condition (Lance)
>

---

## UFT 14.53 Patch 1

* Mobile:
>
>* MC Execution Token (Jack, Sagi)
>* Parse app information for Mobile Addin for local device (Sagi)
>

---

## UFT 14.53: (Mar. 4, 2019 - FF: May. 6, 2019 - CF: Jun. 3, 2019 - GA: Jun. 24, 2019)

* Web:
>
>* Safari App Extension (Aaron, Kern)
>* Support customized window classes for CEF (Scott)
>* Turn on  Web Extensibility for Chromium based frameworks (Sagi)
>* Support cross origin iframe on CEF, Electron and Edge (Frank)
>* Remove the AbortIfHangInSendData Flag (Sagi, Scott)
>* reduce UFT’s launch time (web extensibility toolkit validation) (Sagi)
>* Sales Force Lightning (SFLightningTime, SFLightningFile, SFLightningDate and * performance) (Kern)
>* Support Win10 1809 Edge (17763) (Sagi)
>
* Mobile:
>
>* MC RestAPI refactor (Jack, Sagi)
>* As from MC, it can know the status of uft js engine. (Sagi)
>* As a UFT user, I want to switch to MC Lite using Automation Scripts (Sagi)
>
* SRF:
>
>* Remove the promotion section in SRF connection settings (Sagi)
>

---

## UFT 14.52: (Nov. 11, 2018 - FF: Feb. 3, 2019 - CF: Mar. 3, 2019 - GA: Mar. 25, 2019)

* Web:
>
>* Salesforce Lightning (Kern, Frank)
>* Browser manipulation: Browser.Minimize, Browser.Restore and Browser.Maximize (Frank)
>* Multi ChromeDriver Support (Martin)
>* Safari app extension (Aaron)
>
* Mobile:
>
>* UFT Mobile Addin for local device (MC Lite/MC Mini Lab/MC local * connector) (Jack, Sagi)
>* MC RestAPI refactor (Target for UFT 14.53) (Jack)
>
* SRF
>
>* SRF improvements (RnR, Mobile metrics, MLU) (Sagi)
>

---

## UFT 14.51: (Jul. 29, 2018 - FF: Oct. 22, 2018 - CF: Nov. 7, 2018 - GA: Nov. 29, 2018)

* Web:
>
>* Safari app extension (Aaron)
>* Refactor jQuery (Web 2.0) (Frank)
>
* Mobile:
>
>* Method/way to release a device locked during a test run in UFT (Sagi)
>* Workspace alignment (Sagi)
>
* SRF
>
>* SRF Performance improvements (Sagi)
>* Support SRF Parameter (Cloud Execution) (Sagi)
>
* Parallel Execution
>
>* Parallel web support (Headless Chrome, Edge, Safari) (Kimi)
>

---

## UFT 14.50: (Feb. 25, 2018 - FF: Jul. 1, 2018 - CF: Aug. 1, 2018 - GA: Aug. 21, 2018)

* Web
>
>* Alert Zoom Level (Frank)
>
* Parallel Execution
>
>* Parallel Execution for Web (Kimi, Aaron, Frank, Sagi)
>* Parallel Execution for Jenkins (Sagi, Ionut)
>* Parallel Execution UI (Aim, Sagi)
>* Parallel Execution Report (Sagi)
>

---

## UFT 14.03 SP  (Nov. 19, 2017 - FF: Jan. 11, 2017 - CF: Feb. 1, 2018 - GA: Feb. 28, 2018)

* Web
>
>* Chrome Headless support (Martin)
>* ActiveScreen for Chrome/Firefox (Aaron)
>* UIGrid (Frank)
>* CEF enhancement (Easton, Kimi)
>
* Mobile
>
>* Parallel Execution for Mobile (Sagi)
>
* SRF
>
>* Record for MC on SRF (Kimi, Aim)
>

---

## UFT 14.02 SP (Aug. 6, 2017 - FF: Oct. 8, 2017 - CF: Nov. 5, 2017 - GA: Nov. 28, 2017)

* Web
>
>* AgGrid support (Frank)
>* ShadowDom (Aaron)
>
* SRF
>
>* SRF Integration Enhancement (mobile screenshots) (Sagi)
>* SRF Burst for Mobile Browser and Hybrid app (Kimi, Easton)
>

---

## UFT 14.01 SP (Jan. 22, 2017 - FF: Jun. 11, 2017 - CF: Jul. 23. 2017 - GA: Aug. 13, 2017)

* Web
>
>* WebExtensions (Martin)
>* IE/LWE (Jason)
>* SAML 2.0 (Cindy)
>
* SRF
>
>* SRF Integration Enhancement (connection, upload) (Sagi)
>* SRF Mobile Burst (Kimi, Sagi)
>* SRF Cloud Execution (Sagi)
>

---

## UFT 14.00: (May. 29, 2016 - FF: Dec. 4, 2016 - CF: Jan. 2, 2017 - GA: Jan. 27, 2017)

* Web
>
>* WebExtensions (Martin)
>* Log4JavascriptLite for MC agent (Easton)
>* Safari 10.12 "Sierra" (Kimi)
>* MQTT (Cindy)
>
* Mobile
>
>* MC integration Refactoring (RnR) (Sagi, Allen)
>
* SRF
>
>* Headless UFT (Sagi)
>* SRF Burst performance improvement (Easton, Kimi)
>

---

## UFT 12.54 SP: (May. 9, 2016 - FF: Aug. 15, 2016 - CF: Sep. 12, 2016 - GA: Sep. 29, 2016)

* Web
>
>* OOA Hybrid & Native Browser new mechanism (Easton)
>* JavaFX WebView Support (Scott, Kimi)
>* Native Browser enhancement (Spy, Record) (Kimi, Wayland)
>* Browser.Quit (Martin)
>* PhantomJS support (Wayland, Martin)
>* [APITesting]JKS Certificate support (Cindy, Jason Xu)
>* [APITesting]MQ (Cindy, Jason Xu)
>
* Mobile
>
>* Mobile Enhancement (RnR, VNC, Screenshots) (Sagi)
>

---

## UFT 12.53 SP (Dec. 30, 2015 - FF: Apr. 3, 2016 - CF: May. 10, 2016 - GA: Jun. 3, 2016)

* Web
>
>* [Agent]Mobile Native Browser (Kimi, Easton, Wayland, Scott)
>* Edge Record support (Wayland)
>* Java CEF, Adobe CEP Support (Kimi)
>* WebMenu for Web ACC. (Scott)
>* [LightWeightEngine] Enable Web Socket for Firefox agent (Scott)
>
* Mobile
>
>* [Package]Mobile Native Browser (Sagi)
>* MobileCenter 2.0 integration (Sagi)
>

---

## UFT 12.52 Patch 1

>* Web
>
>* JavaCEF Record and enhancement (Kimi, Wayland)
>* Safari new version on Mac OS X 10.11 (Kimi)
>* Firefox auto sign via JPM (Easton)
>

---

## UFT 12.52 SP (Sep. 23, 2015 - FF: Dec. 2, 2015 - CF: Dec. 30, 2015 - GA: Jan. 25, 2016)

* Web
>
>* JavaCEF Development (Kimi)
>* New browser versions
>* Chrome Emulator (Sagi)
>
* Mobile
>
>* Mobile Browser (Sagi)
>* AOM for Mobile Viewer Window (Sagi)
>

---

## UFT 12.51 Patch 2

* Web
>
>* Chrome Emulator (Sagi)
>
* Mobile
>
>* Mobile Browser (Sagi)
>

---

## UFT 12.51 Patch 1 

* Web
>
>* MS Edge support (Wayland , Kimi)
>

---

## UFT 12.51 (Jul. 1, 2015 - FF: Aug. 12, 2015 - CF: Sep. 9, 2015 - GA: Sep. 30, 2015)

* Web
>
>* Hybrid (Kimi/Easton, Steven/Wayland)
>* Edge (Wayland)
>* Ext. Toolkits
>* New Browser Version support (Steven)
>

---

## UFT 12.50 (Nov. 12, 2014 - FF: Mar. 23, 2015 - CF: May. 13, 2015 - GA: Jul. 17, 2015)

* Web
>
>* IE 12 Support (Wayland)
>* [FF2JS] Switch Firefox support to JavaScript Addon (Kimi/Steven/Easton)
>* [Cross Browser] UFT 12.50 (Easton/Wayland)
>* Cross Browser Usability (Easton)
>* New Browser Version support (Steven)
>
* Backend
>
>* New HTML Report (Sagi, Solever)
>
* Mobile
>
>* MobileCenter integration (Sagi)
>

---

## UFT 12.02 (Jun. 18, 2014 - FF: Sep. 17, 2014 - CF: Oct. 29, 2014 - GA: Dec. 15, 2014)

* Web
>
>* Chrome Extensibility (Kimi/Easton)
>* Web 2.0 toolkits support on Chrome (Kimi/Easton)
>* New Browser Versions support (Steven)
>* IE 11 Enhanced Protected Mode (Easton)
>* Chrome Native Messaging to replace NPAPI (Easton)
>* Chrome Web Socket to replace NPAPI (Kimi)
>
* Backend
>
>* New Remote Agent (Sagi, Allen)
>
---
