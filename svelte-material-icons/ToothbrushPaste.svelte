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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17.86 1.5L12.91 6.43L15.03 8.55L16.09 7.5L15.03 6.43L17.86 3.6L18.92 4.66L20 3.6M21.4 3.6L15.56 9.44L13.43 10.15L3 20.57L4.43 22L10.08 16.33L14.33 20.57L18.57 16.33L14.33 12.09L14.5 11.9L16.63 11.19L21.4 6.43C22.18 5.65 22.18 4.38 21.4 3.6M6.55 4.31L2.31 8.55L7.26 13.5L11.5 9.26M18.22 18.1L16.09 20.22L17.5 21.63L19.63 19.5Z" fill="{color}"/></svg>