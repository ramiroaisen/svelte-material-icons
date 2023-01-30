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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 7V22H3V20H19V7H14.72C14.38 7.6 13.74 8 13 8C13 9.11 12.1 10 11 10H8C6.9 10 6 9.1 6 8V4C6 2.9 6.9 2 8 2H11C12.1 2 13 2.9 13 4C13.74 4 14.38 4.41 14.72 5H19C20.11 5 21 5.89 21 7M6 15H13L11 11H8L6 15Z" fill="{color}"/></svg>