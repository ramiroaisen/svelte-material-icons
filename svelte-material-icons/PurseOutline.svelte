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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19,11L20,19H4L5,11H19M14,3H10L8,5V9H4.7A1.65,1.65 0 0,0 3,10.5L2,19.1A1.74,1.74 0 0,0 3.7,21H20.3A1.74,1.74 0 0,0 22,19.1L21,10.5A1.65,1.65 0 0,0 19.3,9H16V5L14,3M10,9V5H14V9" fill="{color}"/></svg>