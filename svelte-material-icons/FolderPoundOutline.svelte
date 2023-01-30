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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6M19,12V11H17.5L18,9H17L16.5,11H14.5L15,9H14L13.5,11H12V12H13.25L12.75,14H11V15H12.5L12,17H13L13.5,15H15.5L15,17H16L16.5,15H18V14H16.75L17.25,12H19M15.75,14H13.75L14.25,12H16.25L15.75,14Z" fill="{color}"/></svg>