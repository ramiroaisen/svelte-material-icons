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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10,2L8,8H11V2H10M13,2V8H16L14,2H13M2,9V10H4V11H6V10H18L18.06,11H20V10H22V9H2M7,11L3.34,22H11V11H7M13,11V22H20.66L17,11H13Z" fill="{color}"/></svg>