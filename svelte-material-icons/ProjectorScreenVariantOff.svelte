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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20.84 22.73L16.11 18H5V9H4C3.45 9 3 8.55 3 8V7C3 6.45 3.45 6 4 6H4.11L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M19 9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6H9.2L19 15.8V9Z" fill="{color}"/></svg>