<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 5V21H19V23H3C1.9 23 1 22.1 1 21V5H3M21 1H7C5.89 1 5 1.89 5 3V17C5 18.1 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.1 1 21 1M21 17H7V3H21V17M11 14H8V16H11V14M15 14H12V16H15V14M11 11H8V13H11V11M15 11H12V13H15V11M11 8H8V10H11V8M15 8H12V10H15V8Z" fill="{color}"/></svg>