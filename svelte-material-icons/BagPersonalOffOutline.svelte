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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,19.35L2.38,1.73L1.11,3L4.77,6.66C4.27,7.34 4,8.16 4,9V20A2,2 0 0,0 6,22H18C18.56,22 19.08,21.76 19.46,21.35L20.84,22.73L22.11,21.46L20,19.35M6,9C6,8.69 6.08,8.38 6.22,8.11L13.11,15H6V9M18,20H6V16H8V18H9V16H14.11L18,19.89V20M16,7A2,2 0 0,1 18,9V14.8L20,16.8V9A4,4 0 0,0 16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V4.8L10.2,7H16M10,4H14V5H10V4Z" fill="{color}"/></svg>