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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14 1H10C5 1 5 3 5 3V15C5 15 5 17 10 17V19H11V20C11 21.21 11.8 23 14 23H18V21H14C13.19 21 13 20.45 13 20V19H14V17C19 17 19 15 19 15V3C19 3 19 1 14 1M17 12H14V11H17V12M17 5H14V6H17V8H14V9H17V10H7V3.5C7.3 3.32 8.13 3 10 3H14C15.88 3 16.7 3.32 17 3.5V5Z" fill="{color}"/></svg>