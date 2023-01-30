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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2.39 1.73L1.11 3L7 8.89V10H6C4.89 10 4 10.9 4 12V19H17.11L20.84 22.73L22.11 21.46L2.39 1.73M6 17V12H10.11L15.11 17H6M9.2 6L7.2 4H17V10H18C19.11 10 20 10.9 20 12V16.8L18 14.8V12H15.2L13.2 10H15V6H9.2M7 13H11V15H7V13Z" fill="{color}"/></svg>