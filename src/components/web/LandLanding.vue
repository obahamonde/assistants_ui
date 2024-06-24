<script setup lang="ts">
const props = defineProps<{
  login: () => any;
}>();
</script>
<template>
  <div class="page-wrapper">
    <div
      data-animation="default"
      class="nav_component w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      role="banner"
      data-no-scroll="1"
      data-duration="400"
      data-doc-height="1"
    >
      <LandPromoBanner :login="props.login" />
      <div class="relative">
        <div class="padding-global">
          <Navbar :login="props.login()" />
        </div>
      </div>
    </div>
  </div>
  <main class="main-wrapper">
    <div class="section_hero gradient-bg-home">
      <LandHero :login="props.login" />
    </div>
    <div id="fold" class="section_logos">
      <LandSponsor />
    </div>
    <div id="enterpretAdvantage" class="section_cta">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-extra-large">
            <div class="cta-card is-centre">
              <div class="cta-card-left"></div>
              <div class="cta-card-right">
                <div class="blue-text">The Indie Experience</div>
                <div class="white-text-for-cta-card top-margin-10">
                  Builders thrive for the best way to achieve their goals, at
                  IndieCloud we provide you with a tailored set of AI tools,
                  which automates and scales your business, augmenting your
                  capabilities so you can focus on what really matters:
                  <strong>Your Growth</strong>
                </div>
                <a
                  href="/"
                  class="button-wrapper-learn-more is-blue top-margin-10 w-inline-block"
                >
                  <div class="get-started-text">Get Started</div>
                  <img
                    src="/mage.png"
                    loading="lazy"
                    alt=""
                    width="16"
                    class="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="divider-line"></div>
      </div>
    </div>
    <section id="fold-2" class="section_features">
      <div id="customerFeedback" class="padding-global">
        <div class="container-large">
          <div class="padding-section-extra-large">
            <h2 class="homepage-h2">
              Leading data convergence and systems integration to get the most
              of Deep Learning Models
            </h2>
            <div class="features-wrapper top-margin-60">
              <LandPortfolio />
            </div>
          </div>
          <div class="divider-line"></div>
        </div>
      </div>
    </section>
    <div class="section_features-2">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-extra-large col">
            <h2 class="homepage-h2">
              Increase your productivity and engage your audience
            </h2>
            <LandFeature />
          </div>
        </div>
      </div>
      <div class="divider-line"></div>
    </div>
    <div class="section_integration">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-extra-large">
            <div class="features-wrapper is-0">
              <LandIntegrations />
            </div>
          </div>
          <div class="divider-line"></div>
        </div>
      </div>
    </div>
    <div class="section_integration">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-extra-large">
            <div class="features-wrapper is-0">
              <LandStandar />
            </div>
          </div>
          <div class="divider-line"></div>
        </div>
      </div>
    </div>
    <div class="section_footer top-border">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-large">
            <div class="footer_wrapper col center">
              <LandFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style global>
:root {
  --accent: 136, 58, 234;
  --accent-light: 224, 204, 250;
  --accent-dark: 49, 10, 101;
  --accent-gradient: linear-gradient(
    45deg,
    rgb(var(--accent)),
    rgb(var(--accent-light)) 30%,
    white 60%
  );
}
html {
  font-family: system-ui, sans-serif;
  background: #13151a;
  background-size: 224px;
}
code {
  font-family:
    Menlo,
    Monaco,
    Lucida Console,
    Liberation Mono,
    DejaVu Sans Mono,
    Bitstream Vera Sans Mono,
    Courier New,
    monospace;
}
@keyframes splide-loading {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
.splide--draggable > .splide__slider > .splide__track,
.splide--draggable > .splide__track {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.splide--fade > .splide__slider > .splide__track > .splide__list,
.splide--fade > .splide__track > .splide__list {
  display: block;
}
.splide--fade
  > .splide__slider
  > .splide__track
  > .splide__list
  > .splide__slide,
.splide--fade > .splide__track > .splide__list > .splide__slide {
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
}
.splide--fade
  > .splide__slider
  > .splide__track
  > .splide__list
  > .splide__slide.is-active,
.splide--fade > .splide__track > .splide__list > .splide__slide.is-active {
  opacity: 1;
  position: relative;
  z-index: 1;
}
.splide--rtl {
  direction: rtl;
}
.splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,
.splide--ttb.is-active > .splide__track > .splide__list {
  display: block;
}
.splide__container {
  box-sizing: border-box;
  position: relative;
}
.splide__list {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  transform-style: preserve-3d;
}
.splide.is-initialized:not(.is-active) .splide__list {
  display: block;
}
.splide__pagination {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  pointer-events: none;
}
.splide__pagination li {
  display: inline-block;
  line-height: 1;
  list-style-type: none;
  margin: 0;
  pointer-events: auto;
}
.splide__progress__bar {
  width: 0;
}
.splide {
  outline: none;
  position: relative;
  visibility: hidden;
}
.splide.is-initialized,
.splide.is-rendered {
  visibility: visible;
}
.splide__slide {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  list-style-type: none !important;
  margin: 0;
  outline: none;
  position: relative;
}
.splide__slide img {
  vertical-align: bottom;
}
.splide__slider {
  position: relative;
}
.splide__spinner {
  animation: splide-loading 1s linear infinite;
  border: 2px solid #999;
  border-left-color: transparent;
  border-radius: 50%;
  bottom: 0;
  display: inline-block;
  height: 20px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
}
.splide__track {
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.splide__track {
  overflow: visible;
}
body {
  -webkit-font-smoothing: antialiased;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: sans-serif;
}

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  vertical-align: baseline;
  display: inline-block;
}

audio:not([controls]) {
  height: 0;
  display: none;
}

[hidden],
template {
  display: none;
}

a {
  background-color: rgba(0, 0, 0, 0);
}

a:active,
a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

h1 {
  margin: 0.67em 0;
  font-size: 2em;
}

mark {
  color: #000;
  background: #ff0;
}

small {
  font-size: 80%;
}

sub,
sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

@font-face {
  font-family: webflow-icons;
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

[class^="w-icon-"],
[class*=" w-icon-"] {
  speak: none;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
  content: "î˜€";
}

.w-icon-slider-left:before {
  content: "î˜";
}

.w-icon-nav-menu:before {
  content: "î˜‚";
}

.w-icon-arrow-down:before,
.w-icon-dropdown-toggle:before {
  content: "î˜ƒ";
}

.w-icon-file-upload-remove:before {
  content: "î¤€";
}

.w-icon-file-upload-icon:before {
  content: "î¤ƒ";
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  color: #333;
  background-color: #fff;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

html.w-mod-touch * {
  background-attachment: scroll !important;
}

.w-block {
  display: block;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.w-clearfix:before,
.w-clearfix:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-clearfix:after {
  clear: both;
}

.w-hidden {
  display: none;
}

.w-button {
  color: #fff;
  line-height: inherit;
  cursor: pointer;
  background-color: #3898ec;
  border: 0;
  border-radius: 0;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;
}

input.w-button {
  -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
  color: rgba(0, 0, 0, 0) !important;
}

.w-code-block {
  margin: unset;
}

pre.w-code-block code {
  all: inherit;
}

.w-webflow-badge,
.w-webflow-badge * {
  z-index: auto;
  visibility: visible;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  float: none;
  clear: none;
  box-shadow: none;
  opacity: 1;
  direction: ltr;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-align: inherit;
  letter-spacing: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-transform: inherit;
  text-shadow: none;
  font-smoothing: auto;
  vertical-align: baseline;
  cursor: inherit;
  white-space: inherit;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  background: none;
  border: 0 rgba(0, 0, 0, 0);
  border-radius: 0;
  margin: 0;
  padding: 0;
  list-style-type: disc;
  transition: none;
  display: block;
  position: static;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
  overflow: visible;
  transform: none;
}

.w-webflow-badge {
  white-space: nowrap;
  cursor: pointer;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.1);
  visibility: visible !important;
  z-index: 2147483647 !important;
  color: #aaadb0 !important;
  opacity: 1 !important;
  width: auto !important;
  height: auto !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  margin: 0 !important;
  padding: 6px !important;
  font-size: 12px !important;
  line-height: 14px !important;
  text-decoration: none !important;
  display: inline-block !important;
  position: fixed !important;
  top: auto !important;
  bottom: 12px !important;
  left: auto !important;
  right: 12px !important;
  overflow: visible !important;
  transform: none !important;
}

.w-webflow-badge > img {
  visibility: visible !important;
  opacity: 1 !important;
  vertical-align: middle !important;
  display: inline-block !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

h2 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid #e2e2e2;
  margin: 0 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 22px;
}

figure {
  margin: 0 0 10px;
}

figcaption {
  text-align: center;
  margin-top: 5px;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}

.w-embed:before,
.w-embed:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-embed:after {
  clear: both;
}

.w-video {
  width: 100%;
  padding: 0;
  position: relative;
}

.w-video iframe,
.w-video object,
.w-video embed {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button,
[type="button"],
[type="reset"] {
  cursor: pointer;
  -webkit-appearance: button;
  border: 0;
}

.w-form {
  margin: 0 0 15px;
}

.w-form-done {
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
}

.w-form-fail {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

.w-input,
.w-select {
  width: 100%;
  height: 38px;
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

.w-input:-moz-placeholder,
.w-select:-moz-placeholder {
  color: #999;
}

.w-input::-moz-placeholder,
.w-select::-moz-placeholder {
  color: #999;
  opacity: 1;
}

.w-input::-webkit-input-placeholder,
.w-select::-webkit-input-placeholder {
  color: #999;
}

.w-input:focus,
.w-select:focus {
  border-color: #3898ec;
  outline: 0;
}

.w-input[disabled],
.w-select[disabled],
.w-input[readonly],
.w-select[readonly],
fieldset[disabled] .w-input,
fieldset[disabled] .w-select {
  cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled),
.w-select[disabled]:not(.w-input-disabled),
.w-input[readonly],
.w-select[readonly],
fieldset[disabled]:not(.w-input-disabled) .w-input,
fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eee;
}

textarea.w-input,
textarea.w-select {
  height: auto;
}

.w-select {
  background-color: #f3f3f3;
}

.w-select[multiple] {
  height: auto;
}

.w-form-label {
  cursor: pointer;
  margin-bottom: 0;
  font-weight: normal;
  display: inline-block;
}

.w-radio {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-radio:before,
.w-radio:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-radio:after {
  clear: both;
}

.w-radio-input {
  float: left;
  margin: 3px 0 0 -20px;
  line-height: normal;
}

.w-file-upload {
  margin-bottom: 10px;
  display: block;
}

.w-file-upload-input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -100;
  position: absolute;
  overflow: hidden;
}

.w-file-upload-default,
.w-file-upload-uploading,
.w-file-upload-success {
  color: #333;
  display: inline-block;
}

.w-file-upload-error {
  margin-top: 10px;
  display: block;
}

.w-file-upload-default.w-hidden,
.w-file-upload-uploading.w-hidden,
.w-file-upload-error.w-hidden,
.w-file-upload-success.w-hidden {
  display: none;
}

.w-file-upload-uploading-btn {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

.w-file-upload-file {
  background-color: #fafafa;
  border: 1px solid #ccc;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  display: flex;
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

.w-file-remove-link {
  width: auto;
  height: auto;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 10px;
  padding: 3px;
  display: block;
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}

.w-file-upload-error-msg {
  color: #ea384c;
  padding: 2px 0;
  display: inline-block;
}

.w-file-upload-info {
  padding: 0 12px;
  line-height: 38px;
  display: inline-block;
}

.w-file-upload-label {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

.w-icon-file-upload-icon,
.w-icon-file-upload-uploading {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

.w-icon-file-upload-uploading {
  height: 20px;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.w-container:before,
.w-container:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-container:after {
  clear: both;
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}

.w-row:before,
.w-row:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-row:after {
  clear: both;
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}

.w-col {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}

.w-col-1 {
  width: 8.33333%;
}

.w-col-2 {
  width: 16.6667%;
}

.w-col-3 {
  width: 25%;
}

.w-col-4 {
  width: 33.3333%;
}

.w-col-5 {
  width: 41.6667%;
}

.w-col-6 {
  width: 50%;
}

.w-col-7 {
  width: 58.3333%;
}

.w-col-8 {
  width: 66.6667%;
}

.w-col-9 {
  width: 75%;
}

.w-col-10 {
  width: 83.3333%;
}

.w-col-11 {
  width: 91.6667%;
}

.w-col-12 {
  width: 100%;
}

.w-hidden-main {
  display: none !important;
}

@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }

  .w-hidden-main {
    display: inherit !important;
  }

  .w-hidden-medium {
    display: none !important;
  }

  .w-col-medium-1 {
    width: 8.33333%;
  }

  .w-col-medium-2 {
    width: 16.6667%;
  }

  .w-col-medium-3 {
    width: 25%;
  }

  .w-col-medium-4 {
    width: 33.3333%;
  }

  .w-col-medium-5 {
    width: 41.6667%;
  }

  .w-col-medium-6 {
    width: 50%;
  }

  .w-col-medium-7 {
    width: 58.3333%;
  }

  .w-col-medium-8 {
    width: 66.6667%;
  }

  .w-col-medium-9 {
    width: 75%;
  }

  .w-col-medium-10 {
    width: 83.3333%;
  }

  .w-col-medium-11 {
    width: 91.6667%;
  }

  .w-col-medium-12 {
    width: 100%;
  }

  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main,
  .w-hidden-medium {
    display: inherit !important;
  }

  .w-hidden-small {
    display: none !important;
  }

  .w-row,
  .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }

  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }

  .w-col-small-1 {
    width: 8.33333%;
  }

  .w-col-small-2 {
    width: 16.6667%;
  }

  .w-col-small-3 {
    width: 25%;
  }

  .w-col-small-4 {
    width: 33.3333%;
  }

  .w-col-small-5 {
    width: 41.6667%;
  }

  .w-col-small-6 {
    width: 50%;
  }

  .w-col-small-7 {
    width: 58.3333%;
  }

  .w-col-small-8 {
    width: 66.6667%;
  }

  .w-col-small-9 {
    width: 75%;
  }

  .w-col-small-10 {
    width: 83.3333%;
  }

  .w-col-small-11 {
    width: 91.6667%;
  }

  .w-col-small-12 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }

  .w-hidden-main,
  .w-hidden-medium,
  .w-hidden-small {
    display: inherit !important;
  }

  .w-hidden-tiny {
    display: none !important;
  }

  .w-col {
    width: 100%;
  }

  .w-col-tiny-1 {
    width: 8.33333%;
  }

  .w-col-tiny-2 {
    width: 16.6667%;
  }

  .w-col-tiny-3 {
    width: 25%;
  }

  .w-col-tiny-4 {
    width: 33.3333%;
  }

  .w-col-tiny-5 {
    width: 41.6667%;
  }

  .w-col-tiny-6 {
    width: 50%;
  }

  .w-col-tiny-7 {
    width: 58.3333%;
  }

  .w-col-tiny-8 {
    width: 66.6667%;
  }

  .w-col-tiny-9 {
    width: 75%;
  }

  .w-col-tiny-10 {
    width: 83.3333%;
  }

  .w-col-tiny-11 {
    width: 91.6667%;
  }

  .w-col-tiny-12 {
    width: 100%;
  }
}

.w-widget {
  position: relative;
}

.w-widget-map {
  width: 100%;
  height: 400px;
}

.w-widget-map label {
  width: auto;
  display: inline;
}

.w-widget-map img {
  max-width: inherit;
}

.w-widget-map .gm-style-iw {
  text-align: center;
}

.w-widget-map .gm-style-iw > button {
  display: none !important;
}

.w-widget-twitter {
  overflow: hidden;
}

.w-widget-twitter-count-shim {
  vertical-align: top;
  width: 28px;
  height: 20px;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  text-align: center;
  color: #999;
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  display: block;
  position: relative;
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before,
.w-widget-twitter-count-shim:not(.w--vertical):after {
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border: solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 50%;
  left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-width: 4px;
  border-color: rgba(117, 134, 150, 0) #5d6c7b rgba(117, 134, 150, 0)
    rgba(117, 134, 150, 0);
  margin-top: -4px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-width: 4px;
  border-color: rgba(255, 255, 255, 0) #fff rgba(255, 255, 255, 0)
    rgba(255, 255, 255, 0);
  margin-top: -4px;
  margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before,
.w-widget-twitter-count-shim.w--vertical:after {
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  border: solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 100%;
  left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-width: 5px;
  border-color: #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
  margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-width: 4px;
  border-color: #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}

.w-background-video {
  height: 500px;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.w-background-video > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -100;
  background-position: 50%;
  background-size: cover;
  margin: auto;
  position: absolute;
  top: -100%;
  bottom: -100%;
  left: -100%;
  right: -100%;
}

.w-background-video > video::-webkit-media-controls-start-playback-button {
  -webkit-appearance: none;
  display: none !important;
}

.w-background-video--control {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

.w-background-video--control > [hidden] {
  display: none !important;
}

.w-slider {
  height: 300px;
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  background: #ddd;
  position: relative;
}

.w-slider-mask {
  z-index: 1;
  height: 100%;
  white-space: nowrap;
  display: block;
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slide {
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
  display: inline-block;
  position: relative;
}

.w-slider-nav {
  z-index: 2;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  margin: auto;
  padding-top: 10px;
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-slider-nav.w-round > div {
  border-radius: 100%;
}

.w-slider-nav.w-num > div {
  width: auto;
  height: auto;
  font-size: inherit;
  line-height: inherit;
  padding: 0.2em 0.5em;
}

.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px rgba(51, 51, 51, 0.4);
}

.w-slider-nav-invert {
  color: #fff;
}

.w-slider-nav-invert > div {
  background-color: rgba(34, 34, 34, 0.4);
}

.w-slider-nav-invert > div.w-active {
  background-color: #222;
}

.w-slider-dot {
  width: 1em;
  height: 1em;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 3px 0.5em;
  transition:
    background-color 0.1s,
    color 0.1s;
  display: inline-block;
  position: relative;
}

.w-slider-dot.w-active {
  background-color: #fff;
}

.w-slider-dot:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
  box-shadow: none;
}

.w-slider-arrow-left,
.w-slider-arrow-right {
  width: 80px;
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: auto;
  font-size: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"],
.w-slider-arrow-right [class^="w-icon-"],
.w-slider-arrow-left [class*=" w-icon-"],
.w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}

.w-slider-arrow-left:focus,
.w-slider-arrow-right:focus {
  outline: 0;
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}

.w-icon-slider-left,
.w-icon-slider-right {
  width: 1em;
  height: 1em;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-slider-aria-label {
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  border: 0;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.w-slider-force-show {
  display: block !important;
}

.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.w-icon-dropdown-toggle {
  width: 1em;
  height: 1em;
  margin: auto 20px auto auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.w-dropdown-list {
  min-width: 100%;
  background: #ddd;
  display: none;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.w-dropdown-link {
  color: #222;
  padding: 10px 20px;
  display: block;
}

.w-dropdown-link.w--current {
  color: #0082f3;
}

.w-dropdown-link:focus {
  outline: 0;
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(0, 0, 0, 0.9);
  outline: 0;
  font-family:
    Helvetica Neue,
    Helvetica,
    Ubuntu,
    Segoe UI,
    Verdana,
    sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-transform: translate(0);
}

.w-lightbox-backdrop,
.w-lightbox-container {
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
}

.w-lightbox-content {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-view {
  width: 100vw;
  height: 100vh;
  opacity: 0;
  position: absolute;
}

.w-lightbox-view:before {
  content: "";
  height: 100vh;
}

.w-lightbox-group,
.w-lightbox-group .w-lightbox-view,
.w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}

.w-lightbox-frame,
.w-lightbox-view:before {
  vertical-align: middle;
  display: inline-block;
}

.w-lightbox-figure {
  margin: 0;
  position: relative;
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}

.w-lightbox-img {
  width: auto;
  height: auto;
  max-width: none;
}

.w-lightbox-image {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}

.w-lightbox-caption {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-lightbox-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-lightbox-control {
  width: 4em;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  transition: all 0.3s;
  position: absolute;
  top: 0;
}

.w-lightbox-left {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0;
  left: 0;
}

.w-lightbox-right {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0;
  right: 0;
}

.w-lightbox-close {
  height: 2.6em;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  right: 0;
}

.w-lightbox-strip {
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
}

.w-lightbox-item {
  width: 10vh;
  box-sizing: content-box;
  cursor: pointer;
  padding: 2vh 1vh;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
  opacity: 0.3;
}

.w-lightbox-thumbnail {
  height: 10vh;
  background: #222;
  position: relative;
  overflow: hidden;
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

.w-lightbox-spinner {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  margin-top: -20px;
  margin-left: -20px;
  animation: 0.8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
}

.w-lightbox-spinner:after {
  content: "";
  border: 3px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: -4px;
  right: -4px;
}

.w-lightbox-hide {
  display: none;
}

.w-lightbox-noscroll {
  overflow: hidden;
}

@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }

  .w-lightbox-view,
  .w-lightbox-view:before {
    height: 96vh;
  }

  .w-lightbox-group,
  .w-lightbox-group .w-lightbox-view,
  .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }

  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }

  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }

  .w-lightbox-left,
  .w-lightbox-right {
    opacity: 0.5;
    display: block;
  }

  .w-lightbox-close {
    opacity: 0.8;
  }

  .w-lightbox-control:hover {
    opacity: 1;
  }
}

.w-lightbox-inactive,
.w-lightbox-inactive:hover {
  opacity: 0;
}

.w-richtext:before,
.w-richtext:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-richtext:after {
  clear: both;
}

.w-richtext[contenteditable="true"]:before,
.w-richtext[contenteditable="true"]:after {
  white-space: initial;
}

.w-richtext ol,
.w-richtext ul {
  overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,
.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after,
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,
.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video > div:after,
.w-richtext figure[data-rt-type="video"] > div:after {
  content: "";
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.w-richtext figure {
  max-width: 60%;
  position: relative;
}

.w-richtext figure > div:before {
  cursor: default !important;
}

.w-richtext figure img {
  width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: 0.6;
}

.w-richtext figure div {
  color: rgba(0, 0, 0, 0);
  font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image,
.w-richtext figure[data-rt-type="image"] {
  display: table;
}

.w-richtext figure.w-richtext-figure-type-image > div,
.w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image > figcaption,
.w-richtext figure[data-rt-type="image"] > figcaption {
  caption-side: bottom;
  display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video,
.w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe,
.w-richtext figure[data-rt-type="video"] iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.w-richtext figure.w-richtext-figure-type-video > div,
.w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}

.w-richtext figure.w-richtext-align-center {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,
.w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before,
.w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  min-width: 200px;
  background: #c8c8c8;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay,
.w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay,
.w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button,
.w--nav-dropdown-open,
.w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before,
.w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide,
.w-dyn-bind-empty,
.w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

:root {
  --dark-bg: #141219;
  --dropdown-list-color: #2d1d34;
  --dropdown-text-hover: #d8d3ff;
  --dropdown-hover-color: #d8d3ff;
  --dropdown-border: rgba(255, 255, 255, 0.1);
  --gradient-color-1: #7286ff;
  --gradient-color-2: #fe7587;
  --hover-button-cta-main: #2d1d34;
  --dropdown-text-hover-bg: rgba(112, 101, 131, 0.4);
  --nav-dropdown-link-icon-bg: #2d1d34;
  --gradient-text: #7186ff;
  --get-started-cta-color: #d220ff;
  --divider: rgba(245, 245, 245, 0.1);
  --footer-color: #1b1724;
  --footer-text: #d8d3ff;
  --form-placeholder-bg-color: rgba(39, 32, 89, 0.1);
  --tabs-dropdown: rgba(39, 32, 89, 0.1);
}

.w-form-formradioinput--inputType-custom {
  width: 12px;
  height: 12px;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.w-form-formradioinput--inputType-custom.w--redirected-focus {
  box-shadow: 0 0 3px 1px #3898ec;
}

.w-form-formradioinput--inputType-custom.w--redirected-checked {
  border-width: 4px;
  border-color: #3898ec;
}

.w-pagination-wrapper {
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
}

.w-pagination-previous {
  color: #333;
  background-color: #fafafa;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 9px 20px;
  font-size: 14px;
  display: block;
}

.w-pagination-previous-icon {
  margin-right: 4px;
}

.w-pagination-next {
  color: #333;
  background-color: #fafafa;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 9px 20px;
  font-size: 14px;
  display: block;
}

.w-pagination-next-icon {
  margin-left: 4px;
}

body {
  background-color: var(--dark-bg);
  color: #fff;
  padding-top: 0;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  line-height: 1.25;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
}

p {
  margin-bottom: 10px;
  font-size: 1.125rem;
  line-height: 1.88889;
}

a {
  color: #fff;
  text-decoration: underline;
}

.container-large {
  width: 100%;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.container-large.is-nav {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  display: flex;
  position: relative;
}

.nav_component {
  background-color: #141219;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.padding-global {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
}

.padding-global.is-features-two-hero {
  padding-right: 0;
}

.padding-global.is-zero {
  padding-left: 0;
  padding-right: 0;
}

.padding-global.is-formsuccess {
  position: relative;
}

.nav_brand-logo-link {
  padding-left: 0;
}

.nav_menu {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: center;
  display: flex;
  position: static;
}

.nav-link {
  color: #fff;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
  font-weight: 500;
  display: flex;
}

.nav-link:hover,
.nav-link.w--current {
  color: var(--dropdown-text-hover);
}

.nav-link.hide-on-tablet-mobile {
  padding-left: 0;
  padding-right: 0;
}

.nav-dropdown-toogle {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  color: #fff;
  cursor: pointer;
  align-items: center;
  padding: 20px 0;
  font-weight: 500;
  display: flex;
}

.nav-dropdown-toogle:hover,
.nav-dropdown-toogle.w--open,
.nav-dropdown-toogle.w--open:hover {
  color: var(--dropdown-hover-color);
}

.nav-dropdown-list {
  border: 1px solid var(--dropdown-border);
  background-color: var(--dropdown-list-color);
  border-radius: 12px;
  display: flex;
}

.nav-dropdown-list.is-customers {
  width: 300px;
  min-width: 100%;
  position: static;
}

.nav-dropdown {
  position: static;
}

.nav-dropdown.is-relative {
  position: relative;
}

.button {
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  color: #fff;
  border-radius: 10rem;
  padding: 2px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
}

.button.no-gradient {
  -webkit-text-fill-color: inherit;
  cursor: pointer;
  object-fit: fill;
  background-image: linear-gradient(to right, #a03d8c, #4c2cca);
  background-clip: border-box;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  position: static;
  top: 46%;
  bottom: auto;
  left: 22%;
  right: auto;
  overflow: hidden;
}

.button.no-gradient.try-enterpret-btn-overlay {
  min-height: auto;
  min-width: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
}

.button-text {
  background-color: var(--dark-bg);
  text-align: center;
  border-radius: 10rem;
  padding: 0.875rem 2.8125rem;
  transition: all 0.2s;
  overflow: hidden;
}

.button-text:hover {
  background-color: var(--hover-button-cta-main);
}

.button-text.extended-size {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
}

.button-text.is-nav {
  padding: 0.875rem 1.875rem;
}

.nav-right-wrapper {
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  align-items: center;
  display: flex;
}

.dropdown-embed {
  width: 9px;
  align-items: center;
  display: flex;
}

.hide-on-tablet-mobile {
  display: block;
}

.nav-dropdown-list-left {
  width: 70%;
  border-right: 1px solid var(--dropdown-border);
  padding: 1.875rem 1.5rem 2.25rem 2rem;
}

.nav-dropdown-list-right {
  width: 30%;
  padding: 1.875rem 2rem 2.25rem 1.5rem;
}

.nav-dropdown-list-right._100 {
  width: 100%;
  padding: 1.5rem 1.125rem;
}

.dropdown-text-title {
  margin-bottom: 1rem;
  font-weight: 700;
}

.dropdown-link-item {
  width: 47%;
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  color: #fff;
  align-items: center;
  padding: 5px;
  text-decoration: none;
  display: flex;
}

.dropdown-link-item:hover {
  background-color: var(--dropdown-text-hover-bg);
  color: var(--dropdown-text-hover);
  border-radius: 12px;
  padding: 5px;
}

.dropdown-link-item.is-solutions {
  width: 100%;
}

.dropdown-link-item-left {
  height: 57px;
  min-width: 57px;
  border: 1px solid var(--dropdown-border);
  background-color: var(--nav-dropdown-link-icon-bg);
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.dropdown-item-title {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  display: flex;
}

.dropdown-item-text {
  opacity: 0.8;
  margin-top: 6px;
  font-size: 0.75rem;
}

.dropdown-flex {
  grid-column-gap: 1.125rem;
  grid-row-gap: 0.875rem;
  flex-wrap: wrap;
  display: flex;
}

.list {
  max-width: 80rem;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 0.5rem;
}

.list.w--open {
  top: 80px;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.list.when-parent-relative.w--open {
  top: 60px;
}

.section_hero.gradient-bg-home {
  background-size: contain;
  position: relative;
}

.padding-section-large {
  z-index: -40;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.padding-section-large.is-home-hero {
  padding-top: 3.5rem;
  padding-bottom: 3rem;
}

.hero_wrapper {
  position: relative;
}

.hero_wrapper.is-features-two {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  overflow: visible;
}

.hero_wrapper.is-about-us {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  overflow: visible;
}

.is-h1 {
  width: 80%;
  margin: 0 auto;
  font-size: 3.75rem;
  line-height: 1.16667;
}

.is-h1.top-margin-20.left-margin-is-0 {
  width: 100%;
  margin-left: 0;
}

.text-is-gradient {
  background-image: linear-gradient(
    to right,
    var(--gradient-text) 11%,
    var(--gradient-color-2)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.homepage-hero-subtext {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  line-height: 1.6;
}

.homepage-hero-subtext.is-footer {
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.homepage-hero-subtext.top-margin-20.left-margin-is-nill {
  width: 100%;
  margin-left: 0;
}

.homepage-hero-subtext.top-margin-16.left-margin-is-zero,
.homepage-hero-subtext.top-margin-10.left-margin-is-zero {
  margin-left: 0;
}

.button-wrapper {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button-wrapper.top-margin-32 {
  margin-top: 2rem;
}

.learn-more-text {
  background-color: rgba(0, 0, 0, 0);
  font-weight: 600;
}

.button-wrapper-learn-more {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  color: #fff;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
}

.button-wrapper-learn-more:hover {
  color: var(--get-started-cta-color);
}

.button-wrapper-learn-more.is-blue {
  color: var(--gradient-color-1);
  transition: all 0.2s;
}

.button-wrapper-learn-more.is-blue:hover {
  color: var(--get-started-cta-color);
}

.button-wrapper-learn-more.is-blue.top-margin-30 {
  order: 0;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
}

.button-wrapper-learn-more.is-hb {
  font-size: 1rem;
}

.button-wrapper-learn-more.is-hb:hover {
  color: #fff;
  text-decoration: underline;
}

.image {
  height: 14px;
}

.image.is-blog {
  width: 14px;
}

.image.is-banner-icon {
  height: 10px;
}

.top-margin-40 {
  margin-top: 2.5rem;
}

.top-margin-36 {
  margin-top: 2.25rem;
}

.absolute-gradient-bg {
  z-index: -1;
  opacity: 0.5;
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650425fd6cfd82111099c926_Blue%20radial.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 596px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.divider-line {
  width: 70%;
  height: 1px;
  background-color: var(--divider);
  margin-left: auto;
  margin-right: auto;
}

.top-margin-80 {
  margin-top: 5rem;
}

.logo_wrapper {
  grid-column-gap: 0.25rem;
  grid-row-gap: 4.5rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-top: 1rem;
  padding-left: 44px;
  padding-right: 44px;
  display: grid;
}

.logo_wrapper.top-margin-40-copy {
  margin-top: 1.5rem;
}

.padding-section-small {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.brand-logo {
  width: 100%;
}

.brand-logo.is-canva {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504358f09d9705903b4e199_image%201%20(1).webp");
  background-size: 100px;
}

.brand-logo.is-descript {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504358f684769cc1204a95b_image%202%20(1).webp");
  background-size: contain;
}

.brand-logo.is-apollo {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504358fa502c008fe94402c_image%203%20(2).webp");
  background-size: contain;
}

.brand-logo.is-arc {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504358fa7b41fb9014cf31f_image%204%20(1).webp");
  background-size: contain;
}

.brand-logo.is-notion {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650435904f17646365713a20_image%205%20(2).webp");
  background-size: contain;
}

.brand-logo.is-loom {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504358f19a422199b8ba3b9_image%206%20(1).webp");
  background-size: contain;
}

.text-medium-16 {
  font-weight: 400;
  line-height: 2;
}

.text-medium-16.is-footer-text {
  text-align: left;
}

.text-medium-16.is-centre {
  text-align: center;
}

.top-margin-130 {
  margin-top: 8.125rem;
}

.top-margin-10 {
  margin-top: 0.625rem;
}

.homepage-big-image {
  height: 298px;
}

.homepage-big-image.hide-on-tablet-mobile.hide {
  display: none;
}

.bottom-padding-70 {
  padding-bottom: 4.375rem;
}

.top-margin-50 {
  margin-top: 3.125rem;
}

.top-margin-70 {
  margin-top: 4.375rem;
}

.padding-130 {
  padding-top: 8.125rem;
  padding-bottom: 8.125rem;
}

.cta-card {
  grid-column-gap: 1.875rem;
  grid-row-gap: 1.875rem;
  display: flex;
}

.cta-card.is-centre {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.cta-card-left {
  min-height: 100%;
  min-width: 6px;
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-radius: 22px;
}

.cta-card-right {
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

.blue-text {
  color: var(--gradient-color-1);
  text-align: left;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.42857;
}

.white-text-for-cta-card {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2;
}

.get-started-text {
  background-color: rgba(0, 0, 0, 0);
  font-size: 1.625rem;
  font-weight: 500;
}

.top-margin-20 {
  margin-top: 1.25rem;
}

.div-block {
  padding-top: 31.25rem;
}

.section_cta.hide-on-tablet-mobile {
  display: block;
}

.section_cta.hide-on-tablet-mobile.hide {
  display: none;
}

.padding-section-extra-large {
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
}

.padding-section-extra-large.relative {
  position: relative;
}

.padding-section-extra-large.is-features-hero {
  padding-bottom: 1.875rem;
}

.padding-section-extra-large.is-features-video {
  padding-top: 2.25rem;
  padding-bottom: 0;
}

.padding-section-extra-large.is-solutions-hero {
  padding-bottom: 1.25rem;
}

.padding-section-extra-large.is-home-lottie {
  padding-top: 3rem;
  padding-bottom: 3.5rem;
}

.padding-section-extra-large.is-home-lottie-embed {
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3.5rem;
  display: flex;
}

.homepage-h2 {
  width: 70%;
  text-align: center;
  margin: 0 auto;
  font-size: 2.25rem;
  line-height: 1.33333;
  display: block;
}

.homepage-h2.top-margin-20 {
  margin-top: 20px;
}

.features-wrapper {
  grid-column-gap: 6.25rem;
  grid-row-gap: 6.25rem;
  flex-direction: column;
  display: flex;
}

.features-wrapper.is-0 {
  margin-top: 0;
}

.features {
  display: flex;
}

.features.is-integration {
  padding-top: 0;
}

.features-left {
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.features-left.is-last {
  order: 1;
}

.features-right {
  width: 60%;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}

.features-right.flip {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65046be143a877d95919d050_Blue%20radial%20(1).webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 596px;
  order: -1;
  justify-content: flex-start;
}

.features-title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.33333;
}

.features-left-bottom {
  grid-column-gap: 1.375rem;
  grid-row-gap: 1.375rem;
  align-items: flex-start;
  display: flex;
}

.features-left-bottom-text {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.77778;
}

.purple-dot {
  min-height: 10px;
  min-width: 10px;
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6504693d5cfe707623b4a9a6_Rectangle%201494.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 10px;
  border-radius: 10rem;
  align-self: auto;
  padding-top: 32px;
}

.feature-left-bottom-wrapp {
  grid-column-gap: 0.625rem;
  grid-row-gap: 0.625rem;
  flex-direction: column;
  display: flex;
}

.footer_wrapper {
  justify-content: space-between;
  display: flex;
}

.footer_wrapper-left {
  width: 40%;
}

.footer_wrapper-right {
  width: 55%;
  grid-column-gap: 6.26rem;
  grid-row-gap: 6.26rem;
  justify-content: flex-end;
  display: flex;
}

.section_footer {
  background-color: var(--footer-color);
}

.top-border {
  border-top: 1px solid var(--dropdown-border);
}

.social-icons-wrapper {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: center;
  display: flex;
}

.footer_wrapper-right-coloumn {
  flex-direction: column;
  display: flex;
}

.footer-items-title {
  margin-bottom: 25px;
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-items {
  color: var(--footer-text);
  margin-bottom: 1.5rem;
  text-decoration: none;
}

.footer_brand-logo-link {
  padding-left: 0;
}

.big-images-on-homepage {
  min-height: 450px;
  object-fit: scale-down;
}

.big-images-on-homepage.is-first {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65057b4f4a3f9d53bff1f37c_Group%201801778.webp");
  background-position: 100%;
  background-size: contain;
}

.big-images-on-homepage.is-second {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65057b4fc53c26b60310d5e1_Group%201801779.webp");
  background-position: 0%;
}

.big-images-on-homepage.is-third {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65057b4f4e646dc8cb221d2c_Group%201801780.webp");
  background-position: 100%;
}

.big-images-on-homepage.is-fourth {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6505a7ee4e646dc8cb3e7151_image%2026.webp");
  background-size: contain;
}

.big-images-on-homepage.is-fifth {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6505a98b053daf876eb2aa9b_Group%201801708.webp");
  background-position: 50%;
  background-size: contain;
}

.big-images-on-homepage.home-security-img {
  margin-top: -58px;
}

.features-3c-wrapper {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.features-2-card-wrapper {
  border-radius: 12px;
}

.features-2-card-wrapper._2-cards-in-a-row {
  width: 100%;
}

.features-2-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.77778;
}

.gradient-for-features {
  min-height: 4px;
  min-width: 100%;
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.features-2-icon {
  max-height: 50px;
  object-fit: contain;
}

.features-2-card-main {
  min-height: 100%;
  border-right: 1px solid var(--dropdown-border);
  border-bottom: 1px solid var(--dropdown-border);
  border-left: 1px solid var(--dropdown-border);
  background-color: var(--footer-color);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.375rem 1.75rem;
  display: flex;
}

.features-2-card-main.is-features-page {
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;
  display: flex;
}

.features-2-card-main.features-page {
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 2.875rem;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  display: flex;
}

.features-2-card-main.is-home {
  justify-content: flex-start;
}

.section_features-2 {
  display: block;
}

.section_features-2.hide {
  display: none;
}

.splide {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.splide.slider1 {
  position: relative;
}

.splide__track {
  width: 100%;
}

.splide__list {
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
}

.splide__slide {
  width: 100%;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6506d20510237164c6100755_%E2%80%9C%20(1).webp");
  background-position: 10%;
  background-repeat: no-repeat;
  background-size: 228px;
  flex-direction: column;
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.profile-wrapper {
  display: flex;
}

.wrapper {
  width: 40%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.testimonial-logo {
  height: 42px;
}

.testimonial {
  width: 70%;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2;
}

.wrapper-right {
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  flex-direction: column;
  display: flex;
}

.profile-pic {
  min-height: 70px;
  min-width: 70px;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50%;
  background-size: cover;
  border-radius: 10rem;
}

.testimonial-name {
  font-size: 1.25rem;
  font-weight: 700;
}

.splide__arrow {
  width: 45px;
  min-height: 2.8125rem;
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6506cf21eea0aedf3589a111_Vector%207%20(Stroke).webp"),
    linear-gradient(135deg, var(--gradient-color-1), #785bef);
  background-position:
    43%,
    0 0;
  background-repeat: no-repeat, repeat;
  background-size: 14px, auto;
  border-radius: 10rem;
}

.splide__arrow.splide__arrow--prev {
  background-position:
    43%,
    0 0;
  position: absolute;
  top: 40%;
  bottom: auto;
  left: 0%;
  right: auto;
}

.splide__arrow.splide__arrow--next {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6506cfd4107238bf78d19cee_Vector%207%20(Stroke)%20(2).webp"),
    linear-gradient(135deg, var(--gradient-color-1), #785bef);
  background-position:
    57%,
    0 0;
  position: absolute;
  top: 40%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.splide__arrows {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  display: flex;
}

.bottom-banner-on-homepage {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6506dd818898be51694f7a75_Union%20(5).webp");
  background-repeat: repeat-y;
  background-size: cover;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  padding: 4.375rem;
  display: flex;
  position: relative;
}

.is-centre {
  text-align: center;
}

.top-margin-16 {
  margin-top: 1rem;
}

.black-cta-banner {
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  background-color: #000;
  border-radius: 10rem;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 3.125rem;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
}

.black-cta-banner:hover {
  background-color: var(--hover-button-cta-main);
}

.black-button-text {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
}

.top-margin-30 {
  margin-top: 1.875rem;
}

.splide__pagination {
  display: none;
}

.splide__pagination__item {
  display: inline-block;
}

.splide__pagination__page {
  display: none;
}

.banner-title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.33333;
}

.banner-subtext {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
}

.banner-subtext.is-footer {
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.footer-gradient {
  z-index: -20;
  height: 400px;
  opacity: 0.3;
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650425fd6cfd82111099c926_Blue%20radial.webp");
  background-position: 50% 10%;
  background-repeat: no-repeat;
  background-size: auto;
  position: absolute;
  bottom: -14%;
  left: 0%;
  right: 0%;
}

.footer-gradient.is-different-absolute-value {
  left: 0%;
  right: 0%;
}

.footer-gradient.is-solutions {
  opacity: 0.4;
}

.dark-bg {
  z-index: 2;
  background-color: var(--dark-bg);
  position: relative;
}

.form-wrapper {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: space-between;
  display: flex;
}

.form-wrapper.form-centre {
  flex-direction: row;
  justify-content: center;
}

.form-wrapper-left {
  width: 40%;
  grid-column-gap: 0.875rem;
  grid-row-gap: 0.875rem;
  flex-direction: column;
  display: flex;
}

.form-wrapper-right {
  width: 50%;
  order: 0;
  display: block;
}

.form-wrapper-right.is-0 {
  margin-top: 0;
}

.form-wrapper-right.is-pricing {
  margin-top: -150px;
}

.form-container {
  border: 1px solid var(--dropdown-border);
  background-color: var(--footer-color);
  border-radius: 4px;
}

.form-heading {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2;
}

.form-question {
  margin-bottom: 0;
  font-weight: 400;
  line-height: 2;
}

.form-answer {
  height: 52px;
  min-height: 32px;
  border: 1px solid var(--dropdown-border);
  background-color: var(--form-placeholder-bg-color);
  color: #fff;
  border-radius: 4px;
}

.form-answer::-ms-input-placeholder {
  color: #fff;
}

.form-answer::placeholder {
  color: #fff;
}

.form-answer.is-text-area {
  height: 75px;
}

.form {
  flex-direction: column;
  align-items: flex-start;
  padding: 1.625rem 2.25rem 2.75rem 1.5rem;
  display: flex;
}

.form-block {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.form-wrapper-left-items {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: flex-start;
  display: flex;
}

.form-items-text {
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 140%;
}

.form-tems-icon {
  height: 18px;
}

.form-tems-icon.blue-icon {
  height: 10px;
}

.form-tems-icon.blue-icon.top-4px,
.form-tems-icon.top-4 {
  margin-top: 4px;
}

.form-page-main-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2.25rem;
  line-height: 1.33333;
}

.form-page-main-heading.is-faq-heading {
  width: 100%;
  text-align: center;
}

.form-page-main-heading.is-40 {
  width: 40%;
}

.faq-container {
  margin-top: 3.75rem;
}

.faq_item {
  width: 100%;
  background-color: var(--footer-color);
  border-radius: 12px 12px 0 0;
  margin-bottom: 1.1em;
  position: relative;
  overflow: hidden;
}

.faq_toggle {
  border-top: 1px solid var(--dropdown-border);
  border-right: 1px solid var(--dropdown-border);
  border-left: 1px solid var(--dropdown-border);
  background-color: var(--footer-color);
  color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem 1.25rem 2.25rem;
  text-decoration: none;
  display: flex;
}

.faq_toggle-text {
  margin-bottom: 0;
  font-size: 1.125rem;
  font-weight: 400;
}

.faq_icon {
  width: 2em;
  height: 2em;
  background-color: var(--footer-color);
  color: #fff;
  border-radius: 10rem;
  flex-direction: column;
  flex: none;
  justify-content: center;
  margin-left: 0;
  transition: transform 0.4s;
  display: flex;
}

.faq_content {
  height: 0;
  border-right: 1px solid var(--dropdown-border);
  border-bottom: 1px solid var(--dropdown-border);
  border-left: 1px solid var(--dropdown-border);
  background-color: var(--footer-color);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  padding-left: 2.3em;
  padding-right: 2.3em;
  position: relative;
  overflow: hidden;
}

.faq_text {
  width: 100%;
  max-width: 40em;
  color: #fff;
  margin-bottom: 1.2em;
}

.faq_div {
  height: 1px;
}

.collection-list {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-direction: column;
  display: flex;
}

.gradient-for-faq-icon {
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-radius: 10rem;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2px;
  display: flex;
}

.get-started-image {
  border: 1px solid var(--dropdown-border);
  border-radius: 4px;
}

.get-started-image.top-margin-10.enterpret-in-action {
  margin-top: 0;
}

.padding-for-logo-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.relative {
  position: relative;
}

.hero-subtext {
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  line-height: 1.6;
}

.hero-subtext.is-footer {
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.required-warning {
  color: red;
  font-size: 1.25rem;
  font-weight: 900;
}

.pricing-small-heading {
  font-size: 1.5rem;
  font-weight: 600;
}

.dropdown-link-item-secondary {
  width: 100%;
  grid-column-gap: 0.625rem;
  grid-row-gap: 0.625rem;
  align-items: center;
  display: flex;
}

.dropdown-link-item-secondary.is-solutions {
  width: 100%;
}

.dropdown-flex-secondary {
  width: 100%;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 5px 13px 5px 5px;
  text-decoration: none;
  display: flex;
}

.dropdown-flex-secondary:hover {
  background-color: var(--dropdown-text-hover-bg);
  color: var(--dropdown-text-hover);
  border-radius: 6px;
}

.dropdown-flex-secondary.radius-12 {
  border-radius: 12px;
}

.dropdown-link-item-left-secondary {
  height: 40px;
  min-width: 40px;
  border: 1px solid var(--dropdown-border);
  background-color: var(--nav-dropdown-link-icon-bg);
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.dropdown-item-image-secondary {
  width: 20px;
}

.dropdown-item-icon {
  height: 12px;
}

.dropdown-flex-container {
  grid-column-gap: 1.125rem;
  grid-row-gap: 0.875rem;
  flex-direction: column;
  display: flex;
}

.gradient-bg-home {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650425fd6cfd82111099c926_Blue%20radial.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 596px;
}

.grey-layer {
  background-color: rgba(20, 18, 25, 0.7);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.grey-layer.is-security {
  background-color: rgba(20, 18, 25, 0.4);
}

.dropdown-link-item-copy {
  width: 47%;
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  align-items: center;
  padding: 5px;
  display: flex;
}

.dropdown-link-item-copy:hover {
  background-color: var(--dropdown-text-hover-bg);
  color: var(--dropdown-text-hover);
  border-radius: 12px;
  padding: 5px;
}

.dropdown-link-item-copy.is-solutions {
  width: 100%;
}

.dropdown-link-item-2 {
  width: 100%;
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  align-items: center;
  padding: 5px;
  display: flex;
}

.dropdown-link-item-2:hover {
  color: var(--dropdown-text-hover);
}

.dropdown-link-item-2.is-solutions {
  width: 100%;
}

.features-image {
  width: 90px;
  object-fit: cover;
}

.top-margin-60 {
  margin-top: 3.75rem;
}

.video-player {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
}

.banner-image-absolute-one {
  position: absolute;
  top: -18%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.banner-image-absolute-secondary {
  position: absolute;
  top: auto;
  bottom: -18%;
  left: 0%;
  right: auto;
}

.features-2-card-bottom {
  justify-content: center;
  display: flex;
}

.padding-blog-hero {
  padding-top: 6.25rem;
  padding-bottom: 0;
}

.blog-hero-heading {
  font-size: 3.25rem;
  line-height: 1.34615;
}

.blog-hero-heading.is-centre {
  margin-left: auto;
  margin-right: auto;
}

.blog-hero-subtext {
  font-size: 1.25rem;
  line-height: 1.6;
}

.blog-hero-subtext.is-centre.top-margin-30,
.blog-hero-subtext.is-centre.top-margin-20 {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.featured-blog-wrapper {
  background-color: var(--footer-color);
  color: #fff;
  border-radius: 12px;
  justify-content: center;
  text-decoration: none;
  display: flex;
  overflow: hidden;
}

.featured-blog-wrapper.top-margin-60 {
  transition: transform 0.2s;
}

.featured-blog-wrapper.top-margin-60:hover {
  transform: scale(1.03);
}

.featured-blog-wrapper-left {
  width: 50%;
  min-height: 360px;
  background-image: none;
  background-repeat: repeat;
  background-size: auto;
}

.featured-blog-wrapper-right {
  width: 50%;
  max-height: 360px;
  border-top: 1px solid var(--divider);
  border-right: 1px solid var(--divider);
  border-bottom: 1px solid var(--divider);
  border-radius: 12px;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.6rem 2.125rem;
  display: flex;
}

.featured-blog-title {
  font-size: 2.125rem;
  font-weight: 700;
}

.featured-blog-title.top-margin-20 {
  margin-top: 0.625rem;
  font-size: 1.8rem;
}

.featured-blog-description {
  line-height: 2.25;
}

.featured-blog-description.top-margin-10 {
  line-height: 1.8;
}

.featured-blog-description.top-margin-10.truncate {
  white-space: normal;
  overflow-wrap: normal;
  object-fit: fill;
  overflow: hidden;
}

.image-2 {
  width: 100%;
  height: 100%;
  max-height: 360px;
  max-width: 100%;
  aspect-ratio: auto;
  object-fit: cover;
}

.cms-tab {
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 0 4px;
  font-size: 1rem;
  font-weight: 700;
}

.cms-tab.w--current {
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  color: var(--gradient-color-1);
  -webkit-text-fill-color: inherit;
  background-clip: padding-box;
  padding: 0 0 2px;
}

.tab-text {
  background-color: var(--dark-bg);
  padding: 12px 1.875rem;
}

.tab-menu {
  grid-row-gap: 0.625rem;
  border-bottom: 1px solid var(--divider);
  flex-flow: wrap;
  display: flex;
}

.tabs-cms-content {
  grid-column-gap: 1.875rem;
  grid-row-gap: 1.875rem;
  margin-top: 3.75rem;
}

.blog-card {
  min-height: 100%;
  border: 1px solid var(--divider);
  border-radius: 12px;
  flex-direction: column;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  overflow: hidden;
}

.blog-card:hover {
  background-color: var(--hover-button-cta-main);
  border-color: rgba(245, 245, 245, 0.2);
}

.tabs-collection-list {
  grid-column-gap: 1.875rem;
  grid-row-gap: 1.875rem;
  flex-wrap: wrap;
  display: flex;
}

.blog-card-bottom {
  min-height: 100%;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 1.25rem 2.125rem 1.25rem 1.75rem;
  display: flex;
}

.blog-card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.blog-category {
  color: var(--footer-text);
  font-size: 0.875rem;
}

.blog-card-heading {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
}

.collection-item {
  width: 31%;
  min-height: 100%;
  border-radius: 12px;
}

.blog-date {
  color: var(--footer-text);
  margin-top: 1.25rem;
  font-size: 0.875rem;
}

.subscribe-banner {
  width: 80%;
  border: 1px solid var(--divider);
  border-radius: 4px 4px 12px 12px;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.subscribe-banner._100 {
  width: 100%;
}

.subscribe-container {
  width: 100%;
  background-color: var(--footer-color);
  border-radius: 4px 4px 12px 12px;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2.5rem;
  display: flex;
}

.subscribe-title {
  font-size: 1.5rem;
  line-height: 1.33333;
}

.subscribe-form-container {
  grid-column-gap: 1.25rem;
  align-items: center;
  display: flex;
}

.subscribe-email-input {
  height: 100%;
  min-width: 18.75rem;
  border: 1px solid var(--divider);
  color: #fff;
  background-color: rgba(39, 32, 89, 0.1);
  border-radius: 10rem;
  margin-bottom: 0;
  padding: 0.875rem 2rem;
}

.subscribe-email-input::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.subscribe-email-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.dropdown-tabs {
  border: 1px solid var(--divider);
  background-color: var(--tabs-dropdown);
  border-radius: 12px;
  justify-content: space-between;
  padding: 1.5rem;
  display: none;
}

.dropdown-icon {
  height: 0.875rem;
}

.padding-hero-blogs-inner {
  padding: 3.75rem 1rem;
}

.blog-image-big {
  width: 100%;
  border-radius: 12px;
}

.blog-inner-right-content {
  width: 80%;
}

.blog-author-card {
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  align-items: center;
  display: flex;
}

.blog-author-card-right {
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  flex-direction: column;
  display: flex;
}

.blog-author-card-left {
  border: 1px solid var(--divider);
  border-radius: 10rem;
}

.author-image {
  width: 50px;
  object-fit: cover;
}

.author-name {
  font-size: 1.25rem;
}

.author-designation {
  font-size: 0.875rem;
}

.blog-inner-content-strip {
  justify-content: space-between;
  display: flex;
}

.blog-inner-publish-date {
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  align-items: center;
  display: flex;
}

.publish-image {
  width: 18px;
  height: 18px;
}

.padding-for-blog-template {
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
}

.blog-social-share-wrapper {
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  display: flex;
}

.social-share {
  border: 1px solid var(--divider);
  border-radius: 10rem;
  padding: 1.875rem;
}

.social-share.is-twitter {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650e12d5e2e089add52e649b_Vector%20(43).webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 11px;
}

.social-share.is-facebook {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650e12d415550cf266366607_Fill%2016.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 11px;
}

.social-share.is-linkedin {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650e12d4be7d6832b5076bdd_Group%201800370.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 19px;
}

.social-share-wrapper-div {
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  flex-direction: column;
  display: flex;
}

.collection-item-2 {
  width: 32%;
}

.collection-list-2 {
  grid-column-gap: 1.75rem;
  grid-row-gap: 1.75rem;
  display: flex;
}

.h3 {
  font-size: 1.5rem;
  line-height: 2;
}

.features-page-right {
  width: 85%;
}

.cms-richtext li {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
}

.cms-richtext a {
  color: var(--gradient-color-1);
}

.cms-richtext h2,
.cms-richtext h3,
.cms-richtext h4,
.cms-richtext h5,
.cms-richtext h6 {
  margin-top: -9rem;
  padding-top: 9rem;
}

.cms-richtext.changelog {
  padding-bottom: 2rem;
}

.breadcrumbs-wrapper {
  grid-column-gap: 0.7rem;
  grid-row-gap: 0.7rem;
  align-items: center;
  text-decoration: none;
  display: flex;
}

.breadcrumbs-wrapper.changelog {
  margin-bottom: 2rem;
}

.breadcrumb-arrow {
  height: 12px;
}

.breadcrumb-arrow.rotate {
  transform: rotate(-180deg);
}

.breadcrumb-text {
  color: #7286ff;
  text-decoration: none;
}

.breadcrumb-text.is-integration {
  color: #fff;
  font-size: 1.125rem;
}

.breadcrumb-text.is-18px {
  font-size: 1.125rem;
}

.button-text-news-letter {
  background-color: var(--dark-bg);
  text-align: center;
  border-radius: 10rem;
  padding: 0.75rem 2.8125rem;
  transition: background-color 0.2s;
}

.button-text-news-letter:hover {
  background-color: #201d28;
}

.button-text-news-letter.extended-size {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
}

.button-text-news-letter.is-nav {
  padding: 0.875rem 1.875rem;
}

.blog-inner-wrapper {
  grid-column-gap: 3.75rem;
  grid-row-gap: 3.75rem;
  display: flex;
}

.blog-inner-left {
  width: 30%;
  order: -1;
}

.fs-toc_link-content {
  width: 100%;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 20px;
  text-decoration: none;
  position: -webkit-sticky;
  position: sticky;
  top: 9rem;
}

.is-hundred-percent {
  width: 100%;
}

.features-page-left {
  width: 20%;
}

.fs-toc_link {
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  display: inline-block;
}

.fs-toc_link:hover,
.fs-toc_link.w--current {
  color: var(--gradient-color-1);
}

.fs-toc_link.is-h3 {
  margin-left: 10px;
  padding-left: 0;
}

.fs-toc_link.is-h4 {
  margin-left: 20px;
}

.fs-toc_link.is-h5 {
  padding-left: 30px;
}

.fs-toc_link.is-h6 {
  padding-left: 40px;
}

.hero-wrapper-left {
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}

.hero-wrapper-right {
  z-index: 1;
  width: 45%;
  flex: 1;
  position: relative;
}

.is-h1-features-two {
  margin-top: 10px;
  font-size: 3.25rem;
  line-height: 1.34615;
}

.hero-img {
  z-index: 3;
  position: relative;
}

.is-heading-small-feature2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2;
}

.integrations-cms-wrapper {
  grid-column-gap: 3.75rem;
  grid-row-gap: 3.75rem;
  justify-content: space-between;
  display: flex;
  position: relative;
}

.integration-filter {
  width: 20%;
}

.integrations-main {
  margin-top: -5.5rem;
  margin-bottom: 7.5rem;
}

.integrations-cms {
  margin-bottom: -12.5rem;
  padding-top: 10rem;
  padding-bottom: 5rem;
}

.featured-list {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.featured-cms {
  background-color: var(--footer-color);
  border-radius: 12px;
  flex-direction: column;
  align-items: stretch;
  padding: 1.25rem 1.875rem 2.5rem;
  display: flex;
}

.featured-cms-top {
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.featured-cms-icon {
  width: 12px;
}

.featured-cms-text {
  color: var(--gradient-color-1);
  letter-spacing: 3px;
  font-size: 0.625rem;
  font-weight: 600;
}

.featured-cms-gradient {
  min-height: 100%;
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-radius: 12px;
  padding: 1px;
  text-decoration: none;
  transition: transform 0.2s;
  display: flex;
}

.featured-cms-gradient:hover {
  transform: scale(1.03);
}

.featured-item {
  min-height: 100%;
}

.featured-list-wrapper.top-24px {
  margin-top: 1.5rem;
}

.integration-logo-small {
  width: 50px;
  height: 2.5rem;
  object-fit: contain;
}

.featured-cms-description-small {
  font-size: 0.875rem;
  line-height: 1.71429;
}

.featured-cms-description-small.top-12 {
  margin-top: 0.75rem;
}

.featured-cms-description-small.top-14px {
  margin-top: 0.875rem;
}

.featured-cms-collection-heading {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-items: center;
  display: flex;
}

.featured-collection-heading {
  font-size: 1.25rem;
  font-weight: 700;
}

.cms-integration-container {
  min-height: 100%;
  border: 1px solid var(--divider);
  background-color: var(--footer-color);
  border-radius: 12px;
  padding: 30px;
  text-decoration: none;
  position: relative;
}

.cms-integration-container:hover {
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.02)
  );
  border-color: rgba(245, 245, 245, 0.2);
}

.cms-integration-container.is-integration-template {
  width: 31%;
}

.integration-list-wrapper {
  flex-wrap: wrap;
}

.integration-list-wrapper.top-24px {
  margin-top: 1.5rem;
}

.cms-integration-container-top {
  grid-column-gap: 14px;
  grid-row-gap: 14px;
  align-items: center;
  display: flex;
}

.integration-cms-name {
  font-weight: 700;
  line-height: 1.5;
}

.integrations-list {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.top-margin-24 {
  margin-top: 1.5rem;
}

.integration-filter-container {
  width: 20%;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  flex-direction: column;
  display: flex;
}

.integration-filter-flex {
  grid-column-gap: 1.125rem;
  grid-row-gap: 1.125rem;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
}

.integration-filter-flex:hover {
  color: var(--gradient-color-1);
}

.integration-filter-flex.w--current {
  color: var(--gradient-color-1);
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65181ccc4cf3869a52d26a70_Rectangle%201570.webp");
  background-position: 0%;
  background-repeat: no-repeat;
  background-size: 8px;
}

.integration-active-gradient {
  width: 8px;
  height: 40px;
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  opacity: 0;
  border-radius: 10rem;
  display: none;
}

.hide {
  display: none;
}

.integration-list {
  flex-direction: column;
  display: flex;
}

.layer {
  z-index: 2;
  background-color: rgba(20, 18, 25, 0.4);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.searhfield {
  min-height: 50px;
  background-color: var(--footer-color);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  margin-bottom: 0;
}

.searhfield::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  line-height: 2;
}

.searhfield::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  line-height: 2;
}

.search-field-container {
  border: 1px solid var(--divider);
  background-color: var(--footer-color);
  border-radius: 4px;
  align-items: center;
  padding-left: 16px;
  display: flex;
}

.search-icon {
  width: 16px;
  height: 16px;
  order: -1;
}

.integrations-hero-icon {
  width: 90px;
  height: 90px;
}

.integration-outer-wrapper {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  position: relative;
}

.integration-logo-big {
  width: 50px;
  height: 2.5rem;
}

.integration-logo-big.top-margin-30 {
  width: auto;
}

.filter-wrapper {
  width: 20%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-direction: column;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 155px;
}

.integrations-template-wrapper {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  justify-content: space-between;
  display: flex;
}

.integration-template-wrapper-left {
  width: 30%;
}

.integration-template-wrapper-right {
  width: 70%;
}

.integration-info-card {
  border: 1px solid var(--divider);
  background-color: var(--footer-color);
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.5rem 2rem;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 146px;
}

.integration-image-flex {
  height: 54px;
  justify-content: center;
  display: flex;
}

.integration-info-top {
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  flex-direction: column;
  display: flex;
}

.integration-info-card-text {
  font-size: 0.875rem;
  line-height: 1.71429;
}

.integration-info-card-middle {
  grid-column-gap: 0.625rem;
  grid-row-gap: 0.625rem;
  flex-direction: column;
  margin-top: 1.25rem;
  display: flex;
}

.integration-infor-card-link {
  color: var(--gradient-color-1);
  font-weight: 700;
  text-decoration: none;
}

.integration-inside-big-image {
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.divider-integration-info {
  width: 20%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10rem;
  margin-top: 1.25rem;
}

.integration-info-wrapper {
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}

.integration-related-flex {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
  display: flex;
}

.related-integration-text {
  font-size: 1.25rem;
  font-weight: 700;
}

.collection-list-3 {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-wrap: wrap;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.intergration-list-top {
  width: 80%;
}

.integrations-list-searcheable {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.ig-filter-form-block {
  width: 100%;
}

.bottom-padding-100 {
  padding-bottom: 6.25rem;
}

.custom-filter,
.integration-dd-filter {
  display: none;
}

.dropdown-toggle {
  color: #fff;
}

.select-field.hide,
.collection-list-wrapper {
  display: none;
}

.dropdown-link {
  color: #fff;
}

.lottie {
  height: 300px;
}

.beta {
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-radius: 2px;
  padding: 2px 4px;
  font-size: 0.625rem;
  font-weight: 600;
}

.about-us-hero-text {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2;
}

.about-us-hero-text.is-bold {
  font-size: 1.5rem;
  font-weight: 700;
}

.team-image {
  width: 100%;
}

.join-us-wrapper {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.join-us-text {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.33333;
}

.investor-wrapper {
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
}

.investor-logo-wrapper {
  grid-column-gap: 4.75rem;
  grid-row-gap: 4.75rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.padding-aboutus-page {
  padding-top: 6.25rem;
  padding-bottom: 2.875rem;
}

.values-wrapper-top {
  grid-column-gap: 0.875rem;
  grid-row-gap: 0.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.value-text {
  width: 50%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  line-height: 2;
}

.values-bottom {
  grid-column-gap: 1.625rem;
  grid-row-gap: 1.625rem;
  margin-top: 2.5rem;
  display: flex;
}

.values {
  width: 100%;
  background-color: var(--footer-color);
  border-radius: 12px;
  flex-direction: column;
  padding: 3.75rem 2rem;
  display: flex;
}

.values-gradient {
  min-height: 100%;
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-radius: 12px;
  padding: 1px;
  display: flex;
}

.value-holder {
  width: 32%;
  min-height: 100%;
}

.value-title {
  margin-top: 1.5rem;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.33333;
}

.value-paragraph {
  margin-top: 10px;
  font-size: 1.25rem;
  line-height: 2;
}

.value-paragraph.is-principle {
  margin-top: 2px;
}

.pricniples-wrapper {
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
}

.pricliples-left {
  width: 37%;
  position: -webkit-sticky;
  position: sticky;
  top: 138px;
}

.pricliples-right {
  width: 56%;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-direction: column;
  display: flex;
}

.pricniple-holder {
  border: 1px solid var(--divider);
  background-color: var(--footer-color);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 2.5rem 2rem 3.125rem 1.5rem;
}

.principle-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2;
}

.principles-gradient {
  background-image: linear-gradient(
    to bottom,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  border-radius: 12px;
  padding-left: 8px;
}

.team-wrapper {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
}

.team-profile {
  min-height: 100%;
  border: 1px solid var(--divider);
  background-color: var(--footer-color);
  border-radius: 12px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2.25rem;
  display: flex;
}

.team-list {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.team-list-wrapper {
  margin-top: 2.5rem;
}

.team-name {
  text-align: center;
  margin-top: 0.625rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 2.66667;
}

.team-role {
  text-align: center;
  font-size: 0.875rem;
}

.social-wrapper {
  width: 100%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: center;
  margin-top: 20px;
  display: flex;
}

.team-social {
  width: 22px;
  height: 22px;
}

.team-social.is-github {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6520235da1d5a86bd3b8218c_team-github.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
}

.team-social.is-linkedin {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6520235e4f1d6877e14cccf0_team-linkedin.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
}

.team-social.is-twitter {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6520235d1194e6fc6b913c81_team-twitter.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
}

.team-profile-image {
  width: 190px;
  height: 190px;
  object-fit: contain;
  background-color: #5f5b71;
  border-radius: 10rem;
}

.job-heading-wrapper {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.section-open-roles {
  margin-top: -4rem;
  padding-top: 4rem;
}

.open-roles-wrapper {
  margin-top: 2.5rem;
}

.role-container {
  grid-column-gap: 0.875rem;
  grid-row-gap: 0.875rem;
  border: 1px solid var(--divider);
  background-color: var(--footer-color);
  border-radius: 12px;
  flex-direction: column;
  padding: 1.25rem 2.25rem 1.25rem 2rem;
  text-decoration: none;
  display: flex;
}

.role-bottom {
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  align-items: center;
  margin-top: 8px;
  display: flex;
}

.role-name {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2;
}

.job-role {
  font-size: 1.25rem;
  line-height: 2;
}

.collection-list-4 {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-direction: column;
  display: flex;
}

.divider-line-100 {
  width: 100%;
  height: 1px;
  background-color: var(--divider);
  margin-left: auto;
  margin-right: auto;
}

.role-bottom-left,
.role-bottom-right {
  grid-column-gap: 0.625rem;
  grid-row-gap: 0.625rem;
  align-items: center;
  display: flex;
}

.collection-item-4 {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.gradient-for-about-us {
  z-index: -1;
  opacity: 0.4;
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650425fd6cfd82111099c926_Blue%20radial.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: -20%;
  bottom: -20%;
  left: 0%;
  right: 0%;
}

.dropdown-list.w--open {
  color: #fff;
  background-color: #222027;
  border-radius: 4px;
}

.section_richtext.gradient-bg-home {
  background-size: contain;
  position: relative;
}

.richtext.max-width-828 {
  max-width: 828px;
  margin-left: auto;
  margin-right: auto;
}

.section_security {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/6518c9f8d7b5bcebcf059562_Rectangle%209.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}

.table-of-content-text {
  color: var(--footer-text);
  letter-spacing: 4px;
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  font-weight: 700;
}

.calendly_wrapper {
  border-radius: 1.25rem;
  overflow: hidden;
}

.header-banner {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  text-align: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  position: relative;
}

.header-banner.hide {
  display: none;
}

.features-wrapper-copy {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.features-wrapper-copy.top-margin-60 {
  grid-template-columns: 1fr 1fr;
}

.text-field,
.text-field-2 {
  display: none;
}

.text-block {
  font-size: 1rem;
}

.utility-page-wrap {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.utility-page-content {
  width: 260px;
  text-align: center;
  flex-direction: column;
  display: flex;
}

._404-heading {
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  text-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: 0;
  font-size: 200px;
  line-height: 140%;
}

.success-message {
  background-color: rgba(0, 0, 0, 0);
}

.image-3 {
  min-height: 2.5px;
}

.error-message {
  color: var(--dark-bg);
}

.success-state {
  border: 1px solid var(--gradient-color-1);
  background-color: rgba(221, 221, 221, 0);
  border-radius: 8px;
}

.nav-dropdown-list_product {
  display: none;
  position: absolute;
  top: 64px;
}

.div-block-5 {
  height: 100%;
}

.product-dropdown {
  align-items: center;
  display: flex;
}

.form-success {
  z-index: 9999;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.popup-close {
  width: 45px;
  height: 45px;
  position: absolute;
  top: -60px;
  bottom: auto;
  left: auto;
  right: -60px;
}

.hb-close {
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  bottom: auto;
  left: auto;
  right: 2vw;
  transform: translate(0, -50%);
}

.features-2c-wrapper {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  flex-wrap: wrap;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.lottie-embed {
  width: 100%;
  max-width: 1104px;
}

.no-results-filter {
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  flex-direction: row;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  transform: translate(0, -75%);
}

.changelog-hero-img {
  width: 100%;
}

.subtext {
  font-size: 1.25rem;
  line-height: 1.6;
}

.subtext.is-footer {
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.subtext.top-margin-20.left-margin-is-nill {
  width: 100%;
  margin-left: 0;
}

.subtext.top-margin-16.left-margin-is-zero,
.subtext.top-margin-10.left-margin-is-zero {
  margin-left: 0;
}

.integration-dd-filter-copy {
  width: 100%;
  margin-bottom: 2rem;
}

.changelog-dropdown-toggle {
  width: 100%;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
}

.changelog-list {
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.changelog-card {
  background-color: #1b1724;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.changelog-img {
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.changelog-img:hover {
  transform: scale(1.05);
}

.changelog-content-container {
  padding: 1.5rem;
}

.changelog-heading {
  font-size: 2rem;
  line-height: 1.4;
}

.changelog-richtext h2 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.3;
}

.changelog-richtext p {
  margin-bottom: 0.6rem;
  font-size: 1rem;
  line-height: 1.5;
}

.month-filter-list {
  max-height: 50vh;
  flex-direction: column;
  display: flex;
  overflow: auto;
}

.collection-list-wrapper-2 {
  max-height: 50vh;
}

.changelog-filter-radio {
  grid-column-gap: 1.125rem;
  grid-row-gap: 1.125rem;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
}

.changelog-filter-radio:hover {
  color: var(--gradient-color-1);
}

.changelog-filter-radio.w--current {
  color: var(--gradient-color-1);
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65181ccc4cf3869a52d26a70_Rectangle%201570.webp");
  background-position: 0%;
  background-repeat: no-repeat;
  background-size: 8px;
}

.changelog-filter-text {
  margin-bottom: 0;
}

.changelog-filter-wrapper {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-direction: column;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 168px;
}

.intergration-list-top-copy {
  width: 80%;
}

.changelog-outer-wrapper {
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-rows: auto;
  grid-template-columns: 0.25fr 0.75fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: flex-start;
  display: grid;
  position: relative;
}

.changelog-filter-flex {
  align-items: center;
  margin-bottom: 0;
  padding: 0.75rem 1.2rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
}

.changelog-filter-flex:hover {
  color: var(--gradient-color-1);
}

.changelog-filter-flex.w--current {
  color: var(--gradient-color-1);
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65181ccc4cf3869a52d26a70_Rectangle%201570.webp");
  background-position: 0%;
  background-repeat: no-repeat;
  background-size: 8px;
}

.changelog-no-results {
  width: 100%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
}

.changelog-link {
  text-decoration: none;
}

.filter-by-text {
  color: #d8d3ff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  font-size: 0.875rem;
}

.changelog-img-link {
  width: 100%;
  overflow: hidden;
}

.product-hunt-embed {
  margin-top: 2rem;
}

.collection-list-wrapper-3 {
  width: 100%;
}

.snackbar-link {
  background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/651968a59b6ee8bb72ecc5df_Group%201801803%20(1).webp");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: 12px;
  padding-right: 17px;
}

.dropdown-pointer {
  z-index: 1;
  width: 20px;
  height: 20px;
  border-top: 1px solid var(--dropdown-border);
  border-left: 1px solid var(--dropdown-border);
  background-color: var(--dropdown-list-color);
  border-radius: 4px;
  display: none;
  position: absolute;
  top: auto;
  bottom: -31%;
  left: 50%;
  right: auto;
  transform: translate(-50%) rotate(45deg);
}

.dropdown-pointer-cover {
  z-index: 3;
  width: 2px;
  height: 120%;
  background-color: var(--dropdown-list-color);
  position: absolute;
  top: 50%;
  bottom: auto;
  left: 50%;
  right: auto;
  transform: translate(-50%) rotate(45deg);
}

.text-block-2 {
  font-weight: 500;
}

.filter-radio-icon {
  width: 100%;
  height: 4px;
  background-image: linear-gradient(
    to right,
    var(--gradient-color-1),
    var(--gradient-color-2)
  );
  opacity: 0;
  border-style: none;
  border-radius: 0%;
  order: 1;
  margin-top: 6px;
  margin-left: 0;
  transition: opacity 0.2s;
}

.filter-radio-icon.w--redirected-checked {
  width: 100%;
  height: 2px;
  opacity: 1;
}

.filter-radio-icon.w--redirected-focus {
  box-shadow: none;
}

.filter-radio-button {
  text-align: center;
  flex-direction: column;
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
}

.filter-collection-list {
  display: flex;
}

.filter-form {
  justify-content: center;
  display: flex;
}

.card-description {
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.4;
}

.card-profile-container {
  grid-column-gap: 0.875rem;
  grid-row-gap: 0.875rem;
  align-items: center;
  margin-top: 2rem;
  display: flex;
}

.card-person-img {
  width: 40px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
}

.filter-form-wrapper {
  margin-bottom: 3.75rem;
}

.filter-radio-text {
  margin-bottom: 0;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
}

.template-person-img {
  width: 80px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.template-person-wrapper {
  text-align: center;
  flex-direction: column;
  align-items: center;
  display: flex;
}

.tempalte-person-name {
  margin-bottom: 0.4rem;
  font-weight: 500;
}

.tempalte-person-designation {
  opacity: 0.75;
  font-size: 0.875rem;
}

.purple-text {
  color: var(--gradient-text);
}

.related-items {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.div-block-6 {
  position: relative;
}

@media screen and (min-width: 1440px) {
  .dropdown-link-item:hover,
  .dropdown-link-item-copy:hover {
    background-color: var(--dropdown-text-hover-bg);
    color: var(--dropdown-text-hover);
  }
}

@media screen and (max-width: 991px) {
  .container-large.is-nav {
    position: static;
  }

  .nav_component {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  .padding-global.is-features-two-hero {
    padding-right: 3.75rem;
  }

  .nav_menu {
    width: 100vw;
    height: 100vh;
    background-color: var(--dropdown-list-color);
    padding-top: 2.5rem;
    padding-left: 3.75rem;
    padding-right: 3.75rem;
    position: absolute;
    overflow: auto;
  }

  .nav_menu.custom-padding {
    padding-top: 0;
  }

  .nav-link {
    color: #fff;
  }

  .nav-dropdown-list {
    flex-direction: column;
    position: static;
  }

  .nav-dropdown-list.is-customers {
    width: auto;
  }

  .nav-dropdown,
  .button._100,
  .button-text._100 {
    width: 100%;
  }

  .nav-right-wrapper {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
  }

  .hide-on-tablet-mobile {
    display: none;
  }

  .nav-dropdown-list-left,
  .nav-dropdown-list-right {
    width: 100%;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .list {
    align-items: flex-start;
    padding-bottom: 0.625rem;
  }

  .menu-button {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    display: flex;
  }

  .menu-button.w--open {
    background-color: var(--dropdown-list-color);
  }

  .menu-lines {
    background-color: #fff;
  }

  .section_hero.gradient-bg-home {
    background-size: contain;
  }

  .padding-section-large {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;
  }

  .hero_wrapper.is-features-two {
    grid-column-gap: 3.75rem;
    grid-row-gap: 3.75rem;
    flex-direction: column;
  }

  .hero_wrapper.is-about-us {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: column;
  }

  .is-h1 {
    width: 100%;
  }

  .homepage-hero-subtext.top-margin-10.left-margin-is-zero {
    text-align: left;
  }

  .button-wrapper-learn-more.is-blue.top-margin-40 {
    margin-top: 1.25rem;
  }

  .gradient-bg {
    background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/650425fd6cfd82111099c926_Blue%20radial.webp");
    background-position: 50%;
    background-size: cover;
  }

  .absolute-gradient-bg {
    background-size: contain;
  }

  .top-margin-80 {
    margin-top: 3.125rem;
  }

  .logo_wrapper {
    grid-column-gap: 5.75rem;
    grid-row-gap: 1.25rem;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
  }

  .brand-logo.is-descript {
    background-size: 107px;
  }

  .brand-logo.is-apollo {
    background-size: 102px;
  }

  .top-margin-130 {
    margin-top: 4.375rem;
  }

  .padding-130 {
    padding-top: 0;
    padding-bottom: 4.25rem;
  }

  .cta-card {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }

  .cta-card.is-centre {
    width: 100%;
  }

  .white-text-for-cta-card {
    line-height: 1.58333;
  }

  .padding-section-extra-large {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;
  }

  .padding-section-extra-large.hide {
    display: none;
  }

  .homepage-h2 {
    width: 100%;
  }

  .homepage-h2.is-about {
    font-size: 1.5rem;
  }

  .features-wrapper {
    grid-column-gap: 6.25rem;
    grid-row-gap: 6.25rem;
  }

  .features {
    grid-column-gap: 3.125rem;
    grid-row-gap: 3.125rem;
    flex-direction: column;
  }

  .features-left {
    width: 100%;
  }

  .features-right {
    width: 100%;
    background-image: none;
    background-position: 0 0;
    background-size: auto;
    order: -1;
  }

  .features-right.flip {
    background-image: none;
    background-position: 0 0;
    background-size: auto;
  }

  .footer_wrapper {
    grid-column-gap: 3.75rem;
    grid-row-gap: 3.75rem;
    flex-direction: column;
  }

  .footer_wrapper-left {
    width: 60%;
  }

  .footer_wrapper-right {
    width: 100%;
    grid-column-gap: 4.375rem;
    grid-row-gap: 4.375rem;
    order: -1;
    justify-content: flex-start;
  }

  .big-images-on-homepage {
    min-height: 500px;
  }

  .big-images-on-homepage.is-fourth {
    background-size: 601px;
  }

  .features-3c-wrapper,
  .features-3c-wrapper.top-margin-60 {
    grid-template-columns: 1fr;
  }

  .wrapper {
    width: 100%;
  }

  .testimonial {
    width: 80%;
  }

  .menu-line {
    background-color: #fff;
    border-radius: 14px;
    margin-bottom: 4px;
    padding: 2px 16px;
  }

  .nav-button {
    flex: none;
    padding: 0;
  }

  .nav-button.w--open {
    background-color: rgba(0, 0, 0, 0);
  }

  .splide__arrow {
    width: 26px;
    min-height: 1.625rem;
    background-size: 7px, auto;
  }

  .footer-gradient {
    background-position: 50% -13%;
    background-size: 596px;
  }

  .form-wrapper {
    flex-direction: column;
  }

  .form-wrapper.top-margin-20 {
    margin-top: 1.875rem;
  }

  .form-wrapper-left {
    width: 100%;
    order: 1;
  }

  .form-wrapper-right {
    width: 100%;
    margin-top: 0;
  }

  .form-wrapper-right.is-pricing {
    margin-top: 0;
  }

  .form-page-main-heading,
  .form-page-main-heading.is-40 {
    width: 100%;
  }

  .icon-container {
    width: 48px;
    height: 48px;
    background-image: url("https://assets-global.website-files.com/65030bfd09557ada51fe30e2/65082f737dd32ba39494da8d_cross%20(1).svg");
    background-position: 0 0;
    background-size: auto;
    padding-bottom: 0;
    padding-right: 0;
  }

  .menu-button-2 {
    background-color: rgba(0, 0, 0, 0);
    padding-right: 0;
  }

  .menu-button-2.w--open {
    background-color: #fff;
  }

  .menu-line-1 {
    background-color: #fff;
    border-radius: 14px;
    padding: 1px 1rem;
  }

  .menu-line-2,
  .menu-line-3 {
    background-color: #fff;
    border-radius: 14px;
    margin-top: 0.25rem;
    padding: 1px 16px;
  }

  .div-block-2 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .banner-image-absolute-one {
    top: -8%;
    bottom: auto;
    left: auto;
    right: 0%;
  }

  .banner-image-absolute-secondary {
    top: auto;
    bottom: -7%;
    left: 0%;
    right: auto;
  }

  .banner-image {
    width: 100px;
  }

  .padding-blog-hero {
    padding-top: 3.75rem;
  }

  .blog-hero-heading {
    font-size: 2.125rem;
  }

  .blog-hero-subtext {
    font-size: 0.875rem;
  }

  .blog-hero-subtext.is-centre.top-margin-20 {
    width: 100%;
  }

  .featured-blog-wrapper {
    flex-direction: column;
  }

  .featured-blog-wrapper-left {
    width: 100%;
    height: 300px;
  }

  .featured-blog-wrapper-right {
    width: 100%;
    padding: 1.875rem 1rem;
  }

  .featured-blog-title {
    font-size: 1.375rem;
  }

  .cms-tab.w--current {
    background-image: linear-gradient(
      to right,
      var(--gradient-color-1),
      var(--gradient-color-2)
    );
    padding-bottom: 4px;
  }

  .tab-text {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .tab-menu {
    grid-row-gap: 0.625rem;
    flex-direction: column;
    padding-top: 0.625rem;
    display: none;
  }

  .tabs-cms-content {
    margin-top: 2.5rem;
  }

  .collection-item {
    width: 47%;
  }

  .subscribe-banner {
    width: 100%;
  }

  .subscribe-title {
    font-size: 1.25rem;
  }

  .subscribe-form-wrapper {
    width: 100%;
  }

  .subscribe-form-wrapper.top-margin-50 {
    margin-top: 1.875rem;
  }

  .subscribe-form-container {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    flex-direction: column;
  }

  .subscribe-email-input {
    min-width: 100%;
  }

  .dropdown-tabs {
    cursor: pointer;
    align-items: center;
    display: flex;
  }

  .dropdown-icon {
    height: 0.6rem;
  }

  .padding-hero-blogs-inner {
    padding-bottom: 2.5rem;
  }

  .blog-image-big {
    background-image: none;
  }

  .blog-inner-right-content {
    width: 100%;
  }

  .blog-inner-main-h1 {
    font-size: 2.25rem;
    line-height: 1.22222;
  }

  .blog-author-card {
    grid-column-gap: 0.75rem;
    align-items: center;
  }

  .author-image {
    width: 40px;
    height: 40px;
  }

  .author-name {
    font-size: 1rem;
  }

  .author-designation {
    font-size: 0.75rem;
  }

  .blog-inner-content-strip {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .publish-date-text-main {
    font-size: 0.75rem;
  }

  .collection-item-2 {
    width: 100%;
  }

  .collection-list-2 {
    flex-direction: column;
  }

  .button-text-news-letter._100 {
    width: 100%;
  }

  .blog-inner-wrapper {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    flex-direction: column;
  }

  .blog-inner-left {
    display: none;
  }

  .hero-wrapper-left {
    width: 100%;
    text-align: center;
    align-items: center;
  }

  .hero-wrapper-right {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    display: flex;
  }

  .hero-wrapper-right.hide-on-tablet-mobile {
    display: none;
  }

  .is-h1-features-two.is-about-us {
    text-align: left;
    margin-bottom: 0;
    font-size: 2.25rem;
  }

  .hero-img {
    height: auto;
    object-fit: contain;
  }

  .integrations-cms-wrapper {
    flex-direction: column;
  }

  .integrations-main {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }

  .integrations-cms {
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 2.5rem;
  }

  .featured-list {
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: 1fr;
  }

  .featured-cms,
  .featured-item,
  .cms-integration-container {
    width: 100%;
  }

  .cms-integration-container.is-integration-template {
    width: 48%;
  }

  .integrations-list {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }

  .integration-filter-flex {
    display: none;
  }

  .integration-list {
    width: 100%;
  }

  .searhfield {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .search-field-container {
    width: 100%;
  }

  .integration-outer-wrapper {
    flex-direction: column;
  }

  .filter-wrapper {
    z-index: 1;
    width: 100%;
    position: static;
    top: auto;
  }

  .integrations-template-wrapper {
    grid-column-gap: 3.75rem;
    grid-row-gap: 3.75rem;
    flex-direction: column;
  }

  .integration-template-wrapper-left {
    width: 100%;
  }

  .integration-template-wrapper-right {
    width: 100%;
    order: -1;
  }

  .integration-info-card {
    position: static;
  }

  .related-item {
    width: 48%;
  }

  .intergration-list-top {
    width: 100%;
  }

  .integrations-list-searcheable {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }

  .ig-filter-form-block {
    width: 100%;
  }

  .bottom-padding-100 {
    padding-bottom: 3.75rem;
  }

  .custom-filter {
    display: block;
  }

  .integration-dd-filter {
    width: 100%;
    border: 1px solid var(--divider);
    background-color: var(--footer-color);
    color: #fff;
    border-radius: 4px;
    order: 1;
    display: block;
  }

  .dropdown-toggle {
    width: 100%;
    color: #fff;
    border-radius: 4px;
  }

  .select-field {
    background-color: var(--footer-color);
    color: #fff;
    display: none;
  }

  .select-field:hover {
    color: var(--gradient-color-1);
  }

  .dropdown-link {
    background-color: var(--footer-color);
    color: #fff;
  }

  .dropdown-link:hover,
  .dropdown-link:visited {
    color: var(--gradient-color-1);
  }

  .ig-filter-form {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    flex-direction: column;
    display: flex;
  }

  .about-us-hero-text,
  .about-us-hero-text.is-bold {
    font-size: 0.875rem;
  }

  .about-us-hero-text.top-margin-40 {
    margin-top: 1.25rem;
  }

  .join-us-wrapper {
    flex-direction: column;
  }

  .join-us-text {
    text-align: center;
    font-size: 1.25rem;
  }

  .investor-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .investor-logo-wrapper {
    grid-column-gap: 1.875rem;
    grid-row-gap: 1.875rem;
    flex-direction: column;
  }

  .padding-aboutus-page {
    padding-top: 3.75rem;
  }

  .value-text {
    width: 100%;
  }

  .values-bottom {
    flex-direction: column;
  }

  .value-holder {
    width: 100%;
  }

  .value-title {
    font-size: 1.5rem;
  }

  .value-paragraph {
    font-size: 1.125rem;
  }

  .pricniples-wrapper {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    flex-direction: column;
  }

  .pricliples-left {
    width: 100%;
    position: static;
  }

  .pricliples-right {
    width: 100%;
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
  }

  .team-profile {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    flex-direction: row;
    justify-content: flex-start;
  }

  .team-item {
    width: 100%;
  }

  .team-list {
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  .team-name,
  .team-role {
    text-align: left;
  }

  .social-wrapper {
    justify-content: flex-start;
  }

  .team-profile-image {
    width: 100px;
    height: 100px;
  }

  .role-bottom {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
  }

  .role-name {
    font-size: 1.25rem;
  }

  .job-role {
    font-size: 1.125rem;
  }

  .role-bottom-left,
  .role-bottom-right {
    font-size: 0.875rem;
  }

  .collection-item-4 {
    width: 100%;
  }

  .dropdown-list {
    color: var(--gradient-color-1);
  }

  .section_richtext.gradient-bg-home {
    background-size: contain;
  }

  .features-wrapper-copy.top-margin-60,
  .features-2c-wrapper,
  .features-2c-wrapper.top-margin-60 {
    grid-template-columns: 1fr;
  }

  .no-results-filter {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 150px;
    transform: none;
  }

  .subtext.top-margin-10.left-margin-is-zero {
    text-align: left;
  }

  .integration-dd-filter-copy {
    width: 100%;
    border: 1px solid var(--divider);
    background-color: var(--footer-color);
    color: #fff;
    border-radius: 4px;
    order: 1;
    margin-bottom: 0;
    display: block;
  }

  .changelog-dropdown-toggle {
    width: 100%;
    color: #fff;
    border-radius: 4px;
  }

  .changelog-filter-radio {
    display: none;
  }

  .changelog-filter-wrapper {
    z-index: 1;
    width: 100%;
    position: static;
    top: auto;
  }

  .intergration-list-top-copy {
    width: 100%;
  }

  .changelog-outer-wrapper {
    flex-direction: column;
    grid-template-columns: 1fr;
  }

  .changelog-filter-flex {
    display: none;
  }

  .changelog-no-results {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 150px;
    transform: none;
  }

  .changelog-filter-form {
    flex-direction: column;
    display: flex;
  }

  .dropdown-pointer {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .padding-global {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  .padding-global.is-features-two-hero {
    padding-right: 1.875rem;
  }

  .nav_menu {
    padding-top: 1.25rem;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  .dropdown-link-item {
    width: 100%;
  }

  .padding-section-large {
    padding-top: 4.25rem;
    padding-bottom: 4.25rem;
  }

  .is-h1 {
    width: 100%;
    font-size: 3.125rem;
    line-height: 1.2;
  }

  .homepage-hero-subtext,
  .divider-line {
    width: 100%;
  }

  .divider-line.mob-hide {
    display: none;
  }

  .top-margin-80 {
    margin-top: 3.125rem;
  }

  .logo_wrapper {
    grid-column-gap: 6rem;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 0;
    padding-right: 0;
  }

  .padding-section-extra-large {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .padding-section-extra-large.is-home-lottie-embed {
    display: none;
  }

  .homepage-h2 {
    width: 100%;
    font-size: 1.75rem;
  }

  .features-wrapper {
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
  }

  .footer_wrapper-right {
    flex-wrap: wrap;
  }

  .footer_wrapper-right-coloumn {
    width: 24%;
  }

  .big-images-on-homepage {
    min-height: 500px;
  }

  .big-images-on-homepage.is-first {
    background-position: 100% 0;
    background-size: cover;
  }

  .big-images-on-homepage.is-second {
    background-position: 50% 0;
    background-size: cover;
  }

  .big-images-on-homepage.is-third {
    background-position: 100% 0;
    background-size: cover;
  }

  .big-images-on-homepage.is-fourth {
    background-size: contain;
  }

  .big-images-on-homepage.is-fifth {
    background-size: 410px;
  }

  .features-3c-wrapper {
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
  }

  .features-3c-wrapper.top-margin-40 {
    grid-template-columns: 1fr;
  }

  .features-2-card-wrapper,
  .features-2-card-wrapper._2-cards-in-a-row {
    width: 100%;
  }

  .black-cta-banner {
    padding: 0.875rem 1.75rem;
  }

  .black-button-text {
    font-size: 1rem;
  }

  .banner-title {
    font-size: 1.75rem;
  }

  .banner-subtext {
    width: 100%;
    font-size: 1rem;
  }

  .dropdown-link-item-secondary,
  .dropdown-link-item-copy,
  .dropdown-link-item-2 {
    width: 100%;
  }

  .banner-image-absolute-one {
    top: -9%;
  }

  .banner-image-absolute-secondary {
    bottom: -9%;
  }

  .collection-item,
  .subscribe-form-wrapper {
    width: 100%;
  }

  .subscribe-form-container {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    flex-direction: column;
  }

  .blog-image-big {
    background-position: 100%;
    background-size: cover;
  }

  .is-h1-features-two {
    font-size: 3.125rem;
  }

  .featured-item,
  .cms-integration-container {
    width: 100%;
  }

  .cms-integration-container.is-integration-template {
    width: 47%;
  }

  .integration-item,
  .related-item {
    width: 100%;
  }

  .integration-dd-filter {
    display: block;
  }

  .divider-line-100 {
    width: 100%;
  }

  .features-wrapper-copy,
  .features-2c-wrapper {
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
  }

  .features-2c-wrapper.top-margin-40 {
    grid-template-columns: 1fr;
  }

  .subtext {
    width: 100%;
  }

  .integration-dd-filter-copy {
    margin-bottom: 0;
    display: block;
  }

  .changelog-outer-wrapper {
    grid-template-columns: 1fr;
  }

  .filter-form.template-form {
    white-space: nowrap;
    justify-content: flex-start;
    padding-left: 40px;
    padding-right: 40px;
    overflow: auto;
  }
}

@media screen and (max-width: 479px) {
  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.57143;
  }

  .container-large.is-nav {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .nav_component {
    padding-top: 0;
  }

  .padding-global {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .padding-global.is-features-two-hero {
    padding-right: 1.25rem;
  }

  .nav_brand-logo-link {
    width: 140px;
  }

  .nav_menu {
    align-items: stretch;
    padding-top: 1rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .button.top-margin-40 {
    margin-top: 1.875rem;
  }

  .button._100.newsletter {
    width: auto;
  }

  .button-text {
    padding: 0.5rem 2rem;
    font-size: 0.875rem;
  }

  .button-text.extended-size {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .button-text.is-nav {
    padding: 0.5rem 1.25rem;
    font-size: 0.75rem;
  }

  .menu-button {
    padding: 0;
  }

  .padding-section-large {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }

  .is-h1 {
    font-size: 2rem;
    line-height: 1.25;
  }

  .homepage-hero-subtext {
    font-size: 0.875rem;
    line-height: 1.57143;
  }

  .homepage-hero-subtext.top-margin-40 {
    margin-top: 1.25rem;
  }

  .button-wrapper {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
  }

  .image.is-blog {
    width: 12px;
    height: 12px;
  }

  .logo_wrapper {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .logo_wrapper.top-margin-40,
  .logo_wrapper.top-margin-40-copy {
    margin-top: 1.25rem;
  }

  .brand-logo.is-canva,
  .brand-logo.is-descript,
  .brand-logo.is-apollo,
  .brand-logo.is-arc,
  .brand-logo.is-notion,
  .brand-logo.is-loom {
    background-size: contain;
  }

  .text-medium-16 {
    font-size: 0.875rem;
    line-height: 1.7;
  }

  .text-medium-16.is-footer-text.top-margin-20 {
    font-size: 0.75rem;
  }

  .padding-130 {
    padding-bottom: 3.75rem;
  }

  .cta-card-left {
    min-width: 4px;
  }

  .blue-text {
    font-size: 0.75rem;
  }

  .white-text-for-cta-card,
  .get-started-text {
    font-size: 1.25rem;
  }

  .padding-section-extra-large.is-features-video {
    padding-top: 1.125rem;
  }

  .padding-section-extra-large.on-mobile {
    padding-top: 1.875rem;
  }

  .homepage-h2 {
    font-size: 1.5rem;
  }

  .homepage-h2.top-margin-20.is-about-open-pos {
    margin-bottom: 12px;
  }

  .features-wrapper {
    grid-column-gap: 3.75rem;
    grid-row-gap: 3.75rem;
    flex-direction: column;
    display: flex;
  }

  .features-wrapper.is-0 {
    margin-top: 0;
  }

  .features {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
  }

  .features-left {
    flex-direction: column;
  }

  .features-title {
    font-size: 1.5rem;
    line-height: 1.25;
  }

  .features-left-bottom-text {
    font-size: 0.875rem;
  }

  .purple-dot {
    padding-top: 26px;
  }

  .footer_wrapper-left {
    width: 100%;
  }

  .footer_wrapper-right {
    grid-row-gap: 2rem;
  }

  .footer_wrapper-right-coloumn {
    width: 36%;
  }

  .footer-items-title {
    font-size: 1rem;
  }

  .footer-items {
    font-size: 0.875rem;
  }

  .footer_brand-logo-link {
    max-width: 200px;
  }

  .footer_brand-logo-link.w--current {
    max-width: 100%;
  }

  .big-images-on-homepage {
    min-height: 340px;
  }

  .big-images-on-homepage.is-first,
  .big-images-on-homepage.is-second,
  .big-images-on-homepage.is-third {
    background-position: 50%;
    background-size: contain;
  }

  .big-images-on-homepage.is-fifth {
    background-size: contain;
  }

  .features-2-card-title {
    font-size: 1rem;
  }

  .features-2-icon {
    width: 40px;
  }

  .splide__slide {
    background-position: 25% 15%;
    background-size: 170px;
  }

  .wrapper {
    grid-column-gap: 0.75rem;
    grid-row-gap: 0.75rem;
  }

  .testimonial-logo {
    height: 1.75rem;
  }

  .testimonial {
    width: 74%;
    font-size: 0.875rem;
  }

  .wrapper-right {
    grid-column-gap: 0.125rem;
    grid-row-gap: 0.125rem;
    flex-direction: column;
    display: flex;
  }

  .profile-pic {
    min-height: 54px;
    min-width: 54px;
  }

  .testimonial-name {
    font-size: 1rem;
  }

  .menu-line {
    background-color: #fff;
    margin-bottom: 4px;
    padding: 2px 16px;
  }

  .nav-button {
    padding: 0;
  }

  .bottom-banner-on-homepage {
    padding: 2.5rem 1.2rem;
  }

  .black-cta-banner.top-margin-30 {
    z-index: 2;
    margin-top: 1.25rem;
    position: relative;
  }

  .enterpet-logo-for-button {
    width: 24px;
    height: 24px;
  }

  .black-button-text {
    font-size: 0.875rem;
  }

  .banner-title {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  .banner-title.is-centre {
    z-index: 2;
    position: relative;
  }

  .banner-subtext {
    font-size: 0.875rem;
    line-height: 1.57143;
  }

  .banner-subtext.top-margin-40 {
    margin-top: 1.25rem;
  }

  .footer-gradient {
    background-position: 50% 460%;
    background-size: contain;
  }

  .footer-gradient.is-solutions {
    background-position: 50% 400%;
  }

  .footer-gradient.for-get-started {
    background-position: 50% 250%;
  }

  .footer-gradient.is-homepage {
    background-position: 50% 400%;
  }

  .form-heading {
    font-size: 1rem;
  }

  .form-question {
    font-size: 0.75rem;
  }

  .form-answer {
    height: 100%;
  }

  .form-answer.is-text-area {
    height: 100%;
    min-height: 50px;
  }

  .form {
    padding: 1rem 1.25rem 1.75rem 0.875rem;
  }

  .form-block {
    height: 100%;
  }

  .form-items-text {
    font-size: 0.875rem;
  }

  .form-page-main-heading {
    font-size: 1.5rem;
  }

  .faq-container {
    margin-top: 2.5rem;
  }

  .faq_toggle {
    grid-column-gap: 1.25rem;
    grid-row-gap: 1.25rem;
    padding: 1rem 1.25rem;
  }

  .faq_toggle-text {
    font-size: 1rem;
  }

  .faq_text {
    margin-top: 0.625rem;
  }

  .collection-list {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  .padding-for-logo-section {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .hero-subtext {
    font-size: 0.875rem;
    line-height: 1.57143;
  }

  .hero-subtext.top-margin-40 {
    margin-top: 1.25rem;
  }

  .menu-button-2 {
    padding-left: 14px;
    padding-right: 0;
  }

  .menu-button-2.w--open {
    background-color: rgba(255, 255, 255, 0);
  }

  .pricing-small-heading {
    font-size: 1.25rem;
  }

  .features-image {
    width: 60px;
  }

  .top-margin-60 {
    margin-top: 2.5rem;
  }

  .banner-image-absolute-one {
    z-index: 0;
    top: -11%;
    bottom: auto;
    left: auto;
    right: 0%;
  }

  .banner-image-absolute-secondary {
    z-index: 0;
    top: auto;
    bottom: -11%;
    left: 0%;
    right: auto;
  }

  .padding-blog-hero {
    padding-top: 3.75rem;
  }

  .featured-blog-wrapper.top-margin-60 {
    margin-top: 3.75rem;
  }

  .featured-blog-wrapper-left {
    height: auto;
    min-height: auto;
    aspect-ratio: 16 / 9;
  }

  .blog-card-bottom {
    padding-left: 1.25rem;
  }

  .blog-card-image {
    height: 180px;
  }

  .blog-category {
    font-size: 0.625rem;
  }

  .blog-card-heading {
    font-size: 0.875rem;
    line-height: 140%;
  }

  .blog-date {
    font-size: 0.625rem;
  }

  .section-blog-list.overflow-none {
    overflow: hidden;
  }

  .subscribe-container {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .subscribe-title {
    font-size: 1rem;
  }

  .subscribe-form-wrapper.top-margin-50 {
    margin-top: 1.25rem;
  }

  .subscribe-form-container {
    flex-direction: column;
    align-items: center;
  }

  .subscribe-email-input {
    min-width: 11.875rem;
  }

  .padding-hero-blogs-inner {
    padding-top: 1.25rem;
  }

  .blog-image-big {
    background-image: none;
  }

  .collection-list-2.top-margin-50 {
    margin-top: 1.5rem;
  }

  .cms-richtext p,
  .cms-richtext li {
    font-size: 1rem;
  }

  .breadcrumbs-wrapper {
    grid-column-gap: 0.875rem;
    grid-row-gap: 0.875rem;
  }

  .breadcrumb-arrow {
    height: 10px;
  }

  .breadcrumb-text {
    font-size: 0.875rem;
  }

  .button-text-news-letter {
    padding: 0.875rem 2rem;
    font-size: 0.75rem;
  }

  .button-text-news-letter.extended-size {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .button-text-news-letter.is-nav {
    padding: 0.5rem 1.25rem;
  }

  .is-h1-features-two {
    font-size: 2rem;
  }

  .featured-item,
  .cms-integration-container.is-integration-template {
    width: 100%;
  }

  .integration-inside-big-image {
    height: 200px;
  }

  .collection-list-3 {
    grid-template-columns: 1fr;
  }

  .investor-logo {
    width: 200px;
  }

  .padding-aboutus-page {
    padding-top: 3rem;
  }

  .value-text {
    font-size: 1rem;
    line-height: 1.8;
  }

  .values {
    padding: 2.5rem 1.75rem 2.125rem;
  }

  .value-paragraph {
    font-size: 1rem;
  }

  .value-paragraph.is-principle {
    margin-top: 8px;
    line-height: 1.8;
  }

  .pricniples-wrapper {
    grid-column-gap: 2.25rem;
    grid-row-gap: 2.25rem;
  }

  .pricniple-holder {
    padding: 1.4rem 1.625rem 1.625rem 1.25rem;
  }

  .principle-title {
    line-height: 1.4;
  }

  .team-profile {
    padding: 2rem 1.125rem;
  }

  .team-name {
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .header-banner {
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 40px;
  }

  .text-block {
    text-align: left;
  }

  ._404-heading {
    font-size: 100px;
  }

  .success-message {
    max-height: 50vh;
    overflow: scroll;
  }

  .nav-dropdown-list_product {
    margin-top: 18px;
    position: static;
  }

  .product-dropdown {
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
  }

  .no-results-filter {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .subtext {
    font-size: 0.875rem;
    line-height: 1.57143;
  }

  .subtext.top-margin-40 {
    margin-top: 1.25rem;
  }

  .changelog-no-results {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .snackbar-link {
    background-size: 10px;
    padding-right: 14px;
  }

  .filter-form.template-form {
    justify-content: flex-start;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .filter-form-wrapper {
    margin-bottom: 2rem;
  }

  .filter-form-wrapper.template-form-wrapper {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .related-items {
    grid-template-columns: 1fr;
  }
}

#w-node-d0d64b8f-a681-c8c3-b9de-898d861775dd-861775d5,
#w-node-d0d64b8f-a681-c8c3-b9de-898d861775de-861775d5,
#w-node-d0d64b8f-a681-c8c3-b9de-898d861775df-861775d5,
#w-node-_6dd93cc9-3ec6-3f8d-6e1e-7925978fb932-afc8b875,
#w-node-_6dd93cc9-3ec6-3f8d-6e1e-7925978fb934-afc8b875,
#w-node-_6dd93cc9-3ec6-3f8d-6e1e-7925978fb933-afc8b875,
#w-node-_6dd93cc9-3ec6-3f8d-6e1e-7925978fb939-afc8b875 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}
</style>
