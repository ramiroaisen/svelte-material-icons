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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M17 16.92C17 18.07 16.07 19 14.92 19H9.5C8.12 19 7 17.88 7 16.5C7 15.21 8 14.15 9.23 14C9.75 13 10.79 12.33 12 12.33C13.5 12.33 14.78 13.42 15.07 14.83C16.14 14.93 17 15.82 17 16.92Z" fill="{color}"/></svg>