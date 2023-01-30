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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20 11H23L19 15L15 11H18C18 7.69 15.31 5 12 5L11 5.08V3.06L12 3C16.42 3 20 6.58 20 11M9 7H5C3.9 7 3 7.9 3 9V18C3 19.11 3.9 20 5 20H11C12.11 20 13 19.11 13 18V11L9 7M11 18H5V9H8V12H11V18Z" fill="{color}"/></svg>