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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M11 19H10.75C9.45 19 7 18.22 7 15.25S9.45 11.5 10.75 11.5H11V13H10.75C10.38 13 8.5 13.13 8.5 15.25C8.5 17.44 10.5 17.5 10.75 17.5H11V19M14 16H10V14.5H14V16M13 11.5H13.25C14.55 11.5 17 12.28 17 15.25S14.55 19 13.25 19H13V17.5H13.25C13.62 17.5 15.5 17.37 15.5 15.25C15.5 13.06 13.5 13 13.25 13H13V11.5Z" fill="{color}"/></svg>