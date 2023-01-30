<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.11 21.46L2.39 1.73L1.11 3L6.27 8.16L2 12H5V20H11V14H12.11L13 14.89V20H18.11L20.84 22.73L22.11 21.46M9 12V18H7V10.19L7.68 9.57L10.11 12H9M15 18V16.89L16.11 18H15M10.36 7.16L8.95 5.75L12 3L22 12H19V15.8L17 13.8V10.19L12 5.69L10.36 7.16Z" fill="{color}"/></svg>