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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13.8 5.2C13 5 12.2 5 11.4 5L14.6 2.3L16 6.3C15.3 5.8 14.6 5.5 13.8 5.2M7 7.1C7.6 6.5 8.3 6 9 5.7L4.9 4.9L5.6 9C6 8.3 6.4 7.6 7 7.1M5.2 13.8C5 13 5 12.2 5 11.4L2.3 14.6L6.3 16C5.8 15.4 5.4 14.6 5.2 13.8M22 19V21H3L8.4 15.5C6.5 13.5 6.5 10.4 8.4 8.4C10.3 6.5 13.5 6.5 15.4 8.4L18.4 5.4L19.8 6.8L7.7 19H22Z" fill="{color}"/></svg>