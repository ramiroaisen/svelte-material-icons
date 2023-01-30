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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,3A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H12A2,2 0 0,0 14,19V5A2,2 0 0,0 12,3H4M8,5A2,2 0 0,1 10,7A2,2 0 0,1 8,9A2,2 0 0,1 6,7A2,2 0 0,1 8,5M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M8,11A4,4 0 0,1 12,15A4,4 0 0,1 8,19A4,4 0 0,1 4,15A4,4 0 0,1 8,11M8,13A2,2 0 0,0 6,15A2,2 0 0,0 8,17A2,2 0 0,0 10,15A2,2 0 0,0 8,13M20,13.21L20.94,14.14L20,15.08V13.21Z" fill="{color}"/></svg>