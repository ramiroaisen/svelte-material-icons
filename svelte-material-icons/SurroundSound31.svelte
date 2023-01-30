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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14 17H12V15H14V17M20 7V17H18V9H16V7H20M10 15C10 16.1 9.1 17 8 17H4V15H8V13H6V11H8V9H4V7H8C9.1 7 10 7.9 10 9V10.5C10 11.3 9.3 12 8.5 12C9.3 12 10 12.7 10 13.5V15" fill="{color}"/></svg>