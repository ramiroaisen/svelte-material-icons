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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 22H13C11.9 22 11 21.1 11 20V15H17V20C17 21.1 16.1 22 15 22M7 14H21L15 9.71V6C15 4.39 13.94 2 11 2S7 4.39 7 6C7 6.45 6.81 7 6 7H5V3H3V12H5V9H6C8.2 9 9 7.21 9 6C9 5.67 9.1 4 11 4C12.83 4 13 5.54 13 6V9.71L7 14Z" fill="{color}"/></svg>