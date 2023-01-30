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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.5 3H3.5C2.4 3 1.6 4.3 2.2 5.3L10.7 20.2C11 20.7 11.5 21 12 21S13 20.7 13.3 20.2L21.8 5.3C22.4 4.3 21.6 3 20.5 3M12 18.5L4.3 5H19.6L12 18.5M6.9 6.5H17.1L12 15.5L6.9 6.5Z" fill="{color}"/></svg>