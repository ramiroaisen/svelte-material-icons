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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.84 22.73L18.11 20H14V15.89L12.11 14H10V20H5V12H2L6.27 8.16L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 12H22L12 3L8.95 5.75L19 15.8V12Z" fill="{color}"/></svg>