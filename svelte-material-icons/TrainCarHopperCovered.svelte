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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M23 9V7H1V9L2 10.33V15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H10L11 18H13L14 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H22V10.33L23 9M4 15V13L5.5 15H4M5 10V9H19V10H5M20 15H18.5L20 13V15Z" fill="{color}"/></svg>