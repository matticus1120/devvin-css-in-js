export function useCSSObject(props) {
  const { m, mt, p, pb, color, bg, fontSize, ...rest } = props;
  return [
    {
      ...(m && { margin: m }),
      ...(mt && { marginTop: mt }),
      ...(p && { padding: p }),
      ...(pb && { paddingBottom: pb }),
      ...(color && { color: color }),
      ...(bg && { background: bg }),
      ...(fontSize && { fontSize: fontSize }),
    },
    rest,
  ];
}
