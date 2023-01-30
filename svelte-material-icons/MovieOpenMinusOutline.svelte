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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13.09 20C13.21 20.72 13.46 21.39 13.81 22H4C2.9 22 2 21.11 2 20V10H22V13.81C21.39 13.46 20.72 13.22 20 13.09V12H4V20H13.09M21.62 6.1L20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1M16.71 7.07L13.97 3.54L12 3.93L14.75 7.46L16.71 7.07M4.16 5.5L3.18 5.69C2.1 5.9 1.39 6.96 1.61 8.04L2 10L6.9 9.03L4.16 5.5M11.81 8.05L9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05M15 18V20H23V18H15Z" fill="{color}"/></svg>