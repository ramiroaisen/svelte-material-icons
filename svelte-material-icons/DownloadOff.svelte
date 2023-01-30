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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.84 22.73L18.11 20H5V18H16.11L13.06 14.95L12 16L5 9H7.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 9H15V3H9V5.8L15.6 12.4L19 9Z" fill="{color}"/></svg>