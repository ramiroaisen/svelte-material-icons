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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,2H17V12.5C17,10.83 13.67,10 12,10C10.33,10 7,10.83 7,12.5M17,0H7A2,2 0 0,0 5,2V16A2,2 0 0,0 7,18H17A2,2 0 0,0 19,16V2A2,2 0 0,0 17,0M12,8A2,2 0 0,0 14,6A2,2 0 0,0 12,4A2,2 0 0,0 10,6A2,2 0 0,0 12,8M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z" fill="{color}"/></svg>