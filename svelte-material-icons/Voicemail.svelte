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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18.5,15A3.5,3.5 0 0,1 15,11.5A3.5,3.5 0 0,1 18.5,8A3.5,3.5 0 0,1 22,11.5A3.5,3.5 0 0,1 18.5,15M5.5,15A3.5,3.5 0 0,1 2,11.5A3.5,3.5 0 0,1 5.5,8A3.5,3.5 0 0,1 9,11.5A3.5,3.5 0 0,1 5.5,15M18.5,6A5.5,5.5 0 0,0 13,11.5C13,12.83 13.47,14.05 14.26,15H9.74C10.53,14.05 11,12.83 11,11.5A5.5,5.5 0 0,0 5.5,6A5.5,5.5 0 0,0 0,11.5A5.5,5.5 0 0,0 5.5,17H18.5A5.5,5.5 0 0,0 24,11.5A5.5,5.5 0 0,0 18.5,6Z" fill="{color}"/></svg>