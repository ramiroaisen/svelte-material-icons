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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.4 14.21C14.47 14.91 13.75 15.88 13.35 17H6.5L9.25 13.47L11.21 15.83L13.96 12.29L15.4 14.21M5 19V5H19V13C19.7 13 20.37 13.13 21 13.35V5C21 3.9 20.11 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19H5M15 18V20H23V18H15Z" fill="{color}"/></svg>