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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M4,4H11A2,2 0 0,1 13,6V9H11V6H4V11H6V9L9,12L6,15V13H4A2,2 0 0,1 2,11V6A2,2 0 0,1 4,4M20,20H13A2,2 0 0,1 11,18V15H13V18H20V13H18V15L15,12L18,9V11H20A2,2 0 0,1 22,13V18A2,2 0 0,1 20,20Z" fill="{color}"/></svg>