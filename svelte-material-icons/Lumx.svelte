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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12.35,1.75L20.13,9.53L13.77,15.89L12.35,14.47L17.3,9.53L10.94,3.16L12.35,1.75M15.89,9.53L14.47,10.94L10.23,6.7L5.28,11.65L3.87,10.23L10.23,3.87L15.89,9.53M10.23,8.11L11.65,9.53L6.7,14.47L13.06,20.84L11.65,22.25L3.87,14.47L10.23,8.11M8.11,14.47L9.53,13.06L13.77,17.3L18.72,12.35L20.13,13.77L13.77,20.13L8.11,14.47Z" fill="{color}"/></svg>