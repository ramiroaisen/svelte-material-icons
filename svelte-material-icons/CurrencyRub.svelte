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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13.5 3H7V12H5V14H7V16H5V18H7V21H9V18H13V16H9V14H13.5C16.54 14 19 11.54 19 8.5S16.54 3 13.5 3M13.5 12H9V5H13.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12Z" fill="{color}"/></svg>