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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 5V11H19V5H5M17 9H7V7H17V9M5.27 13.32L3.5 15.09L4.91 16.5L6.68 14.73L5.27 13.32M18.73 13.32L17.32 14.73L19.09 16.5L20.5 15.09L18.73 13.32M11 16V19H13V16H11Z" fill="{color}"/></svg>