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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 9H7V4H17V9M20 13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19H4V12C4 10.9 4.89 10 6 10H18C19.11 10 20 10.9 20 12V13.09M10 12H6V14H10V12M16 22H18V16H16V22M20 16V22H22V16H20Z" fill="{color}"/></svg>