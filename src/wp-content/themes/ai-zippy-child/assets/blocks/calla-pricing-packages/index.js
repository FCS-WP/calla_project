/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/editor.scss"
/*!********************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/editor.scss ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/style.scss"
/*!*******************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/style.scss ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/edit.js"
/*!****************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/edit.js ***!
  \****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");





const DEFAULT_PACKAGES = [{
  eyebrow: "Drop In",
  badge: "",
  name: "Pricing Package 1",
  tagline: "Perfect for first-timers or occasional visits.",
  pricePrefix: "$",
  priceValue: "XX",
  pricePeriod: "per session",
  featuresText: "Full facility access\nTowel & locker included\n90-minute session\nCafe discount 10%",
  buttonText: "Book Now",
  buttonUrl: "#",
  isFeatured: false
}, {
  eyebrow: "Membership",
  badge: "Most Popular",
  name: "Pricing Package 2",
  tagline: "For those who make recovery a ritual.",
  pricePrefix: "$",
  priceValue: "XX",
  pricePeriod: "per month",
  featuresText: "Unlimited sessions\nPriority booking\nTowel & locker included\nCafe discount 15%\n1 guest pass / month",
  buttonText: "Get Started",
  buttonUrl: "#",
  isFeatured: true
}, {
  eyebrow: "Pack",
  badge: "",
  name: "Pricing Package 3",
  tagline: "Flexible sessions to use at your own pace.",
  pricePrefix: "$",
  priceValue: "XX",
  pricePeriod: "10-session pack - valid 3 months",
  featuresText: "10 sessions to use freely\nShareable with a friend\nTowel & locker included\nCafe discount 10%",
  buttonText: "Buy Pack",
  buttonUrl: "#",
  isFeatured: false
}];
function cloneDefaultPackages() {
  return DEFAULT_PACKAGES.map(item => ({
    ...item
  }));
}
function normalizePackage(item = {}) {
  return {
    eyebrow: typeof item?.eyebrow === "string" ? item.eyebrow : "",
    badge: typeof item?.badge === "string" ? item.badge : "",
    name: typeof item?.name === "string" ? item.name : "",
    tagline: typeof item?.tagline === "string" ? item.tagline : "",
    pricePrefix: typeof item?.pricePrefix === "string" ? item.pricePrefix : "$",
    priceValue: typeof item?.priceValue === "string" ? item.priceValue : "",
    pricePeriod: typeof item?.pricePeriod === "string" ? item.pricePeriod : "",
    featuresText: typeof item?.featuresText === "string" ? item.featuresText : "",
    buttonText: typeof item?.buttonText === "string" ? item.buttonText : "",
    buttonUrl: typeof item?.buttonUrl === "string" ? item.buttonUrl : "#",
    isFeatured: Boolean(item?.isFeatured)
  };
}
function splitFeatures(featuresText = "") {
  return featuresText.split("\n").map(line => line.trim()).filter(Boolean);
}
function Edit({
  attributes,
  setAttributes
}) {
  const {
    introLine1,
    introLine2,
    packages,
    noteText,
    noteLinkText,
    noteLinkUrl
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "calla-pricing-packages"
  });
  const normalizedPackages = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (Array.isArray(packages) && packages.length > 0) {
      return packages.map(item => normalizePackage(item));
    }
    return cloneDefaultPackages();
  }, [packages]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!Array.isArray(packages) || packages.length === 0) {
      setAttributes({
        packages: cloneDefaultPackages()
      });
    }
  }, [packages, setAttributes]);
  const setPackages = nextPackages => {
    const safePackages = nextPackages.map(item => normalizePackage(item));
    setAttributes({
      packages: safePackages.length > 0 ? safePackages : [{
        ...normalizePackage()
      }]
    });
  };
  const updatePackage = (index, patch) => {
    setPackages(normalizedPackages.map((item, itemIndex) => itemIndex === index ? {
      ...item,
      ...patch
    } : item));
  };
  const addPackage = () => {
    setPackages([...normalizedPackages, {
      eyebrow: "",
      badge: "",
      name: "",
      tagline: "",
      pricePrefix: "$",
      priceValue: "",
      pricePeriod: "",
      featuresText: "",
      buttonText: "",
      buttonUrl: "#",
      isFeatured: false
    }]);
  };
  const removePackage = index => {
    setPackages(normalizedPackages.filter((_, itemIndex) => itemIndex !== index));
  };
  const movePackage = (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= normalizedPackages.length) {
      return;
    }
    const nextPackages = [...normalizedPackages];
    [nextPackages[index], nextPackages[targetIndex]] = [nextPackages[targetIndex], nextPackages[index]];
    setPackages(nextPackages);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pricing packages", "ai-zippy-child"),
        initialOpen: true,
        children: [normalizedPackages.map((pkg, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            marginBottom: "18px",
            paddingBottom: "18px",
            borderBottom: "1px solid #e2e2e2"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Package %d Eyebrow", "ai-zippy-child"), index + 1),
            value: pkg.eyebrow,
            onChange: value => updatePackage(index, {
              eyebrow: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Package %d Badge", "ai-zippy-child"), index + 1),
            value: pkg.badge,
            onChange: value => updatePackage(index, {
              badge: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Optional. Leave empty to hide badge.", "ai-zippy-child")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Featured card", "ai-zippy-child"),
            checked: pkg.isFeatured,
            onChange: value => updatePackage(index, {
              isFeatured: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Package %d Name", "ai-zippy-child"), index + 1),
            value: pkg.name,
            onChange: value => updatePackage(index, {
              name: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Package %d Tagline", "ai-zippy-child"), index + 1),
            value: pkg.tagline,
            onChange: value => updatePackage(index, {
              tagline: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Price prefix", "ai-zippy-child"),
              value: pkg.pricePrefix,
              onChange: value => updatePackage(index, {
                pricePrefix: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Price value", "ai-zippy-child"),
              value: pkg.priceValue,
              onChange: value => updatePackage(index, {
                priceValue: value
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Price period", "ai-zippy-child"),
            value: pkg.pricePeriod,
            onChange: value => updatePackage(index, {
              pricePeriod: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Features (1 line = 1 item)", "ai-zippy-child"),
            value: pkg.featuresText,
            onChange: value => updatePackage(index, {
              featuresText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button text", "ai-zippy-child"),
            value: pkg.buttonText,
            onChange: value => updatePackage(index, {
              buttonText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button URL", "ai-zippy-child"),
            value: pkg.buttonUrl,
            onChange: value => updatePackage(index, {
              buttonUrl: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: "flex",
              gap: "8px",
              marginTop: "8px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "secondary",
              onClick: () => movePackage(index, "up"),
              disabled: index === 0,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move up", "ai-zippy-child")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "secondary",
              onClick: () => movePackage(index, "down"),
              disabled: index === normalizedPackages.length - 1,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move down", "ai-zippy-child")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "tertiary",
              isDestructive: true,
              onClick: () => removePackage(index),
              disabled: normalizedPackages.length === 1,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove package", "ai-zippy-child")
            })]
          })]
        }, `pricing-package-${index}`)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "primary",
          onClick: addPackage,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add package", "ai-zippy-child")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pricing note", "ai-zippy-child"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Note link URL", "ai-zippy-child"),
          value: noteLinkUrl,
          onChange: value => setAttributes({
            noteLinkUrl: value
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "calla-pricing-packages__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "calla-pricing-packages__intro",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "p",
            className: "calla-pricing-packages__intro-line1",
            value: introLine1,
            onChange: value => setAttributes({
              introLine1: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Intro line 1", "ai-zippy-child")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "p",
            className: "calla-pricing-packages__intro-line2",
            value: introLine2,
            onChange: value => setAttributes({
              introLine2: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Intro line 2", "ai-zippy-child")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "calla-pricing-packages__grid",
          children: normalizedPackages.map((pkg, index) => {
            const features = splitFeatures(pkg.featuresText);
            const cardClass = `calla-pricing-packages__card${pkg.isFeatured ? " is-featured" : ""}`;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: cardClass,
              children: [pkg.badge ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "calla-pricing-packages__badge",
                children: pkg.badge
              }) : null, pkg.eyebrow ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "calla-pricing-packages__eyebrow",
                children: pkg.eyebrow
              }) : null, pkg.name ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                className: "calla-pricing-packages__name",
                children: pkg.name
              }) : null, pkg.tagline ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "calla-pricing-packages__tagline",
                children: pkg.tagline
              }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "calla-pricing-packages__price-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                  className: "calla-pricing-packages__price",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("sup", {
                    children: pkg.pricePrefix
                  }), pkg.priceValue]
                })
              }), pkg.pricePeriod ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "calla-pricing-packages__period",
                children: pkg.pricePeriod
              }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "calla-pricing-packages__divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                className: "calla-pricing-packages__items",
                children: features.map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                  className: "calla-pricing-packages__item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    strokeWidth: "2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
                      points: "20 6 9 17 4 12"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    children: feature
                  })]
                }, `${feature}-${featureIndex}`))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "calla-pricing-packages__button-wrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "calla-pricing-packages__button-text",
                  children: pkg.buttonText
                })
              })]
            }, `package-preview-${index}`);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: "calla-pricing-packages__note",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "span",
            value: noteText,
            onChange: value => setAttributes({
              noteText: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Note text", "ai-zippy-child")
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "span",
            className: "calla-pricing-packages__note-link",
            value: noteLinkText,
            onChange: value => setAttributes({
              noteLinkText: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link text", "ai-zippy-child")
          })]
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/index.js"
/*!*****************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/index.js ***!
  \*****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/block.json");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/editor.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/save.js"
/*!****************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/save.js ***!
  \****************************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ },

/***/ "./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/block.json"
/*!*******************************************************************************************!*\
  !*** ./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/block.json ***!
  \*******************************************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ai-zippy-child/calla-pricing-packages","version":"1.0.0","title":"Calla Pricing Packages","category":"calla-pricing","icon":"money-alt","description":"Pricing intro and repeatable package cards.","keywords":["calla","pricing","packages","membership"],"supports":{"html":false,"align":["wide","full"]},"attributes":{"introLine1":{"type":"string","default":"Find your flow, your way."},"introLine2":{"type":"string","default":"Choose the option that works best for you."},"packages":{"type":"array","default":[{"eyebrow":"Drop In","badge":"","name":"Pricing Package 1","tagline":"Perfect for first-timers or occasional visits.","pricePrefix":"$","priceValue":"XX","pricePeriod":"per session","featuresText":"Full facility access\\nTowel & locker included\\n90-minute session\\nCafe discount 10%","buttonText":"Book Now","buttonUrl":"#","isFeatured":false},{"eyebrow":"Membership","badge":"Most Popular","name":"Pricing Package 2","tagline":"For those who make recovery a ritual.","pricePrefix":"$","priceValue":"XX","pricePeriod":"per month","featuresText":"Unlimited sessions\\nPriority booking\\nTowel & locker included\\nCafe discount 15%\\n1 guest pass / month","buttonText":"Get Started","buttonUrl":"#","isFeatured":true},{"eyebrow":"Pack","badge":"","name":"Pricing Package 3","tagline":"Flexible sessions to use at your own pace.","pricePrefix":"$","priceValue":"XX","pricePeriod":"10-session pack - valid 3 months","featuresText":"10 sessions to use freely\\nShareable with a friend\\nTowel & locker included\\nCafe discount 10%","buttonText":"Buy Pack","buttonUrl":"#","isFeatured":false}]},"noteText":{"type":"string","default":"All prices inclusive of GST. Questions?"},"noteLinkText":{"type":"string","default":"Get in touch"},"noteLinkUrl":{"type":"string","default":"#"}},"textdomain":"ai-zippy-child","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"calla-pricing-packages/index": 0,
/******/ 			"calla-pricing-packages/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkai_zippy"] = globalThis["webpackChunkai_zippy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["calla-pricing-packages/style-index"], () => (__webpack_require__("./src/wp-content/themes/ai-zippy-child/src/blocks/calla-pricing-packages/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map