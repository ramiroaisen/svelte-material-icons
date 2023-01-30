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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.25 4H13.75L9 15H11.1L12 12.8H17L17.9 15H20L15.25 4M12.63 11L14.5 6L16.37 11H12.63M5 17.5L8 14.5H6V2H4V14.5H2L5 17.5M22 20L19 17V19H6.5V21H19V23L22 20Z" fill="{color}"/></svg>