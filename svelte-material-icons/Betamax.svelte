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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M8,9A4,4 0 0,1 12,13A4,4 0 0,1 8,17A4,4 0 0,1 4,13A4,4 0 0,1 8,9M13,9H20V17H13V9M8,11A2,2 0 0,0 6,13A2,2 0 0,0 8,15A2,2 0 0,0 10,13A2,2 0 0,0 8,11Z" fill="{color}"/></svg>