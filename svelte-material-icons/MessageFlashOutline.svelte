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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4 17.2V4H20V10H22V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H15V16H5.2L4 17.2M22.5 16H20.3L22 12H17V18H19V23L22.5 16Z" fill="{color}"/></svg>