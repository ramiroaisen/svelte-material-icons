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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14,3L12,1H4A2,2 0 0,0 2,3V15A2,2 0 0,0 4,17H11V19L15,16L11,13V15H4V3H14M21,10V21A2,2 0 0,1 19,23H8A2,2 0 0,1 6,21V19H8V21H19V12H14V7H8V13H6V7A2,2 0 0,1 8,5H16L21,10Z" fill="{color}"/></svg>