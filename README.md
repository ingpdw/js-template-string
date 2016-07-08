# js-template-string

ES6 template string helper

## Install

```
$npm install js-template-string
```

## Usage

```
let Tmpl = require( 'js-template-string' );
```

### iterate()
```

Tmpl.iterate({
    data: [1, 2, 3],
    template: ( item ) => `<li>${item}</li>`
});

//return <li>1</li><li>2</li><li>3</li>

```

### iterate()

```

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
```

### render()
```

Tmpl.render({
    data: {name: 'Tom', age: 30},
    template: ( item ) => `
      <span>${item.name}</span>
      <span>${item.age}</span>`
})

//return <span>Tom</span><span>30</span>
```

### join()
```
Tmpl.join( [`hello`, `my`, `template`] );

//return hellomytemplate
```



## API

```
let Tmpl = require( 'js-template-string' );
Tmpl.iterate( options );
Tmpl.conditional( condition, String, String );
Tmpl.render( options );
Tmpl.encode( String );
Tmpl.escape( String );
Tmpl.join( Array );

```

## options

* data
* template

```
let options = {
  data: {name: 'Tom'},
  template: ( item ) => `${item.name}`
}

Tmpl.render( options );
```


## License
© 2016 ingpdw. MIT License
