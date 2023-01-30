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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M1,5H3V19H1V5M5,5H7V19H5V5M22,5H10A1,1 0 0,0 9,6V18A1,1 0 0,0 10,19H22A1,1 0 0,0 23,18V6A1,1 0 0,0 22,5M11,17L13.5,13.85L15.29,16L17.79,12.78L21,17H11Z" fill="{color}"/></svg>