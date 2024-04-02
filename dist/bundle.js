(()=>{"use strict";var e={313:(e,n,o)=>{o.d(n,{A:()=>_});var t=o(601),i=o.n(t),s=o(314),a=o.n(s)()(i());a.push([e.id,"\n/* // CONSENT MODAL POPUP STYLES */\n.___cookieConsent__ModalConsentBackdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(5px);\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black color */\n    z-index: var(--CONSENT_MODAL_Z_INDEX); /* Ensure the backdrop is behind the modal */\n}\n\n#___cookieConsent__Title {\n    font-size: 1.5rem;\n    font-weight: 600;\n    display: flex;\n    margin-bottom: 0.5rem;\n}\n\n#___cookieConsent__Title svg {\n    margin-left: 0.5rem;\n    height: 30px;\n    width: 30px;\n    margin-top: -5px;\n}\n\n#___cookieConsent__ModalConsent {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 15px;\n    box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.5); /* Add shadow */\n    width:50%;\n    max-width: 800px !important;\n    font-family: 'Roboto', sans-serif;\n    z-index:var(--CONSENT_MODAL_Z_INDEX);\n}\n\n/* Media query for screens with maximum width of 768px (typical for mobile devices) */\n@media screen and (max-width: 768px) {\n    #___cookieConsent__ModalConsent {\n        position: fixed;\n        top: unset;\n        bottom: 0;\n        left: 0;\n        width: 100%; /* Full width of the screen */\n        height: auto;\n        max-height: 80%;\n        border-radius: 0px;\n        box-shadow: none; /* remove shadow */\n        overflow: auto;\n        transform: none; /* Remove the centering transform */\n    }\n    #___cookieConsent__footerButtons {\n        flex-direction: column;\n    }\n}\n\n#___cookieConsent__CategoryButtonList {\n    display: flex;\n    flex-wrap: wrap; /* Allow wrapping to next row if necessary */\n    justify-content: space-around;\n    margin: 1rem 0;\n}\n\n\n\n/* Updated CSS styles for toggle buttons */\n.___cookieConsent__ToggleLabel {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    cursor: pointer;\n    margin-bottom: 10px; /* Add some space between toggle buttons */\n}\n\n.___cookieConsent__ToggleLabel span {\n    margin-bottom: 10px; /* Add space between label text and toggle button */\n}\n.___cookieConsent__ToggleDivider {\n    width: 1px;\n    background:#ccc;\n}\n\n.___cookieConsent__Toggle {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 30px;\n}\n\n.___cookieConsent__Toggle:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.___cookieConsent__Toggle input {\n    display: none;\n}\n\n.___cookieConsent__toggleInner {\n    position: relative;\n    width: 60px;\n    height: 30px;\n    border-radius: 15px;\n    transition: all 0.3s;\n    z-index: 2;\n}\n\n.___cookieConsent__toggleHolder {\n    position: absolute;\n    top:0;\n    z-index: 1;\n    width: 60px;\n    height: 30px;\n    border-radius: 15px;\n    transition: all 0.3s;\n}\n\n/* For unchecked state */\n.___cookieConsent__Toggle input:not(:checked) + .___cookieConsent__toggleHolder .___cookieConsent__toggleInner {\n    background-color: #fff;\n    width: 28px;\n    height: 28px;\n    margin-top: 1px;\n    margin-left: 1px;\n}\n\n.___cookieConsent__Toggle input:not(:checked) + .___cookieConsent__toggleHolder {\n    background-color: lightgrey;\n}\n\n/* For checked state */\n.___cookieConsent__Toggle input:checked + .___cookieConsent__toggleHolder .___cookieConsent__toggleInner {\n    background-color: #fff;\n    width: 28px;\n    height: 28px;\n    margin-top: 1px;\n    margin-left: 30px;\n}\n\n.___cookieConsent__Toggle input:checked + .___cookieConsent__toggleHolder {\n    background-color: var(--WIDGET_MAIN_COLOR);\n}\n\n\n/* For disabled state */\n.___cookieConsent__Toggle input:disabled + .___cookieConsent__toggleHolder .___cookieConsent__toggleInner {\n    background-color: #fff;\n    width: 28px;\n    height: 28px;\n    margin-top: 1px;\n    margin-left: 30px;\n}\n\n.___cookieConsent__Toggle input:disabled + .___cookieConsent__toggleHolder {\n    background-color: black;\n}\n.___cookieConsent__Toggle input:disabled + .___cookieConsent__toggleHolder:hover {\n    cursor: not-allowed;\n}\n\n\n#___cookieConsent__TabButtons, #___cookieConsent__footerButtons {\n    display: flex;\n    flex-wrap: wrap; /* Allow wrapping to next row if necessary */\n    justify-content: space-around;\n}\n#___cookieConsent__footerButtons {gap:1rem; margin-top:1rem}\n.___cookieConsent__Tab {\n    font-size: 1rem;\n    font-weight: 600;\n    letter-spacing: normal;\n    line-height: 1.5rem;\n    display: flex;\n    flex: 1 auto;\n    text-align: center;\n    justify-content: center;\n    padding: 10px 20px;\n    cursor: pointer;\n    border-bottom: 1px solid #ccc;\n    border-radius: 5px 5px 0 0;\n}\n.___cookieConsent__Tab:hover { cursor: pointer;}\n.___cookieConsent__Tab.active {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-bottom: none;\n}\n.___cookieConsent__consentButton {\n    font-size: 1rem;\n    font-weight: 600;\n    letter-spacing: normal;\n    line-height: 1.5rem;\n    display: flex;\n    flex: 1 auto;\n    text-align: center;\n    justify-content: center;\n    padding: 10px 20px;\n    cursor: pointer;\n    background-color: var(--WIDGET_MAIN_COLOR);\n    border: 1px solid var(--WIDGET_MAIN_COLOR);\n    color:white;\n    outline: none;\n    border-radius: 5px;\n    width: unset !important;\n}\n.___cookieConsent__consentButton.___cookieConsent__borderOnly {\n    border: 1px solid var(--WIDGET_SECOND_COLOR);\n    color: var(--WIDGET_SECOND_COLOR);\n    background-color: unset !important;\n}\n.___cookieConsent__consentButton:hover, .___cookieConsent__borderOnly:hover {\n    background-color:  var(--WIDGET_SECOND_COLOR) !important;\n    border: 1px solid var(--WIDGET_SECOND_COLOR);\n    color:white;\n    cursor: pointer;\n    /*appearance: none; !* Remove default appearance *!*/\n    /*font-family: inherit; !* Inherit font family *!*/\n    /*outline: none; !* Remove outline *!*/\n    /*font-size: 1rem;*/\n    /*font-weight: 600;*/\n    /*letter-spacing: normal;*/\n}\n\n#___cookieConsent__TabContent {\n    font-size: 1rem;\n    font-weight: 400;\n    letter-spacing: normal;\n    line-height: 1.5rem;\n    padding: 1rem;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n#___cookieConsent__TabContent b {\n    font-weight: 700;\n}\n\n#___cookieConsent__Wrapper, #___cookieConsent__AboutTab div, #___cookieConsent__ConsentTab {\n    overflow-x:auto;\n    max-height:50vh;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\n#___cookieConsent__Wrapper, #___cookieConsent__AboutTab div {\n    padding-bottom:1rem;\n}\n\n#___cookieConsent__Wrapper::-webkit-scrollbar, #___cookieConsent__AboutTab::-webkit-scrollbar, #___cookieConsent__ConsentTab::-webkit-scrollbar {\n    display: none;\n}\n\n/* Add white transparent gradient at the bottom */\n#___cookieConsent__DetailsTab, #___cookieConsent__AboutTab {\n    position: relative; /* Ensure position context for the gradient */\n}\n#___cookieConsent__DetailsTab::after, #___cookieConsent__AboutTab::after {\n    content: '';\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    width: 100%;\n    height: 40px; /* Adjust height as needed */\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)); /* White transparent gradient */\n}\n\n\n/* // CONSENT BUTTON STYLES */\n#___cookieButtonConsent {\n    position: fixed;\n    bottom: 20px;\n    left: 20px;\n    height: 48px;\n    width: 48px;\n    border-radius: 50%;\n    padding: 0.5rem;\n    cursor: pointer;\n    border: 1px solid #ccc;\n    background-color: rgba(255, 255, 255, 0.75);\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: var(--CONSENT_MODAL_Z_INDEX); /* Ensure the backdrop is behind the modal */\n}\n#___cookieButtonConsent:hover {\n    background-color: var(--WIDGET_MAIN_COLOR);\n}\n\n#___cookieButtonConsent:hover svg {\n    fill: #fff; /* Change the fill color of the SVG */\n}",""]);const _=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=e(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(e,o,t,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var _=0;_<this.length;_++){var c=this[_][0];null!=c&&(a[c]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);t&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function o(e){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===e){o=t;break}return o}function t(e,t){for(var s={},a=[],_=0;_<e.length;_++){var c=e[_],r=t.base?c[0]+t.base:c[0],l=s[r]||0,d="".concat(r," ").concat(l);s[r]=l+1;var g=o(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==g)n[g].references++,n[g].updater(p);else{var u=i(p,t);t.byIndex=_,n.splice(_,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function i(e,n){var o=n.domAPI(n);return o.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;o.update(e=n)}else o.remove()}}e.exports=function(e,i){var s=t(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var _=o(s[a]);n[_].references--}for(var c=t(e,i),r=0;r<s.length;r++){var l=o(s[r]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}s=c}}},659:e=>{var n={};e.exports=function(e,o){var t=function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,o)=>{e.exports=function(e){var n=o.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(o){!function(e,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,i&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var s=o.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var s=n[t]={id:t,exports:{}};return e[t](s,s.exports,o),s.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.nc=void 0,(()=>{const e={title:"Consimțământ",content:["Folosim cookie-uri pentru a personaliza continutul si anunturile, pentru a oferi functii de retele sociale si pentru a analiza traficul. De asemenea, le oferim partenerilor de retele sociale, de publicitate si de analize informatii cu privire la modul in care folositi site-ul nostru. Acestia le pot combina cu alte informatii oferite de dvs. sau culese in urma folosirii serviciilor lor."]},n={title:"Despre",content:["Cookie-urile sunt fișiere text mici care pot fi folosite de către site-uri web pentru a face experiența utilizatorului mai eficientă.","Legea statului prevede că putem stoca cookie-uri pe dispozitivul dvs. dacă acestea sunt strict necesare pentru funcționarea acestui site. Pentru toate celelalte tipuri de cookie-uri avem nevoie de permisiunea dvs. Acest lucru înseamnă că cookie-urile care sunt categorisite ca fiind necesare sunt procesate în conformitate cu GDPR Art. 6 (1) (f). Toate celelalte cookie-uri, adică cele din categoriile preferințe și marketing, sunt procesate în conformitate cu GDPR Art. 6 (1) (a) GDPR.","Acest site utilizează diferite tipuri de cookie-uri. Unele cookie-uri sunt plasate de servicii terțe care apar pe paginile noastre.","Puteți schimba sau retrage oricând consimțământul dvs. din Declarația de Cookie-uri de pe site-ul nostru.","Aflați mai multe despre cine suntem, cum ne puteți contacta și cum procesăm datele personale în Politica noastră de Confidențialitate.","Vă rugăm să menționați ID-ul și data consimțământului dvs. atunci când ne contactați în legătură cu consimțământul dvs."]};var t=o(72),i=o.n(t),s=o(825),a=o.n(s),_=o(659),c=o.n(_),r=o(56),l=o.n(r),d=o(540),g=o.n(d),p=o(113),u=o.n(p),C=o(313),k={};k.styleTagTransform=u(),k.setAttributes=l(),k.insert=c().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=g(),i()(C.A,k),C.A&&C.A.locals&&C.A.locals;const w="cookieConsentGlobalHolder",m="cookieConsentGlobal",f="cookieConsentGlobal_send",b=!0,h=["functionality_storage","personalization_storage"],v={necessary:!0,preferences:b,statistics:b,marketing:b,gc:{ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted",functionality_storage:"granted",personalization_storage:"granted"}},y=`<svg id="${w}-svg1" fill="#000" height="30px" width="30px" version="1.1"\n                            xmlns="http://www.w3.org/2000/svg"\n                            viewBox="0 0 299.049 299.049" xml:space="preserve">\n                                    <g>\n                                        <g>\n                                            <g>\n                                                <path d="M289.181,206.929c-13.5-12.186-18.511-31.366-12.453-48.699c1.453-4.159-0.94-8.686-5.203-9.82\n                                                c-27.77-7.387-41.757-38.568-28.893-64.201c2.254-4.492-0.419-9.898-5.348-10.837\n                                                c-26.521-5.069-42.914-32.288-34.734-58.251\n                                                c1.284-4.074-1.059-8.414-5.178-9.57C184.243,1.867,170.626,0,156.893,0C74.445,0,7.368,67.076,7.368,149.524\n                                                s67.076,149.524,149.524,149.524c57.835,0,109.142-33.056,133.998-83.129C292.4,212.879,291.701,209.204,289.181,206.929z\n                                                M156.893,283.899c-74.095,0-134.374-60.281-134.374-134.374S82.799,15.15,156.893,15.15c9.897,0,19.726,1.078,29.311,3.21\n                                                c-5.123,29.433,11.948,57.781,39.41,67.502c-9.727,29.867,5.251,62.735,34.745,74.752c-4.104,19.27,1.49,39.104,14.46,53.365\n                                                C251.758,256.098,207.229,283.899,156.893,283.899z"/>\n                                                <path d="M76.388,154.997c-13.068,0-23.7,10.631-23.7,23.701c0,13.067,10.631,23.7,23.7,23.7c13.067,0,23.7-10.631,23.7-23.7\n                                                C100.087,165.628,89.456,154.997,76.388,154.997z M76.388,187.247c-4.715,0-8.55-3.835-8.55-8.55s3.835-8.551,8.55-8.551\n                                                c4.714,0,8.55,3.836,8.55,8.551S81.102,187.247,76.388,187.247z"/>\n                                                <path d="M173.224,90.655c0-14.9-12.121-27.021-27.02-27.021s-27.021,12.121-27.021,27.021c0,14.898,12.121,27.02,27.021,27.02\n                                                C161.104,117.674,173.224,105.553,173.224,90.655z M134.334,90.655c0-6.545,5.325-11.871,11.871-11.871\n                                                c6.546,0,11.87,5.325,11.87,11.871s-5.325,11.87-11.87,11.87S134.334,97.199,134.334,90.655z"/>\n                                                <path d="M169.638,187.247c-19.634,0-35.609,15.974-35.609,35.61c0,19.635,15.974,35.61,35.609,35.61\n                                                c19.635,0,35.61-15.974,35.61-35.61C205.247,203.221,189.273,187.247,169.638,187.247z M169.638,243.315\n                                                c-11.281,0-20.458-9.178-20.458-20.46s9.178-20.46,20.458-20.46c11.281,0,20.46,9.178,20.46,20.46\n                                                S180.92,243.315,169.638,243.315z"/>\n                                            </g>\n                                        </g>\n                                    </g>\n                        </svg>`;window.dataLayer=window.dataLayer||[],"function"==typeof window.gtag?window.gtag("consent","default",{analytics:"denied",analytics_storage:"denied",ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"}):console.warn("window.gtag is not defined or is not a function."),window.cg__addCustomFontForCookieConsent=()=>{if(!document.getElementById("___cookieConsent_roboto_font_link")){const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",e.id="___cookieConsent_roboto_font_link",document.head.appendChild(e)}const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",document.head.appendChild(e)},window.cg__hasConsentedToCookies=()=>"true"===localStorage.getItem(m),window.cg__setCookieConsentToLocalStorage=e=>{localStorage.setItem(m,e?"true":"false")},window.cg__hasSendConsentedToCookies=()=>"true"===localStorage.getItem(f),window.cg__setCookieSendConsentToLocalStorage=e=>{localStorage.setItem(f,e?"true":"false")},window.cg__denyOrAllowAllCookieCategorySession=e=>{const n={};for(const o in v)if(Object.hasOwnProperty.call(v,o)&&"neccesary"!==o)if("gc"===o){let t=n[o]||{};for(const n in v[o])Object.hasOwnProperty.call(v[o],n)&&(h.includes(n)?t[n]="granted":t[n]=e?"granted":"denied");n[o]=t}else n[o]=e;window.cg__storeCookieValue(n)},window.cg__initiateCookieCategorySession=()=>{-1===document.cookie.indexOf(w)?window.cg__storeCookieValue(v):setTimeout((()=>{window.cg__send_gtmConsentDataObject()}),500)},window.cg__checkCookieCategorySession=()=>{const e=document.cookie.split(";").find((e=>e.trim().startsWith(w+"=")));if(e){const n=e.split("=")[1],o=JSON.parse(n);document.querySelectorAll('.___cookieConsent__Toggle input[type="checkbox"]').forEach((e=>{const n=e.name.replace("___cookieConsent__","").toLowerCase();e.checked=o[n]}))}},window.cg__setCookieCategoryConsent=(e,n=null)=>{const o=document.cookie.split(";").find((e=>e.trim().startsWith(w+"=")));if(o){const t=o.split("=")[1];let i=JSON.parse(t),s=!i[e];null!==n&&(s=n),i[e]=s,window.cg__setGCConsent(e,s,i),console.log(i),window.cg__storeCookieValue(i);const a=document.querySelector(`input[name="${e}"]`);a&&(a.checked=i[e])}},window.cg__storeCookieValue=e=>{const n=JSON.stringify(e),o=new Date;o.setFullYear(o.getFullYear()+1),document.cookie=`${w}=${n}; expires=${o.toUTCString()}; path=/`},window.cg__setGCConsent=(e,n,o)=>{console.log("enters here setGCConsent category:"+e),console.log("enters here setGCConsent action:"+n);let t=o.gc||{};return"preferences"===e&&(console.log("should enter here if "+e),t=window.cg__updateCookieConsent(["ad_user_data","ad_personalization"],n,o)),"statistics"===e&&(console.log("should enter here if "+e),t=window.cg__updateCookieConsent(["analytics_storage"],n,o)),"marketing"===e&&(console.log("should enter here if "+e),t=window.cg__updateCookieConsent(["ad_storage"],n,o)),console.log(t),o.gc=t,o},window.cg__updateCookieConsent=(e,n,o)=>{const t="gc";let i=o[t]||{};for(const s in o[t])Object.hasOwnProperty.call(o[t],s)&&e.includes(s)&&(i[s]=n?"granted":"denied");return i},window.cg__create_gtmConsentDataObject=(e,n)=>n?{analytics:e?.analytics_storage,analytics_storage:e?.analytics_storage,ad_storage:e?.ad_storage,ad_user_data:e?.ad_user_data,ad_personalization:e?.ad_personalization}:{analytics:{storage:e?.analytics_storage},ads:{storage:e?.ad_storage,user_data:e?.ad_user_data,personalization:e?.ad_personalization}},window.cg__send_gtmConsentDataObject=()=>{const e=document.cookie.split(";").find((e=>e.trim().startsWith(w+"=")));let n;if(e){const o=e.split("=")[1],t=JSON.parse(o);if(t.gc){if((document.querySelector('script[src*="gtm.js"]')||document.querySelector('script[src*="https://www.googletagmanager.com/gtag/js"]'))&&void 0!==window?.dataLayer){const e=window.cg__create_gtmConsentDataObject(t.gc,!0);n=gtag("consent","update",e)}else n="NO GTM!",console.warn("GTM library is not loaded!");return n}}},window.cg__displayCookieConsentButton=()=>{window.cg__getMaxZIndex=()=>{let e=0;return document.querySelectorAll("*").forEach((n=>{const o=parseFloat(window.getComputedStyle(n).zIndex);!isNaN(o)&&o>e&&(e=o)})),e++};const e=window.cg__getMaxZIndex(),n=document.createElement("style");n.textContent=`\n        :root {\n            --WIDGET_MAIN_COLOR: #2f9d08; /* Replace with your actual color value */\n            --WIDGET_SECOND_COLOR: #202020; /* Replace with your actual color value */\n            --CONSENT_MODAL_Z_INDEX: ${e};  /* Ensure the backdrop is behind the modal */\n        }\n    `,document.head.appendChild(n);const o=document.createElement("div");o.innerHTML='\n        <div id="___cookieButtonConsent" onclick="window.cg__showCookieConsentModal()"></div>\n    ',document.body.appendChild(o),document.querySelector("div#___cookieButtonConsent").insertAdjacentHTML("beforeend",y)},window.cg__displayCookieConsentModal=()=>{const o=document.createElement("div");o.setAttribute("id","___cookieConsentBackdrop"),o.classList.add("___cookieConsent__ModalConsentBackdrop"),document.body.appendChild(o);const t=document.createElement("div");t.innerHTML=`\n        <div id="___cookieConsent__ModalConsent">\n            <div id="___cookieConsent__ModalWrapper">\n            <h2 id="___cookieConsent__Title">Folosim cookies</h2>\n            <div id="___cookieConsent__TabButtons">\n                <div class="___cookieConsent__Tab" onclick="window.cg__showTab('___cookieConsent__Consent')" id="___cookieConsent__ConsentTabButton">${e?.title}</div>\n                <div class="___cookieConsent__Tab" onclick="window.cg__showTab('___cookieConsent__Details')" id="___cookieConsent__DetailsTabButton">Detalii</div>\n                <div class="___cookieConsent__Tab" onclick="window.cg__showTab('___cookieConsent__About')" id="___cookieConsent__AboutTabButton">${n?.title}</div>\n            </div>\n            <div id="___cookieConsent__TabContent">\n                <div id="___cookieConsent__ConsentTab">\n                     ${e?.content.map((e=>`<p>${e}</p>`)).join("")}\n                    <p>Selecteaza din lista de mai jos:</p>\n                    \n    <div id="___cookieConsent__CategoryButtonList">\n        <label for="___cookieConsent__Necessary" class="___cookieConsent__ToggleLabel">\n            <span>Necesare</span>\n            <div class="___cookieConsent__Toggle">\n                <input type="checkbox" id="___cookieConsent__Necessary" name="___cookieConsent__Necessary" value="necessary" checked disabled>\n                <div class="___cookieConsent__toggleHolder"><div class="___cookieConsent__toggleInner"></div></div>\n            </div>\n        </label>\n        <div class="___cookieConsent__ToggleDivider"></div>\n        <label for="___cookieConsent__Preferences" class="___cookieConsent__ToggleLabel">\n            <span>Preferinte</span>\n            <div class="___cookieConsent__Toggle">\n                <input type="checkbox" id="___cookieConsent__Preferences" name="___cookieConsent__Preferences" value="preferences">\n                <div class="___cookieConsent__toggleHolder" onclick="window.cg__setCookieCategoryConsent('preferences')"><div class="___cookieConsent__toggleInner"></div></div>\n            </div>\n        </label>\n        <div class="___cookieConsent__ToggleDivider"></div>\n        <label for="___cookieConsent__Statistics" class="___cookieConsent__ToggleLabel">\n            <span>Statistici</span>\n            <div class="___cookieConsent__Toggle">\n                <input type="checkbox" id="___cookieConsent__Statistics" name="___cookieConsent__Statistics" value="statistics">\n                <div class="___cookieConsent__toggleHolder" onclick="window.cg__setCookieCategoryConsent('statistics')"><div class="___cookieConsent__toggleInner"></div></div>\n            </div>\n        </label>\n        <div class="___cookieConsent__ToggleDivider"></div>\n        <label for="___cookieConsent__Marketing" class="___cookieConsent__ToggleLabel">\n            <span>Marketing</span>\n            <div class="___cookieConsent__Toggle">\n                <input type="checkbox" id="___cookieConsent__Marketing" name="___cookieConsent__Marketing" value="marketing">\n                <div class="___cookieConsent__toggleHolder" onclick="window.cg__setCookieCategoryConsent('marketing')"><div class="___cookieConsent__toggleInner"></div></div>\n            </div>\n        </label>\n    </div>\n                </div>\n                <div id="___cookieConsent__DetailsTab" style="display:none;">\n                    <p>Detalii despre cookiurile folosite...</p>\n                </div>\n                <div id="___cookieConsent__AboutTab" style="display:none;">\n                    <div style="display: block">\n                    ${n?.content.map((e=>`<p>${e}</p>`)).join("")}\n                    </div>\n                </div>\n            </div>\n            <div id="___cookieConsent__footerButtons">\n                <button class="___cookieConsent__consentButton ___cookieConsent__borderOnly" onClick="window.cg__denyAllCookies()">Respinge toate</button>\n        <button class="___cookieConsent__consentButton ___cookieConsent__borderOnly" onclick="window.cg__acceptSelectionCookies()">Accepta selecția</button>\n        <button class="___cookieConsent__consentButton" onClick="window.cg__allowAllCookies()">Accepta toate</button>        \n    </div>\n        </div>\n      </div>\n    `,document.body.appendChild(t),window.cg__showTab("___cookieConsent__Consent")},window.cg__closeCookieModal=()=>{document.getElementById("___cookieConsent__ModalConsent").remove(),document.getElementById("___cookieConsentBackdrop").remove()},window.cg__showTab=e=>{document.querySelectorAll(".___cookieConsent__Tab").forEach((e=>{e.classList.remove("active")})),document.getElementById(e+"TabButton").classList.add("active"),document.querySelectorAll("#___cookieConsent__TabContent > div").forEach((e=>{e.style.display="none"})),document.getElementById(e+"Tab").style.display="block","___cookieConsent__Details"===e&&window.cg__displayCookieDetails()},window.cg__displayCookieDetails=()=>{let e=document.cookie.split(";"),n="";e.forEach((e=>{let o=(e=e.trim()).split("="),t=o[0].trim(),i=o.slice(1).join("=").trim(),s="";s="cookieConsentGlobalHolder"===t||"PHPSESSID"===t?"necessary":"optional",n+="<b>Cookie Name:</b> "+t+"<br>",n+="<b>Value:</b> "+i+"<br>",n+="<b>Type:</b> "+s+"<br><br>"})),document.getElementById("___cookieConsent__DetailsTab").innerHTML='<div id="___cookieConsent__Wrapper">'+n+"</div>"},window.cg__acceptSelectionCookies=()=>{window.cg__setCookieConsentToLocalStorage(!0),window.cg__send_gtmConsentDataObject(),window.cg__closeCookieModal()},window.cg__denyAllCookies=()=>{window.cg__setCookieConsentToLocalStorage(!0),window.cg__setCookieSendConsentToLocalStorage(!1),window.cg__denyOrAllowAllCookieCategorySession(!1),window.cg__send_gtmConsentDataObject(),window.cg__closeCookieModal()},window.cg__allowAllCookies=()=>{window.cg__setCookieConsentToLocalStorage(!0),window.cg__denyOrAllowAllCookieCategorySession(!0),window.cg__send_gtmConsentDataObject(),window.cg__closeCookieModal()},window.cg__showCookieConsentModal=()=>{window.cg__addCustomFontForCookieConsent(),window.cg__displayCookieConsentModal(),setTimeout((()=>{window.cg__checkCookieCategorySession()}),500)},window.onload=()=>{window.cg__displayCookieConsentButton(),window.cg__hasConsentedToCookies()||(window.cg__displayCookieConsentModal(),window.cg__addCustomFontForCookieConsent()),window.cg__initiateCookieCategorySession(),setTimeout((()=>{window.cg__checkCookieCategorySession()}),500)}})()})();