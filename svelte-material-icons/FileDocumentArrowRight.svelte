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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M23 19L20 16V18H16V20H20V22L23 19M13 19C13 18.7 13 18.3 13.1 18H6V16H13.8C14.3 15.2 14.9 14.5 15.7 14H6V12H18V13.1C18.3 13 18.7 13 19 13S19.7 13 20 13.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H13.8C13.3 21.1 13 20.1 13 19M13 3.5L18.5 9H13V3.5Z" fill="{color}"/></svg>