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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,6A11,11 0 0,0 1,17H3C3,12.04 7.04,8 12,8C16.96,8 21,12.04 21,17H23A11,11 0 0,0 12,6M12,10C8.14,10 5,13.14 5,17H7A5,5 0 0,1 12,12A5,5 0 0,1 17,17H19C19,13.14 15.86,10 12,10Z" fill="{color}"/></svg>