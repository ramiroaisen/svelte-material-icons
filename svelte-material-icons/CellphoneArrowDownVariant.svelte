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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 14L23 9L21.6 7.6L19 10.2V3H17V10.2L14.4 7.6L13 9L18 14M19 16V21C19 22.1 18.1 23 17 23H7C5.9 23 5 22.1 5 21V3C5 1.9 5.9 1 7 1H14V5H7V19H17V16H19Z" fill="{color}"/></svg>