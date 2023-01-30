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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 6H19V12.1C20.2 12.3 21.2 12.8 22 13.5V7C22 6.5 21.5 6 21 6M6 17C6 17.5 6.5 18 7 18H12C12 16.9 12.3 15.9 12.8 15H6V17M16 2H3C2.5 2 2 2.5 2 3V17L6 13H14.7C15.4 12.5 16.2 12.2 17 12.1V3C17 2.5 16.5 2 16 2M17 14H19V17H22V19H19V22H17V19H14V17H17V14Z" fill="{color}"/></svg>