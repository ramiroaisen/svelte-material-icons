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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6 3H18V5H6V3M17 6H7C5.9 6 5 6.9 5 8V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V8C19 6.9 18.1 6 17 6M16 15H13.5V17.5H10.5V15H8V12H10.5V9.5H13.5V12H16V15Z" fill="{color}"/></svg>