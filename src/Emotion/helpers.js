export function useCSSObject(props) {
	const { m, mt, p, pb, color, bg, fontSize, ...rest } = props;
	return [
		{
			margin: m,
			marginTop: mt,
			padding: p,
			paddingBottom: pb,
			color: color,
			background: bg,
			fontSize: fontSize,
		},
		rest,
	];
}
