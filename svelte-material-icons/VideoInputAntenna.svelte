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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,5A7,7 0 0,0 5,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H19A7,7 0 0,0 12,5M13,14.29C13.88,13.9 14.5,13.03 14.5,12A2.5,2.5 0 0,0 12,9.5A2.5,2.5 0 0,0 9.5,12C9.5,13 10.12,13.9 11,14.29V17.59L7.59,21L9,22.41L12,19.41L15,22.41L16.41,21L13,17.59V14.29M12,1A11,11 0 0,0 1,12H3A9,9 0 0,1 12,3A9,9 0 0,1 21,12H23A11,11 0 0,0 12,1Z" fill="{color}"/></svg>