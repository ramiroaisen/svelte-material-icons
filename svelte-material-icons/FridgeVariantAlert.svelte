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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 4V19C17 20.11 16.11 21 15 21V22H13V21H10.5V2H15C16.11 2 17 2.9 17 4M5 2H9.5V21H7V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2M8 10H5V14H8V10M19 7V13H21V7H19M19 17H21V15H19V17Z" fill="{color}"/></svg>