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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 20V12H2L12 3L22 12H19V20H5M12 5.69L7 10.19V18H17V10.19L12 5.69M11 17V16H13V17H11M11 15C10.72 15 10.5 14.78 10.5 14.5V13.6C9.6 13.08 9 12.11 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.11 14.4 13.08 13.5 13.6V14.5C13.5 14.78 13.28 15 13 15H11Z" fill="{color}"/></svg>