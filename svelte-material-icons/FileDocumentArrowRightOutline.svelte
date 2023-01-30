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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M23 19L20 16V18H16V20H20V22L23 19M13.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14L20 8V13.1C19.7 13 19.3 13 19 13S18.3 13 18 13.1V9H13V4H6V20H13.1C13.2 20.7 13.5 21.4 13.8 22M8 12H16V13.8C15.9 13.9 15.8 13.9 15.7 14H8V12M8 16H13V18H8V16Z" fill="{color}"/></svg>