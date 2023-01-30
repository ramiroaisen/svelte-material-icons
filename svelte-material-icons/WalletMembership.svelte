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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,10H4V4H20M20,15H4V13H20M20,2H4C2.89,2 2,2.89 2,4V15C2,16.11 2.89,17 4,17H8V22L12,20L16,22V17H20C21.11,17 22,16.11 22,15V4C22,2.89 21.11,2 20,2Z" fill="{color}"/></svg>