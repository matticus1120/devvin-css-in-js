import theme from "./theme";
const isObject = (value) => typeof value === "object";

export const tokenToCSSVar = (scale, value) => (theme) => {
	const valueStr = String(value);
	const key = scale ? `${scale}.${valueStr}` : valueStr;
	return isObject(theme.__cssMap) && key in theme.__cssMap
		? theme.__cssMap[key].varRef
		: value;
};

export function createTransform(options) {
	const { scale, transform, compose } = options;
	const fn = (value, theme) => {
		const _value = tokenToCSSVar(scale, value)(theme);
		let result = transform?.(_value, theme) ?? _value;
		if (compose) {
			result = compose(result, theme);
		}
		return result;
	};

	return fn;
}

export function toConfig(scale, transform) {
	return (property) => {
		const result = { property, scale };
		result.transform = createTransform({
			scale,
			transform,
		});
		return result;
	};
}

const transforms = {
	px: (value) => value,
};

export const t = {
	space: toConfig("space", transforms.px),
	spaceT: toConfig("space", transforms.px),
};

export const space = {
	margin: t.spaceT("margin"),
	marginTop: t.spaceT("marginTop"),
	marginRight: t.spaceT("marginRight"),
	marginBottom: t.spaceT("marginBottom"),
	marginLeft: t.spaceT("marginLeft"),
	marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
	marginY: t.spaceT(["marginTop", "marginBottom"]),
	padding: t.space("padding"),
	paddingTop: t.space("paddingTop"),
	paddingRight: t.space("paddingRight"),
	paddingBottom: t.space("paddingBottom"),
	paddingLeft: t.space("paddingLeft"),
	paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
	paddingY: t.space(["paddingTop", "paddingBottom"]),
};

Object.assign(space, {
	m: space.margin,
	mt: space.marginTop,
	mr: space.marginRight,
	mb: space.marginBottom,
	ml: space.marginLeft,
	mx: space.marginX,
	my: space.marginY,
	p: space.padding,
	pt: space.paddingTop,
	py: space.paddingY,
	px: space.paddingX,
	pb: space.paddingBottom,
	pl: space.paddingLeft,
	pr: space.paddingRight,
});

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
	console.error(message);
};

const validatecssKey = (scale, cssKey) =>
	theme[scale].hasOwnProperty(cssKey) ? theme[scale][cssKey] : false;

export function toCSSObject(props) {
	let styles = {};
	for (let i in props) {
		if (space.hasOwnProperty(i)) {
			const value = validatecssKey(space[i].scale, props[i]);
			if (!!value) {
				styles[space[i].property] = `var(--rh-${i}-${value})`;
			} else {
				consoleError("invalidStylePropValue", [props[i], i, space[i].scale]);
			}
		}
	}

	return [
		{
			...styles,
		},
		{},
	];
}
