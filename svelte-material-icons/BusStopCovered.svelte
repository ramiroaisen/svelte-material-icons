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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20 3H7V2H6A1.78 1.78 0 0 0 4.59 3H2V5H3.73C2 10.58 2 22 2 22H7V5H20M22 8.5A2.5 2.5 0 1 0 19 11V22H20V11A2.5 2.5 0 0 0 22 8.5M15 11.5V16H14V22H12.5V17H11.5V22H10V16H9V11.5A1.5 1.5 0 0 1 10.5 10H13.5A1.5 1.5 0 0 1 15 11.5M12 6.5A1.5 1.5 0 1 0 13.5 8A1.5 1.5 0 0 0 12 6.5Z" fill="{color}"/></svg>