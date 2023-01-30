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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 4V10L15 8L13 10V4H9V20H12.1C12.2 20.7 12.5 21.4 12.8 22H7C5.9 22 5 21 5 20V19H3V17H5V13H3V11H5V7H3V5H5V4C5 2.9 5.9 2 7 2H19C20 2 21 3 21 4V13.8C20.4 13.4 19.7 13.2 19 13.1V4H17M5 19H7V17H5V19M5 13H7V11H5V13M5 7H7V5H5V7M17 15V18H14V20H17V23H19V20H22V18H19V15H17Z" fill="{color}"/></svg>