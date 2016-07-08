# js-template-string

ES6 template string helper

## Install

```
$npm install js-template-string
```

## Usage

```

let Tmpl = require( 'js-template-string' );


Tmpl.iterate({
    data: [1, 2, 3],
    template: ( item ) => `<li>${item}</li>`
});

//return <li>1</li><li>2</li><li>3</li>


let myData = [
  {name: 'myName', age:40},
  {name: 'yourName', age:30}
];

let myTmpl = ( item ) => `<li class="${item.name}">${item.age}</li>`;

Tmpl.iterate({
  data: myData,
  template: myTmpl
});

//return <li class="myName">40</li><li class="yourName">30</li>


Tmpl.render({
    data: {name: 'Tom', age: 30},
    template: ( item ) => `
      <span>${item.name}</span>
      <span>${item.age}</span>`
})
//return <span>Tom</span><span>30</span>

Tmpl.join( [`hello`, `my`, `template`] );
//return hellomytemplate

```

## API

```
let Tmpl = require( 'js-template-string' );
Tmpl.iterate( options );
Tmpl.render( options );
Tmpl.encode( String );
Tmpl.escape( String );
Tmpl.join( Array );

```

## options

* data
* template:

```
let options = {
  data: {name: 'Tom'},
  template: ( item ) => `${item.name}`
}

Tmpl.render( options );
```

## Test
* npm install mocha -g
* npm test

## License
© 2016 ingpdw. MIT License
