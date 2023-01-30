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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.11,17H7.5L2.59,12L7.5,7H10.11L11.42,4.74L18.21,3L20.08,9.74L18.77,12L20.08,14.26L18.21,21L11.42,19.26L10.11,17M10.25,16.75L15.38,18.13L12.42,13H6.5L10.25,16.75M17.12,17.13L18.5,12L17.12,6.87L14.15,12L17.12,17.13M10.25,7.25L6.5,11H12.42L15.38,5.87L10.25,7.25Z" fill="{color}"/></svg>