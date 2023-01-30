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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H7A3,3 0 0,0 10,20A3,3 0 0,0 13,17H21V15H19V9A2,2 0 0,0 17,7H5M5,9H10V12H5V9M13,9H17V12H13V9M10,16A1,1 0 0,1 11,17A1,1 0 0,1 10,18A1,1 0 0,1 9,17A1,1 0 0,1 10,16Z" fill="{color}"/></svg>