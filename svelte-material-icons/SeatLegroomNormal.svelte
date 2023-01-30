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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,12V3H3V12A5,5 0 0,0 8,17H14V15H8A3,3 0 0,1 5,12M20.5,18H19V11A2,2 0 0,0 17,9H12V3H6V11A3,3 0 0,0 9,14H16V21H20.5A1.5,1.5 0 0,0 22,19.5A1.5,1.5 0 0,0 20.5,18Z" fill="{color}"/></svg>