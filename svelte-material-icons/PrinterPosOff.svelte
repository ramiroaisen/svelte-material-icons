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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12.2 9L7.2 4H17V9H12.2M20 16.8V12C20 10.9 19.11 10 18 10H13.2L20 16.8M22.11 21.46L20.84 22.73L17.11 19H4V12C4 10.9 4.89 10 6 10H8.11L1.11 3L2.39 1.73L22.11 21.46M10 12H6V14H10V12Z" fill="{color}"/></svg>