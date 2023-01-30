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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2,2H4V20H22V22H2V2M14,14.5L12,18H7.94L5.92,14.5L7.94,11H12L14,14.5M14.08,6.5L12.06,10H8L6,6.5L8,3H12.06L14.08,6.5M21.25,10.5L19.23,14H15.19L13.17,10.5L15.19,7H19.23L21.25,10.5Z" fill="{color}"/></svg>