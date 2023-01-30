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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 10.73V19H17V11.36L15 12V19H13V12.62L11 13.26V19H9V13.89L7 14.5V19H5V15.15L2.57 15.92L2 14L5 13.05V5H7V12.42L9 11.79V5H11V11.16L13 10.53V5H15V9.9L17 9.26V5H19V8.63L21 8L21.57 9.92L19 10.73Z" fill="{color}"/></svg>