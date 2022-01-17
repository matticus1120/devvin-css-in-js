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

	Object.defineProperty(person, "hoodie", {
		value: "He is wearing it.",
		configurable: true,
		enumerable: false,
		writable: true,
	});

	const firstNameDescriptor = Object.getOwnPropertyDescriptor(
		person,
		"firstName"
	);

	const hoodieDescriptor = Object.getOwnPropertyDescriptor(person, "hoodie");
}
function Person() {
	(this.name = "John"), (this.age = 23);
}

export function tryOutProtoTypes() {
	// creating objects
	const person1 = new Person();
	const person2 = new Person();

	// adding property to constructor function
	// Person.prototype.gender = "male";
	Person.prototype.gender = "male";

	// prototype value of Person
	console.log(Person.prototype);

	// inheriting the property from prototype
	console.log(person1.gender);
	console.log(person2.gender);
}

function curryOne(table) {
	return (mediaStand) => (stool) =>
		`Media stand is ${mediaStand}, and table is ${table}, stool is ${stool}`;
}

export function tryOutCurry() {
	const results = curryOne("brown")("white")("black");
	console.log("results: ", results);
}

let greetings = "Hi";
let name = "Techsith";
let age = 35;

function transform(staticTags, ...tags) {
	// console.log(staticTags); // ["", " my name is ", " and I am ", ""]
	// console.log(tags); //["Hi", "Techsith", 35]
}
export function tryTaggedTemplateLiterals() {
	transform`${greetings} my name is ${name} and I am ${age}`;
}
