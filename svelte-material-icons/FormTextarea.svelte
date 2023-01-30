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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13 9H4V23H2V7H13M23 9V7H17V5A1 1 0 0 1 18 4H20V2H17.5C17 2 16 2.45 16 3C16 2.45 15.05 2 14.5 2H12V4H14A1 1 0 0 1 15 5V19A1 1 0 0 1 14 20H12V22H14.5C15.05 22 16 21.55 16 21C16 21.55 16.95 22 17.5 22H20V20H18A1 1 0 0 1 17 19V9Z" fill="{color}"/></svg>