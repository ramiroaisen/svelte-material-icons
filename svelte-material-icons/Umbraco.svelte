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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8.6,8.6L7.17,8.38C6.5,11.67 6.46,14.24 7.61,15.5C8.6,16.61 11.89,16.61 11.89,16.61C11.89,16.61 15.29,16.61 16.28,15.5C17.43,14.24 17.38,11.67 16.72,8.38L15.29,8.6C15.29,8.6 16.54,13.88 14.69,14.69C13.81,15.07 11.89,15.07 11.89,15.07C11.89,15.07 10.08,15.07 9.2,14.69C7.35,13.88 8.6,8.6 8.6,8.6M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3Z" fill="{color}"/></svg>