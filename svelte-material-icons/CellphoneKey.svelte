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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 1C5.9 1 5 1.9 5 3V7H7V4H17V20H7V17H5V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1H7M6 9C4.3 9 3 10.3 3 12S4.3 15 6 15C7.3 15 8.4 14.2 8.8 13H11V15H13V13H15V11H8.8C8.4 9.8 7.3 9 6 9M6 11C6.6 11 7 11.4 7 12S6.6 13 6 13 5 12.6 5 12 5.4 11 6 11Z" fill="{color}"/></svg>