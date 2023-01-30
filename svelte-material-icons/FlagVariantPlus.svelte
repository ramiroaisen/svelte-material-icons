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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6 3C6.6 3 7 3.4 7 4V4.9C8.1 4.4 9.5 4 11 4C14 4 14 6 16 6C19 6 20 4 20 4V12C20 12 19 14 16 14S13 12 11 12C8 12 7 14 7 14V21H5V4C5 3.4 5.4 3 6 3M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" fill="{color}"/></svg>