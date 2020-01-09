# Svelte Material Icons

####Install
```sh
npm i svelte-material-icons
```

#### Usage
```html5
<script>
	import Check from "svelte-material-icons/Check.svelte"
<script/>

<Check {color} {size} {width} {height} {viewBox} />
```

####Search Icons
You can search icons at https://materialdesignicons.com/

Icon names are PascalCased from the original name in the site

check-outline => CheckOutline.svelte


####Icon Example


```svelte
<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<svg {width} {height} {viewBox}">
	<path d="..." fill={color}/>
 </svg>
```

#### Notes
If you wrap the icon into other element set the **display** of the parent element to **flex**