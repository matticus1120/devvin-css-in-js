import { space, color } from "./config";
import theme from "./theme";

/**
 * Style Props tools
 *
 * WIP
 *
 * covert {mb: "36"} to {marginBottom: "var(--rh-space-36)"}
 * covert {color: "sprk.purple.deep"} to {color: "var(--rh-colors-sprk_purple_dark)"}
 */

export function getStylePropCssVar(propKey, propValue) {
  const allStyleProps = {
    ...space,
    ...color,
  };
  // check for propKey in allStyleProps
  // grab the value of "scale" in matching object
  // Validate that the value is in the theme using "scale" and "propValue"
  // Valid value = !!theme[scale][propValue]
  // If value, return new object
  /**
  {
	  [allStyleProps.propKey.property]: theme[scale][propValue]
	  [allStyleProps.propKey.property]: getCSSVarFunctionString(scale, propValue)
  }
 */
}

/**
 * Theme CSS var tools
 */

// Check if a given theme key and valueKey exists in the theme
export function isValidThemeValue(themeKey, themeValueKey) {
  return !!theme?.[themeKey]?.[themeValueKey];
}

export function getCSSVarName(themeKey, themeValueKey) {
  if (!isValidThemeValue(themeKey, themeValueKey)) return false;
  return `--rh-${themeKey}-${themeValueKey}`.replace(/\./gi, "_");
}

export function getThemeValue(themeKey, themeValueKey) {
  if (!isValidThemeValue(themeKey, themeValueKey)) return false;
  const themeValue =
    typeof theme[themeKey][themeValueKey] === "object"
      ? theme[themeKey][themeValueKey].value
      : theme[themeKey][themeValueKey];
  return themeValue;
}

export function getCSSVarFunctionString(themeKey, themeValueKey) {
  if (!isValidThemeValue(themeKey, themeValueKey)) return false;
  const varName = getCSSVarName(themeKey, themeValueKey);
  return `--var(${varName})`;
}

export function getThemeRuleCSSVarString(themeKey, themeValueKey) {
  if (!isValidThemeValue(themeKey, themeValueKey)) return false;
  const varName = getCSSVarName(themeKey, themeValueKey);
  const varValue = getThemeValue(themeKey, themeValueKey);
  return `${varName}: ${varValue};`;
}

export function getThemeCSSVars() {
  let cssVars = [];
  for (let themeKey in theme) {
    for (let themeValueKey in theme[themeKey]) {
      const rule = getThemeRuleCSSVarString(themeKey, themeValueKey);
      cssVars.push(rule);
    }
  }
  console.log("cssVars", cssVars);
  return cssVars;
}

/**
 * Playing around...
 */

const getErrorMessage = {
  invalidStylePropValue: (values) =>
    generateErrorMessage`Invalid value of ${values[0]} provided in ${values[1]}. Valid values are found in ${values[2]} in your theme.`,
};

const generateErrorMessage = (staticTags, ...tags) => {
  let str = [staticTags[0]];
  for (let i = 0; i < tags.length; i++) {
    str.push(tags[i] + staticTags[i + 1]);
  }
  return str.join("");
};

const consoleError = (errorType, values) => {
  const message = getErrorMessage[errorType](values);
};
