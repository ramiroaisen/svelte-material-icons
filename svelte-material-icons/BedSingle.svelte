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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 10V7C17 5.9 16.11 5 15 5H9C7.9 5 7 5.9 7 7V10C5.9 10 4.89 10.9 5 12V17H6.33L7 19H8L8.67 17H15.33L16 19H17L17.67 17H19V12C19 10.9 18.11 10 17 10M15 10H9V7H15Z" fill="{color}"/></svg>