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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,7A2,2 0 0,0 2,9V15A2,2 0 0,0 4,17H6A2,2 0 0,0 8,15V14H6V15H4V9H6V10H8V9A2,2 0 0,0 6,7H4M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M18,7A2,2 0 0,0 16,9V11A2,2 0 0,0 18,13H20V15H16V17H20A2,2 0 0,0 22,15V13A2,2 0 0,0 20,11H18V9H22V7H18Z" fill="{color}"/></svg>