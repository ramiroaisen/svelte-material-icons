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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2.21,0.79L0.79,2.21L4.8,6.21L3,8H8V3L6.21,4.8M12,8C8.14,8 5,11.13 5,15A7,7 0 0,0 12,22C15.86,22 19,18.87 19,15A7,7 0 0,0 12,8M12,10.15C14.67,10.15 16.85,12.32 16.85,15A4.85,4.85 0 0,1 12,19.85C9.32,19.85 7.15,17.68 7.15,15A4.85,4.85 0 0,1 12,10.15M11,12V15.69L14.19,17.53L14.94,16.23L12.5,14.82V12" fill="{color}"/></svg>