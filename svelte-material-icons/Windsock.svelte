<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 5V13L22 11V7L7 5M10 6.91L13 7.31V10.69L10 11.09V6.91M16 7.71L19 8.11V9.89L16 10.29V7.71M5 10V11H6V12H5V21H3V4C3 3.45 3.45 3 4 3S5 3.45 5 4V6H6V7H5V10Z" fill="{color}"/></svg>