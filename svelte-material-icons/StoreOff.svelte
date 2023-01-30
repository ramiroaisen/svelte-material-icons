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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9.2 6L7.2 4H20V6H9.2M20 16.8V14H21V12L20 7H10.2L17.2 14H18V14.8L20 16.8M22.11 21.46L20.84 22.73L14 15.89V20H4V14H3V12L4 7H5.11L1.11 3L2.39 1.73L22.11 21.46M12 14H6V18H12V14Z" fill="{color}"/></svg>