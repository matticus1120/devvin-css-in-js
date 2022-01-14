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

export function tryObjectAssign() {
  let person = {
    firstName: "Matt",
    middleName: "Joseph",
    lastName: "McCullough",
    hairColor: "Blondle",
    hairStyle: "Pretty sweet",
  };

  const faves = {
    faveColor: "Mauve",
    faveMovie: "Syncronic",
    faveBand: "War On Drugs",
    faveGuitar: "Gibson",
  };

  const newPerson = Object.assign({ ...person }, faves);
  console.log("person", person);
  console.log("faves", faves);
  console.log("newPerson", newPerson);

  Object.defineProperty(person, "hoodie", {
    value: "He is wearing it.",
    configurable: true,
    enumerable: false, // when false, "hoodie" will not show up in the below for() loop
    writable: true,
  });

  const firstNameDescriptor = Object.getOwnPropertyDescriptor(
    person,
    "firstName"
  );

  const hoodieDescriptor = Object.getOwnPropertyDescriptor(person, "hoodie");

  for (let prop in person) {
    // console.log("prop", prop);
  }
}
