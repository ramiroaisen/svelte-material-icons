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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10 11L9.06 13.06L7 14L9.06 14.94L10 17L10.94 14.94L13 14L10.94 13.06M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.91 4 2 4.9 2 6L2 18C2 19.1 2.91 20 4 20H20C21.11 20 22 19.1 22 18V4H18M20 18H4V6.47L5.77 10H16L15.37 11.37L14 12L15.37 12.63L16 14L16.63 12.63L18 12L16.63 11.37L16 10H20V18Z" fill="{color}"/></svg>