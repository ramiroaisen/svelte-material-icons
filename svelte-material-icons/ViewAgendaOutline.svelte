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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 13H3A1 1 0 0 0 2 14V20A1 1 0 0 0 3 21H21A1 1 0 0 0 22 20V14A1 1 0 0 0 21 13M20 19H4V15H20M21 3H3A1 1 0 0 0 2 4V10A1 1 0 0 0 3 11H21A1 1 0 0 0 22 10V4A1 1 0 0 0 21 3M20 9H4V5H20Z" fill="{color}"/></svg>