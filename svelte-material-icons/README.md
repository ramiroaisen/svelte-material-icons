# Svelte Material Icons

### Install
```sh
npm i svelte-material-icons
```

### Usage
```html
<script>
  import Check from "svelte-material-icons/Check.svelte";
</script>

<Check {color} {size} {width} {height} {viewBox} {title} {desc} {class} {ariaHidden} {ariaLabel} />
```

### Search Icons
You can search icons at [materialdesignicons.com](https://materialdesignicons.com)

Icon names are PascalCased from the original name in the site

**check-outline** converts to **CheckOutline.svelte**


### Icon Example
```html
<script>
  // all properties are optional
  export let size = "1em"; // string | number
  export let width = size; // string | number
  export let height = size; // string | number
  export let color = "currentColor"; // string
  export let viewBox = "0 0 24 24"; // string
  export let class = undefined; // string
  export let ariaLabel = undefined; // string
  export let ariaHidden = undefined; // boolean
  export let desc = undefined; // string
  export let title = undefined; // string
</script>

<svg {class} {width} {height} {viewBox} aria-label={ariaLabel} aria-hidden={ariaHidden}>
  {#if title} <title>{title}</title> {/if}
  {#if desc} <desc>{desc}</desc> {/if}
  <path d="..." fill={color} />
</svg>
```

### Notes
If you wrap the icon into other element set the **display** of the parent element to **flex** to avoid extra whitespace

### Types
This package provides typescript definitions

### Contribute
This is a simple source to source compiler that transforms the svg files from https://github.com/Templarian/MaterialDesign to svelte components using [cheerio](https://cheerio.js.org)

To develop you can do

```sh
git clone https://github.com/ramiroaisen/svelte-material-icons
cd svelte-material-icons
npm i
npm run build
```