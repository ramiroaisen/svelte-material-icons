<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9,4C9,2.89 9.89,2 11,2C12.11,2 13,2.89 13,4C13,5.11 12.11,6 11,6C9.89,6 9,5.11 9,4M16,13C16,11.66 15.17,10.5 14,10A3,3 0 0,0 11,7A3,3 0 0,0 8,10V17H10V22H13V17H16V13Z" fill="{color}"/></svg>