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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,3H5A2,2 0 0,0 3,5V11H7V9L11,12L7,15V13H3V19A2,2 0 0,0 5,21H20A2,2 0 0,0 22,19V5A2,2 0 0,0 20,3M17,17H13V15H17V17M20,13H13V11H20V13M20,9H13V7H20V9M3,13H0V11H3V13Z" fill="{color}"/></svg>