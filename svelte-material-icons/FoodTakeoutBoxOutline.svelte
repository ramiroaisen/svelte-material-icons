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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7.79 18L7.28 11H16.74L16.23 18H7.79M9.83 5H14.16L16.96 7.73L16.87 9H7.12L7.03 7.73L9.83 5M22 7.46L20.59 6.05L19 7.63L19.03 7.07L15 3H9L4.97 7.07L5 7.57L3.41 6L2 7.44L5.23 10.55L5.93 20H18.07L18.77 10.56L22 7.46Z" fill="{color}"/></svg>