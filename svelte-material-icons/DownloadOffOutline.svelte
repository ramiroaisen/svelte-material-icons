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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.11 21.46L2.39 1.73L1.11 3L7.11 9H5L12 16L13.06 14.95L16.11 18H5V20H18.11L20.84 22.73L22.11 21.46M11 5H13V9.8L15.6 12.4L19 9H15V3H9V5.8L11 7.8V5Z" fill="{color}"/></svg>