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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M9,1H3A2,2 0 0,0 1,3V16A2,2 0 0,0 3,18H4V15H3V3H9V11H11V3A2,2 0 0,0 9,1M23,21V15A2,2 0 0,0 21,13H8A2,2 0 0,0 6,15V21A2,2 0 0,0 8,23H21A2,2 0 0,0 23,21M9,21V15H21V21H9M23,10H21.5C21.5,7 19.69,4.27 16.92,3.09L16,5L14,1A9,9 0 0,1 23,10Z" fill="{color}"/></svg>