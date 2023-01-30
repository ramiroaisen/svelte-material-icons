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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z" fill="{color}"/></svg>