# Svelte Material Icons

### Install
```sh
npm i svelte-material-icons
```

### Usage
```svelte
<script>
  import Check from "svelte-material-icons/Check.svelte";
</script>

<Check {color} {size} {width} {height} {viewBox} />
```

### Search Icons
You can search icons at [materialdesignicons.com](https://materialdesignicons.com)

Icon names are PascalCased from the original name in the site

**check-outline** converts to **CheckOutline.svelte**


### Icon Example
```svelte
<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
</script>

<svg {width} {height} {viewBox}>
  <path d="..." fill={color} />
</svg>
```

### Notes
If you wrap the icon into other element set the **display** of the parent element to **flex**


### Contribute
This is a simple source to source compiler that transforms the svg files from https://github.com/Templarian/MaterialDesign to svelte components using [cheerio](https://cheerio.js.org)

To develop you can do

```sh
git clone https://github.com/ramiroaisen/svelte-material-icons
cd svelte-material-icons
npm i
npm run build
```