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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8 2C6.9 2 6 2.9 6 4V12H5V16L9 20V22H15V20L19 16V12H18V4C18 2.9 17.11 2 16 2M8 4H16V12H8M9 7V9H11V7M13 7V9H15V7Z" fill="{color}"/></svg>