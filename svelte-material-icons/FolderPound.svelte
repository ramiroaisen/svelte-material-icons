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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.25,13H17.25L16.75,15H14.75L15.25,13M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20A2,2 0 0,1 22,8M20,12H18.5L19,10H18L17.5,12H15.5L16,10H15L14.5,12H13V13H14.25L13.75,15H12V16H13.5L13,18H14L14.5,16H16.5L16,18H17L17.5,16H19V15H17.75L18.25,13H20V12Z" fill="{color}"/></svg>